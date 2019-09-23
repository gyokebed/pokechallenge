import { ADD_CARDS, ADD_SETS, SHOW_CARD_INFO, SHOW_CARD_LIST_BY_CODE } from './actionTypes';
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

export const fetchCards = url => {
  return dispatch => {
    axios.get(url)
    .then(response => {
      console.log(response);
      dispatch(addCards(response));
    })
  }
};

export const fetchSets = url => {
  return dispatch => {
    axios.get(url)
    .then(response => {
      console.log(response);
      dispatch(addSets(response));
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

export const fetchCode = url => {
  return dispatch => {
    axios.get(url)
    .then(response => {
      console.log(response);
      dispatch(showCode(response));
    })
  }
};