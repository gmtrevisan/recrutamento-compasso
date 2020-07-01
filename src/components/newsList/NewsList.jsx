import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as newsActions from '../../features/news/news.actions';
import NewsItem from '../newsItem/NewsItem';
import { apiPageLimit } from '../../commons/constants';
import './_newsList.scss';

const NewsList = (props) => {
    const dispatch = useDispatch();
    const selector = useSelector(({ newsReducer }) => newsReducer);
    const { news, loading, error, page } = selector;
    const { filter } = props;
    useEffect(() => {
        dispatch(newsActions.setNewsFilterAction(filter));
    }, [dispatch]);

    return (
        <div className="newsList"> 
            <div className="newsList__items clearfix">
                {news.map(item => <NewsItem key={item._id} item={item} />)}
            </div>
            {!loading && !error && page < apiPageLimit && (
                <div className="newsList__load">
                    <button className="defaultBtn" onClick={() => dispatch(newsActions.setNewsPageAction(page + 1))}>Carregar mais</button>
                </div>
            )}
            {loading && (
                <div className="newsList__loading">
                    <img src="./loading.gif" />
                </div>
            )}
            {error && (
                <div className="newsList__error">
                    <span>Erro ao carregar, tente novamente.</span>
                </div>
            )}
        </div>
    );
};

export default NewsList;
