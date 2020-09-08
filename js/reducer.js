import * as actions from './action';

const initState = {
  count: 0,
  request: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actions.ADD_COUNTER:
      return {
        ...state,
        count: state.count + 1,
      };
    case actions.FETCH_COUNT_REQUEST:
      return {
        ...state,
        request: true,
      };
    case actions.FETCH_COUNT_SUCCESS:
      return {
        ...state,
        count: action.count,
        request: false,
      };
    default:
      return state;
  }
};

export default reducer;