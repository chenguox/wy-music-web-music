// 第三方的引入
import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// 自己的引入
import { getTopListAction } from "../../store/actionCreators";

// 组件
import GXThemeHeaderRCM from "@/components/theme-header-rcm";
import GXTopRanking from "@/components/top-ranking";

export default memo(function GXRecommendRanking() {
  // redux hooks
  const { upRanking, newRanking, originRanking } = useSelector((state) => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"]),
  }));
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch]);

  return (
    <div>
      <GXThemeHeaderRCM title="榜单" />
      <GXTopRanking info={upRanking} />
    </div>
  );
});
