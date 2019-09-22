import { ADD_CARDS } from './actionTypes';
import axios from 'axios';

export const addCards = response => ({
  type: ADD_CARDS,
  payload: response
});

export const fetchCards = url => {
  return dispatch => {
    axios.get(url)
    .then(response => {
      dispatch(addCards(response));
    })
  }
};