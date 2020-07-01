import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { renderWithRedux } from '../../../setupTests';
import Header from '../Header';

const MockRouter = () => (
    <Router>
        <Header />
    </Router>
);

test('Montando o componente', () => {
    const { container } = renderWithRedux(<MockRouter />);
    expect(container.querySelector('.header')).not.toBe(null);
});

test('Renderizando links', () => {
    const { getByText } = renderWithRedux(<MockRouter />);
    expect(getByText(/Todas/)).not.toBe(null);
    expect(getByText(/Ciência/)).not.toBe(null);
    expect(getByText(/Tecnologia/)).not.toBe(null);
});

test('Marcando link selecionado', () => {
    const { container } = renderWithRedux(<MockRouter />);
    const selected = container.querySelector('.header__link--selected');
    expect(selected.textContent).toBe("Todas");
});