import { Map } from "immutable";

import * as actionTypes from "./constants";

// 需要定义初始化值，不然会因为找不到，报undefined错误
const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],

  upRanking: {}, // 飙升榜
  newRanking: {}, // 新歌榜
  originRanking: {}, // 原创榜
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    case actionTypes.CHANGE_HOT_RECOMMENDS:
      return state.set("hotRecommends", action.hotRecommends);
    case actionTypes.CHANGE_NEW_ALBUMS:
      return state.set("newAlbums", action.newAlbums);

    case actionTypes.CHANGE_UP_RANKING:
      return state.set("upRanking", action.upRanking); // 飙升榜
    case actionTypes.CHANGE_NEW_RANKING:
      return state.set("newRanking", action.newRanking); // 新歌榜
    case actionTypes.CHANGE_ORIGIN_RANKING:
      return state.set("originRanking", action.originRanking); // 原创榜
    default:
      return state;
  }
}

export default reducer;
