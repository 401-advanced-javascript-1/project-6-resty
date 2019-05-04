import {
  GET,
  POST,
  DESTROY,
  PUT,
  PATCH
} from '../actions/form-actions.js';

const initialReducerState = {};

const formReducer= (state, action) => {
  if (state === undefined) {
    console.log('Unable to retrieve state, returning initialReducerState instead.');
    return initialReducerState;
  };

  console.log(`action: ${action.type}, ${state}`);

  switch(action.type) {
    case GET:
      console.log('GET ACTION');

      return ;

    case POST:
      console.log('POST ACTION');
      
      return ;

    case DESTROY:
      console.log('DESTROY ACTION');
      
      return ;

    case PUT:
      console.log('PUT ACTION');
      
      return ;

    case PATCH:
      console.log('PATCH ACTION');
      
      return ;


    default:
      return state;
  }
};

export default formReducer;
