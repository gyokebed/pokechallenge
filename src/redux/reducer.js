import {
  ADD_CARDS,
  ADD_SETS,
  SHOW_CARD_INFO,
  SHOW_CARD_LIST_BY_CODE,
  UPDATE_PAGE
} from "./actionTypes";

export default (state = { cards: [], sets: [], card: [] }, action) => {
  switch (action.type) {
    case ADD_CARDS:
      return {
        ...state,
        pageSize: action.payload.headers["page-size"],
        totalCount: action.payload.headers["total-count"],
        cards: [...action.payload.data.cards]
      };

    case ADD_SETS:
      return {
        ...state,
        pageSize: action.payload.headers["page-size"],
        totalCount: action.payload.headers["total-count"],
        sets: [...action.payload.data.sets]
      };

    case SHOW_CARD_INFO:
      return {
        ...state,
        card: action.payload.data.card
      };

    case SHOW_CARD_LIST_BY_CODE:
      return {
        ...state,
        pageSize: action.payload.headers["page-size"],
        totalCount: action.payload.headers["total-count"],
        cards: [...action.payload.data.cards]
      };

    case UPDATE_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };

    default:
      return state;
  }
};
