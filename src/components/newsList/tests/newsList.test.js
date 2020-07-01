import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithRedux } from '../../../setupTests';
import * as newsActions from '../../../features/news/news.actions';
import NewsList from '../NewsList';

test('Montando o componente', () => {
    const { container } = renderWithRedux(<NewsList />);
    expect(container.querySelector('.newsList')).not.toBe(null);
});

test('Disparando request inicial', () => {
    const { container, store } = renderWithRedux(<NewsList filter="Teste filter" />);
    expect(store.dispatch).toHaveBeenCalledWith(newsActions.setNewsFilterAction('Teste filter'));
});

test('Exibindo a mensagem de carregando', () => {
    const mock = {
        news: [],
        loading: true,
        error: false,
        page: 0,
    };
    const { container } = renderWithRedux(<NewsList />, { initialState: { newsReducer: { ...mock } } });
    expect(container.querySelector('.newsList__loading')).not.toBe(null);
});

test('Exibindo a mensagem de erro', () => {
    const mock = {
        news: [],
        loading: false,
        error: true,
        page: 0,
    };
    const { container } = renderWithRedux(<NewsList />, { initialState: { newsReducer: { ...mock } } });
    expect(container.querySelector('.newsList__error')).not.toBe(null);
});

test('Clicando para carregar mais', () => {
    const mock = {
        news: [],
        loading: false,
        error: false,
        page: 0,
    };
    const { container, store } = renderWithRedux(<NewsList />, { initialState: { newsReducer: { ...mock } } });
    fireEvent.click(container.querySelector('.newsList__load button'));
    expect(store.dispatch).toHaveBeenCalledWith(newsActions.setNewsPageAction(1));
});

test('Listando itens', () => {
    const mock = {
        news: [
            { 
                _id: 0,
                headline: { main: 'Teste listagem' }, 
                multimedia: [],
            }
        ],
        loading: false,
        error: false,
        page: 0,
    };
    const { getByText } = renderWithRedux(<NewsList />, { initialState: { newsReducer: { ...mock } } });
    expect(getByText(/Teste listagem/)).not.toBe(null);
});
