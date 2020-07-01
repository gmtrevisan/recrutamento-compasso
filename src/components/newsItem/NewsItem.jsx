import React from 'react';
import { useDispatch } from 'react-redux';
import * as modalActions from '../../features/modal/modal.actions';
import './_newsItem.scss';

const NewsItem = (props) => {
    const dispatch = useDispatch();
    const { item, item: { headline: { main }, multimedia } } = props;
    const thumbnail = multimedia.find(media => media.subtype === 'thumbnail');

    const openModal = () => {
        dispatch(modalActions.setModalDataAction(item));
        dispatch(modalActions.setModalOpenAction(true));
    };

    return (
        <div className="newsItem">
            <div className="newsItem__content clearfix" onClick={openModal}>
                {!!thumbnail && (<img alt={main} className="newsItem__image" src={`https://www.nytimes.com/${thumbnail.url}`} />)}
                <p className="newsItem__text">{main}</p>
            </div>
        </div>
    );
};

export default NewsItem;
