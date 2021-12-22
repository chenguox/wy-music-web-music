// 导入定义的常量
import * as actionTypes from "./constants";

// 导入请求数据方法
import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopList,
} from "@/services/recommend";

// Banner
const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});

// hot-recommend
const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.result,
});

// new-album
const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: res.albums,
});

// 飙升榜
const changeUpRankingAction = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist,
});

// 新歌榜
const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist,
});

// 原创榜
const changeOriginRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist,
});

// 获取推荐页的Banner数据，并存放起来
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      // console.log("banner", res);
      dispatch(changeTopBannerAction(res));
    });
  };
};

// 获取热门推荐的数据（hot-recommend）
export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) => {
      // console.log("hotRecommend", res);
      dispatch(changeHotRecommendAction(res));
    });
  };
};

// 获取新碟上架的数据（new-Album）
export const getNewAlbumAction = (limit) => {
  return (dispatch) => {
    getNewAlbums(limit).then((res) => {
      dispatch(changeNewAlbumAction(res));
    });
  };
};

// 获取榜单数据 （top-ranking）
export const getTopListAction = (idx) => {
  return (dispatch) => {
    getTopList(idx).then((res) => {
      switch (idx) {
        case 0:
          dispatch(changeNewRankingAction(res)); // 新歌榜
          break;
        case 2:
          dispatch(changeOriginRankingAction(res)); // 原创榜
          break;
        case 3:
          dispatch(changeUpRankingAction(res)); // 飙升榜
          break;
        default:
      }
    });
  };
};
