import modalReducer from '../modal.reducer';
import * as actions from '../modal.actions';

const initialState = {
    open: false,
    data: {},
};

test('Estado inicial do reducer', () => {
    expect(modalReducer(undefined, {})).toEqual(initialState);
});

test('setModalOpenAction', () => {
    const expected = { ...initialState, open: true };
    expect(modalReducer(undefined, actions.setModalOpenAction(true))).toEqual(expected);
});

test('setModalDataAction', () => {
    const expected = { ...initialState, data: { teste: true } };
    expect(modalReducer(undefined, actions.setModalDataAction({ teste: true }))).toEqual(expected);
});
