import * as Auth from "./Auth";
import { store } from "./store";

type InitInput = {
  clientId: string;
  authHost?: string;
};

const init = (input: InitInput) => {
  store.state.clientId = input.clientId;
  store.state.authHost = input.authHost;
};

const Hana = { init, Auth };
export default Hana;
