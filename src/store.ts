import { create } from "zustand";

interface Store {
  clientId?: string;
  authHost?: string;
  accessToken?: string;
}

export const store = create<Store>()((set) => ({
  clientId: "",
  authHost: "",
}));
