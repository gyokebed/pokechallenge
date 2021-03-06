import {
  SHOW_CARDS,
  SHOW_SETS,
  SHOW_CARD_INFO,
  SHOW_CARD_LIST_BY_CODE,
  UPDATE_PAGE
} from "./actionTypes";
import axios from "axios";

export const addCards = response => ({
  type: SHOW_CARDS,
  payload: response
});

export const addSets = response => ({
  type: SHOW_SETS,
  payload: response
});

export const showCard = response => ({
  type: SHOW_CARD_INFO,
  payload: response
});

export const showCode = response => ({
  type: SHOW_CARD_LIST_BY_CODE,
  payload: response
});

export const updateCurrentPage = page => ({
  type: UPDATE_PAGE,
  payload: page
});

export const fetchCards = (url, page) => {
  return dispatch => {
    axios.get(url).then(response => {
      dispatch(addCards(response));
      dispatch(updateCurrentPage(page));
    });
  };
};

export const fetchSets = (url, page) => {
  return dispatch => {
    axios.get(url).then(response => {
      dispatch(addSets(response));
      dispatch(updateCurrentPage(page));
    });
  };
};

export const fetchCard = url => {
  return dispatch => {
    axios.get(url).then(response => {
      dispatch(showCard(response));
    });
  };
};

export const fetchCode = (url, page) => {
  return dispatch => {
    axios.get(url).then(response => {
      dispatch(showCode(response));
      dispatch(updateCurrentPage(page));
    });
  };
};
