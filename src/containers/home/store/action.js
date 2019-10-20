import http from '../../../lib/http';
import { update_news_list } from './type';

export default {
  getHomeList() {
    return (dispatch) => {
      return http.get('/api/getHomeList').then(res => {
        const list = res.data.data;
        dispatch({ params: list, type: update_news_list })
      })
    }
  }
} 