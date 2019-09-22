import { ADD_CARDS, ADD_SETS } from './actionTypes';

export default (state = {cards: [], sets: [], currentPage: 1}, action) => {
  switch (action.type) {
    case ADD_CARDS:
      return ({
        ...state,
        pageSize: action.payload.headers['page-size'],
        totalCards: action.payload.headers['total-count'],
        cards: [
          ...action.payload.data.cards
        ]
      });
    
    case ADD_SETS:
      return ({
        ...state,
        pageSize: action.payload.headers['page-size'],
        totalSets: action.payload.headers['total-count'],
        sets: [
          ...action.payload.data.sets
        ]
      });
    
    default:
      return state;
  }
}