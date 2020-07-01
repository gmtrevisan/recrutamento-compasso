import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithRedux } from '../../../setupTests';
import * as modalActions from '../../../features/modal/modal.actions';
import NewsItem from '../NewsItem';

test('Montando o componente', () => {
    const mockItem = { 
        headline: { main: '' }, 
        multimedia: [],
    };
    const { container } = renderWithRedux(<NewsItem item={mockItem} />);
    expect(container.querySelector('.newsItem')).not.toBe(null);
});

test('Montando informações', () => {
    const mockItem = { 
        headline: { main: 'Teste main' }, 
        multimedia: [],
    };
    const { getByText } = renderWithRedux(<NewsItem item={mockItem} />);
    expect(getByText(/Teste main/)).not.toBe(null);
});

test('Montando informações com imagem', () => {
    const mockItem = { 
        headline: { main: 'Teste main' }, 
        multimedia: [{ subtype: 'thumbnail' }],
    };
    const { container } = renderWithRedux(<NewsItem item={mockItem} />);
    expect(container.querySelector('.newsItem__image')).not.toBe(null);
});

test('Clicando para abrir no modal', () => {
    const mockItem = { 
        headline: { main: '' }, 
        multimedia: [],
    };
    const { container, store } = renderWithRedux(<NewsItem item={mockItem} />);
    fireEvent.click(container.querySelector('.newsItem__content'));
    expect(store.dispatch).toHaveBeenCalledWith(modalActions.setModalOpenAction(true));
});
