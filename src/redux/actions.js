import { ADD_CARDS, ADD_SETS, SHOW_CARD_INFO, SHOW_CARD_LIST_BY_CODE, UPDATE_PAGE } from './actionTypes';
import axios from 'axios';

export const addCards = response => ({
  type: ADD_CARDS,
  payload: response
});

export const addSets = response => ({
  type: ADD_SETS,
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
    axios.get(url)
    .then(response => {
      console.log(response);
      dispatch(addCards(response));
      dispatch(updateCurrentPage(page));
    })
  }
};

export const fetchSets = (url, page) => {
  return dispatch => {
    axios.get(url)
    .then(response => {
      console.log(response);
      dispatch(addSets(response));
      dispatch(updateCurrentPage(page));
    })
  }
};

export const fetchCard = url => {
  return dispatch => {
    axios.get(url)
    .then(response => {
      console.log(response);
      dispatch(showCard(response));
    })
  }
};

export const fetchCode = (url, page) => {
  return dispatch => {
    axios.get(url)
    .then(response => {
      console.log(response);
      dispatch(showCode(response));
      dispatch(updateCurrentPage(page));
    })
  }
};