import CryptoJS from "crypto-js";
import mock from "../mock";
const JWT_SECRET = "xxxxxxxxxxxxxxxxxxxxxxxx";
const JWT_EXPIRATION_TIME = 60 * 1000;

const users = [
  {
    id: 1,
    password: 'admin',
    fullName: 'Admin',
    email: 'admin@gmail.com'
  }
]

mock.onPost('/auth/login').reply(request => {
  const { email, password } = JSON.parse(request.data)
  let error = {
    email: ['Something went wrong']
  }
  const user = users.find(u => u.email === email && u.password === password)
  const expiresIn = Date.now() + JWT_EXPIRATION_TIME;
  if (user) {
      console.log("user", user)
    // const accessToken = jwt.encode({ id: user.id, expiresIn }, JWT_SECRET)
    const accessToken = CryptoJS.AES.encrypt(JSON.stringify({ id: user.id, expiresIn }), JWT_SECRET).toString();

    const response = {
      accessToken,
      userData: { ...user, password: undefined }
    }
    // Decrypt
    // var bytes  = CryptoJS.AES.decrypt(response.accessToken, JWT_SECRET);
    // var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    // console.log("post /auth/login", decryptedData)
    return [200, response]
  } else {
    error = {
      email: ['email or Password is Invalid']
    }

    return [400, { error }]
  }
})
mock.onGet('/auth').reply(config => {
  // ** Get token from header
  let token = config.headers.authorization || "";
  token = token.split(" ")[1];
  if (!token) return [401, { error: { error: 'Bad Request' } }]
  // ** Default response
  let response = [200, {}]
  // ** Checks if the token is valid or expired
  // Decrypt
  var bytes  = CryptoJS.AES.decrypt(token, JWT_SECRET);
  var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  console.log("decryptedData", decryptedData);
  if (!decryptedData) return [401, { error: { error: 'Bad Request' } }]
  const user = users.find(u => u.id == decryptedData.id);
  if (!user) return [401, { error: { error: 'Bad Request' } }]
  let now = Date.now();
  if (now > decryptedData.expiresIn) return [401, { error: { error: 'Bad Request' } }]
  // console.log("post /auth/login", decryptedData)
  return  [200, { userData: { ...user, password: undefined } }]
})
mock.onPost('/auth/set-pwd').reply(request => {
  const { email, password } = JSON.parse(request.data)
  users.forEach((u, i) => {
      if (u.email == email) {
          u.password = password;
      }
  });
  return [200, {}]
})
mock.onPost('/auth/change-pwd').reply(request => {
  const { oldPassword, newPassword } = JSON.parse(request.data)
  let token = config.headers.authorization || "";
  token = token.split(" ")[1];
  if (!token) return [401, { error: { error: 'Bad Request' } }]
  // ** Default response
  let response = [200, {}]
  // ** Checks if the token is valid or expired
  // Decrypt
  var bytes  = CryptoJS.AES.decrypt(token, JWT_SECRET);
  var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  console.log("decryptedData", decryptedData);
  if (!decryptedData) return [401, { error: { error: 'Bad Request' } }]
  const user = users.find(u => u.id == decryptedData.id);
  if (!user) return [401, { error: { error: 'Bad Request' } }]
  if (user.password != oldPassword) return [401, { error: { error: 'Bad Request' } }]
  users.forEach((u, i) => {
      if (u.email == user.email) {
          u.password = newPassword;
      }
  });
  return [200, {}]
})
