import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { store } from './store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { desks } from './commons/constants';
import NewsList from './components/newsList/NewsList';
import Header from './components/header/Header';
import Modal from './components/modal/Modal';
import './_index.scss';

export const App = () => {
    return (
      <>
        <Header />
        <div className="content">
            <Switch>
                {desks.map(item => (
                    <Route key={item.label} exact path={item.path}>
                        <NewsList filter={item.filter} />
                    </Route>
                ))}            
            </Switch>
        </div>
        <Modal />
      </>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
