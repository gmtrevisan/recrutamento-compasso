import * as actions from './news.actions';

const initialState = {
    loading: false,
    error: false,
    news: [],
    page: 0,
    filter: '"Technology" "Science"',
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.resetNewsAction().type:
        return {
            ...state,
            news: [],
        };
    case actions.fetchNewsAction().type:
        return {
            ...state,
            loading: true,
            error: false,
        };
    case actions.fetchNewsSuccessAction().type:
        return {
            ...state,
            loading: false,
            error: false,
            news: [...state.news, ...action.response.response.docs],
        };
    case actions.fetchNewsErrorAction().type:
        return {
            ...state,
            loading: false,
            error: true,
        };
    case actions.setNewsPageAction().type:
        return {
            ...state,
            page: action.page,
        };
    case actions.setNewsFilterAction().type:
        return {
            ...state,
            filter: action.filter,
        };
    default:
        return state;
  }
};

export default newsReducer;