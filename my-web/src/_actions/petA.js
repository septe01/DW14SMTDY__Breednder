import axios from "axios";

import { API } from "../config/api";
import { appContants } from "../config/AppConstants";

//get all data pet
export const getPets = () => {
  return {
    type: appContants.GET_PET,
    payload: axios({
      method: "GET",
      url: `${API.baseURL}/pet`,
      headers: API.headers
    })
  };
};

//get all pet by user id
export const getPetsByUser = () => {
  return {
    type: appContants.GET_PETBYUSER,
    payload: axios({
      method: "GET",
      url: `${API.baseURL}/petuser`,
      headers: API.headers
    })
  };
};

// export const petDetail = () => {
//   return {
//     type: appContants.GET_PET_DETAIL
//   };
// };
