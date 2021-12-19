import request from "./request";

// https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=banner
// 获取推荐页面轮播图的数据
export function getTopBanners() {
  return request({
    url: "/banner",
  });
}

// https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%e6%8e%a8%e8%8d%90%e6%ad%8c%e5%8d%95
// 获取热门推荐音乐的数据
export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit,
    },
  });
}

// https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%e6%96%b0%e7%a2%9f%e4%b8%8a%e6%9e%b6
// 获取新碟上架的数据
export function getNewAlbums(limit) {
  return request({
    url: "/top/album",
    params: {
      limit,
    },
  });
}
