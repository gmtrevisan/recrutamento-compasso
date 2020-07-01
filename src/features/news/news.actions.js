export const resetNewsAction = () => ({ type: 'RESET_NEWS' });
export const fetchNewsAction = () => ({ type: 'FETCH_NEWS' });
export const fetchNewsSuccessAction = (response) => ({ type: 'FETCH_NEWS_SUCCESS', response });
export const fetchNewsErrorAction = () => ({ type: 'FETCH_NEWS_ERROR' });
export const setNewsPageAction = (page) => ({ type: 'SET_NEWS_PAGE', page });
export const setNewsFilterAction = (filter) => ({ type: 'SET_NEWS_FILTER', filter });