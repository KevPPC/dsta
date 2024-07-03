import { create } from "zustand";

export const useProfileStore = create()((set) => ({
  profile: undefined,
  setProfile: (profile) => {
    return set({ profile });
  },
}));

export const setProfile = (profile) => {
  return useProfileStore.setState({
    profile,
  });
};
