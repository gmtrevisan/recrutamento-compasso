import newsReducer from '../news.reducer';
import * as actions from '../news.actions';

const initialState = {
    loading: false,
    error: false,
    news: [],
    page: 0,
    filter: '"Technology" "Science"',
};

test('Estado inicial do reducer', () => {
    expect(newsReducer(undefined, {})).toEqual(initialState);
});

test('resetNewsAction', () => {
    const expected = { ...initialState, news: [] };
    expect(newsReducer(undefined, actions.resetNewsAction())).toEqual(expected);
});

test('fetchNewsAction', () => {
    const expected = { ...initialState, loading: true, error: false };
    expect(newsReducer(undefined, actions.fetchNewsAction())).toEqual(expected);
});

test('fetchNewsSuccessAction', () => {
    const expected = { ...initialState, news: [1,2,3] };
    const response = { response: { docs: [1,2,3] } };
    expect(newsReducer(undefined, actions.fetchNewsSuccessAction(response))).toEqual(expected);
});

test('fetchNewsErrorAction', () => {
    const expected = { ...initialState, loading: false, error: true };
    expect(newsReducer(undefined, actions.fetchNewsErrorAction())).toEqual(expected);
});

test('setNewsPageAction', () => {
    const expected = { ...initialState, page: 1 };
    expect(newsReducer(undefined, actions.setNewsPageAction(1))).toEqual(expected);
});

test('setNewsFilterAction', () => {
    const expected = { ...initialState, filter: 'Teste filter' };
    expect(newsReducer(undefined, actions.setNewsFilterAction('Teste filter'))).toEqual(expected);
});