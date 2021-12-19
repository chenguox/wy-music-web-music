import { Map } from "immutable";

import * as actionTypes from "./constants";

// 需要定义初始化值，不然会因为找不到，报undefined错误
const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    case actionTypes.CHANGE_HOT_RECOMMENDS:
      return state.set("hotRecommends", action.hotRecommends);
    case actionTypes.CHANGE_NEW_ALBUMS:
      return state.set("newAlbums", action.newAlbums);
    default:
      return state;
  }
}

export default reducer;
