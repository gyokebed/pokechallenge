import { ADD_CARDS, ADD_SETS, SHOW_CARD_INFO } from './actionTypes';

export default (state = {cards: [], sets: [], card: [], currentPage: 1}, action) => {
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

    case SHOW_CARD_INFO:
      return ({
        ...state,
        card: action.payload.data.card
      });
    
    default:
      return state;
  }
}