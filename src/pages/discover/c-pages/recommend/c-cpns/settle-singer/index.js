import React, { memo } from "react";

import { GXSettleSingerWrapper } from "./style";

export default memo(function GXSettleSinger() {
  return (
    <GXSettleSingerWrapper className="">
      <h3 className="titleWrapper">
        <span>入驻歌手</span>
        <a href="/todo">查看全部</a>
      </h3>
      <ul className="singer-list">singer-list</ul>
      <div className="apply-btn">申请成为网易音乐人</div>
    </GXSettleSingerWrapper>
  );
});
