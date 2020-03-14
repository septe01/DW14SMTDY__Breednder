import { appContants } from "../config/AppConstants";

const initialState = {
  indexPet: [],
  indexPetByUser: [],
  // pets: [],
  isLoading: false,
  isError: false
};

const pet = (state = initialState, action) => {
  switch (action.type) {
    case appContants.GET_PET_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case appContants.GET_PET_FULFILLED:
      return {
        ...state,
        indexPet: action.payload,
        isLoading: false
      };
    case appContants.GET_PET_REJECTED:
      return {
        indexPet: action.payload,
        isLoading: false
      };

    // getALLPetsByUser
    case appContants.GET_PETBYUSER_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case appContants.GET_PETBYUSER_FULFILLED:
      return {
        ...state,
        indexPetByUser: action.payload.data,
        isLoading: false
      };
    case appContants.GET_PETBYUSER_REJECTED:
      return {
        ...state,
        indexPetByUser: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default pet;
