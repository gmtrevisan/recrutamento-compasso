import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as modalActions from '../../features/modal/modal.actions';
import classNames from 'classnames';
import './_modal.scss';

const Modal = () => {
    const dispatch = useDispatch();
    const selector = useSelector(({ modalReducer }) => modalReducer);
    const { open, data: { abstract, web_url, headline: { main } = {} } } = selector;

    return (
        <div className={classNames('modal', { 'modal--open': open })}> 
            <div className="modal__content">
                <div className="modal__text">
                    <p className="modal__text__title">{main}</p>
                    <p className="modal__text__description">{abstract}</p>
                    <p className="modal__text__url">{web_url}</p>
                </div>
                <div className="modal__buttons">
                    <button className="defaultBtn" onClick={() => dispatch(modalActions.setModalOpenAction(false))}>Fechar</button>
                    <a className="defaultBtn" href={web_url} target="_blank" rel="noopener noreferrer">Ler notícia</a>
                </div>
            </div>
        </div>
    );
};

export default Modal;
