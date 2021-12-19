import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { HOT_RECOMMEND_LIMIT } from "@/common/constants";

// 组件
import GXThemeHeaderRCM from "@/components/theme-header-rcm";
import GXSongsCover from "@/components/songs-cover";

// 样式
import { HotRecommendWrapper } from "./style";

import { getHotRecommendAction } from "../../store/actionCreators";

export default memo(function GXHotRecommend() {
  // redux hooks
  const hotRecommends = useSelector(
    (state) => state.getIn(["recommend", "hotRecommends"]),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <GXThemeHeaderRCM
        title="热门推荐"
        keywords={["华语", "流行", "民谣", "摇滚", "电子"]}
      />
      <div className="recommend-list">
        {hotRecommends.map((item, index) => {
          return <GXSongsCover key={item.id} info={item} />;
        })}
      </div>
    </HotRecommendWrapper>
  );
});
