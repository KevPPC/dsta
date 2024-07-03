import mock from "./mock";

mock.onGet("/profile").reply(200, {
  data: { id: 1, name: "John Smith" },
});
