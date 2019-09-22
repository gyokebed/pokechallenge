import { ADD_CARDS } from './actionTypes';

export default (state = {cards: [], currentPage: 1}, action) => {
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
    
    default:
      return state;
  }
}