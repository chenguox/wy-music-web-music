import React, { memo } from "react";

import GXTopBanner from "./c-cpns/top-banner";
import GXHotRecommend from "./c-cpns/hot-recommend";
import GXNewAlbum from "./c-cpns/new-album";
import GXRecommendRanking from "./c-cpns/recommend-ranking";

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
          <GXHotRecommend />
          <GXNewAlbum />
          <GXRecommendRanking />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}

export default memo(GXRecommend);
