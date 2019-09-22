import { ADD_CARDS, ADD_SETS } from './actionTypes';
import axios from 'axios';

export const addCards = response => ({
  type: ADD_CARDS,
  payload: response
});

export const addSets = response => ({
  type: ADD_SETS,
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