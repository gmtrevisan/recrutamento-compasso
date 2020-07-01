import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithRedux } from '../../../setupTests';
import * as modalActions from '../../../features/modal/modal.actions';
import Modal from '../Modal';

test('Montando o componente', () => {
    const { container } = renderWithRedux(<Modal />);
    expect(container.querySelector('.modal')).not.toBe(null);
});

test('Montando o componente aberto', () => {
    const { container } = renderWithRedux(<Modal />, { initialState: { modalReducer: { open: true, data: {} } } });
    expect(container.querySelector('.modal--open')).not.toBe(null);
});

test('Montando informações', () => {
    const data = {
        abstract: 'Teste abstract', 
        web_url: 'Teste web_url', 
        headline: { 
            main: 'Teste main'
        }
    };
    const { getByText } = renderWithRedux(<Modal />, { initialState: { modalReducer: { open: true, data } } });
    expect(getByText(/Teste abstract/)).not.toBe(null);
    expect(getByText(/Teste web_url/)).not.toBe(null);
    expect(getByText(/Teste main/)).not.toBe(null);
});

test('Clicando no botão de fechar', () => {
    const { container, store } = renderWithRedux(<Modal />, { initialState: { modalReducer: { open: true, data: {} } } });
    fireEvent.click(container.querySelector('button'));
    expect(store.dispatch).toHaveBeenCalledWith(modalActions.setModalOpenAction(false));
});
