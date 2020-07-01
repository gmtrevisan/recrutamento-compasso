import 'rxjs';
import { ajax } from 'rxjs/ajax';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import modalReducer from '../features/modal/modal.reducer';
import newsReducer from '../features/news/news.reducer';

import * as newsEpics from '../features/news/news.epics';

const epics = [
    ...Object.values(newsEpics),
];

const rootEpic = combineEpics(...epics);

export const reducers = combineReducers({
    newsReducer,
    modalReducer,
});

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = reduxDevTools || compose;

const configureStore = () => {
    const epicMiddleware = createEpicMiddleware({ dependencies: { ajax } });
    const middleware = [epicMiddleware];

    const store = createStore(
        reducers,
        composeEnhancers(applyMiddleware(...middleware)),
    );

    epicMiddleware.run(rootEpic);
    return store;
};

export const store = configureStore();
