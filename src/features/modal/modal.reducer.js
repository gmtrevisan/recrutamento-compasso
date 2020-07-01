import * as actions from './modal.actions';

const initialState = {
    open: false,
    data: {},
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.setModalOpenAction().type:
        return {
            ...state,
            open: action.open,
        };
    case actions.setModalDataAction().type:
        return {
            ...state,
            data: action.data,
        };
    default:
        return state;
  }
};

export default modalReducer;