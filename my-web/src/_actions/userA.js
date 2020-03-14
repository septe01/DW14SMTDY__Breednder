import axios from "axios";

import { API } from "../config/api";
import { appContants } from "../config/AppConstants";

export const getUser = users => {
  return {
    type: appContants.GET_USER,
    payload: axios({
      method: "GET",
      url: `${API.baseURL}/userAuth`,
      headers: API.headers
    })
  };
};
