import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { TestScheduler } from 'rxjs/testing';
import { render } from '@testing-library/react';
import { reducers } from './store/configureStore';

const config = (initialState) => {
    const store = createStore(reducers, initialState);
    store.dispatch = jest.fn();
    return store;
};

export const stateEpic = {
    value: config({
        newsReducer: {
            loading: false,
            error: false,
            news: [],
            page: 0,
            filter: '"Technology" "Science"',
        },
    }).getState(),
};

export const createTestScheduler = () => new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
});

export function renderWithRedux(ui, { initialState = {}, store = config(initialState) } = {}) {
    return {
        ...render(<Provider store={store}>{ui}</Provider>),
        store,
    };
};
