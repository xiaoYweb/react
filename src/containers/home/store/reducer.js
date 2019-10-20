import { update_news_list } from './type';

const defaultState = {
  newsList: [],
  name: 'home-name-leo'
}
export default (state = defaultState, { type, params }) => {
  switch (type) {
    case update_news_list:
      state = { ...state, newsList: params }
      // return state
    default:
      return state;
  }
}