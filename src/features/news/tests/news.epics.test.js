import { ActionsObservable } from 'redux-observable';
import { of, throwError } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';
import * as epics from '../news.epics';
import * as actions from '../news.actions';
import { createTestScheduler, stateEpic } from '../../../setupTests'; 

test('fetchNewsEpic success', () => {
    const marbles1 = 'a-';
    const marbles2 = '-b';
    const ts = createTestScheduler();
    const response = { response: {} };
    const duration = ts.createTime('-|');
    const state$ = stateEpic;
    const ajax = () => of(response).pipe(delay(duration, ts));
    const values = {
        a: actions.fetchNewsAction(),
        b: actions.fetchNewsSuccessAction(response.response),
    };
    const source = ActionsObservable.from(
        ts.createColdObservable(marbles1, values),
    );
    const actual = epics.fetchNewsEpic(source, state$, { ajax });
    ts.expectObservable(actual).toBe(marbles2, values);
    ts.flush();
});

test('fetchNewsEpic error', () => {
    const marbles1 = 'a-';
    const marbles2 = '-b';
    const ts = createTestScheduler();
    const duration = ts.createTime('-|');
    const state$ = stateEpic;
    const ajax = () => of({}).pipe(delay(duration, ts), mergeMap(() => throwError({})));
    const values = {
        a: actions.fetchNewsAction(),
        b: actions.fetchNewsErrorAction(),
    };
    const source = ActionsObservable.from(
        ts.createColdObservable(marbles1, values),
    );
    const actual = epics.fetchNewsEpic(source, state$, { ajax });
    ts.expectObservable(actual).toBe(marbles2, values);
    ts.flush();
});

test('setNewsPageEpic', () => {
    const marbles1 = 'a';
    const marbles2 = 'b';
    const ts = createTestScheduler();
    const values = {
        a: actions.setNewsPageAction(1),
        b: actions.fetchNewsAction(),
    };
    const source = ActionsObservable.from(
        ts.createColdObservable(marbles1, values),
    );
    const actual = epics.setNewsPageEpic(source);
    ts.expectObservable(actual).toBe(marbles2, values);
    ts.flush();
});

test('setNewsFilterEpic', () => {
    const marbles1 = 'a';
    const marbles2 = '(bc)';
    const ts = createTestScheduler();
    const values = {
        a: actions.setNewsFilterAction(),
        b: actions.resetNewsAction(),
        c: actions.setNewsPageAction(0),
    };
    const source = ActionsObservable.from(
        ts.createColdObservable(marbles1, values),
    );
    const actual = epics.setNewsFilterEpic(source);
    ts.expectObservable(actual).toBe(marbles2, values);
    ts.flush();
});