import React, { memo } from "react";

// 左边组件
import GXTopBanner from "./c-cpns/top-banner";
import GXHotRecommend from "./c-cpns/hot-recommend";
import GXNewAlbum from "./c-cpns/new-album";
import GXRecommendRanking from "./c-cpns/recommend-ranking";

// 右边组件
import GXUserLogin from "./c-cpns/user-login";

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";

function GXRecommend() {
  return (
    <RecommendWrapper>
      <GXTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          {/* 热门推荐 */}
          <GXHotRecommend />
          {/* 新碟上架 */}
          <GXNewAlbum />
          {/* 榜单 */}
          <GXRecommendRanking />
        </RecommendLeft>
        <RecommendRight>
          {/* 用户登录 */}
          <GXUserLogin />
          {/* 入驻歌手 */}

          {/* 热门主播 */}
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}

export default memo(GXRecommend);
