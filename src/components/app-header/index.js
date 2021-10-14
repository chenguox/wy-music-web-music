import React, { memo } from 'react'

import { headerLinks } from "@/common/local-data";
import { NavLink } from 'react-router-dom';

import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style';

export default memo(function WYAppHeader() {

  // 页面代码，只有前三个是路由跳转，这里做一下处理
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink>
          {item.title}
        </NavLink>
      )
    }
  }


  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          {/* 网易云logo */}
          <h1 className="logo sprite_01">
            <a href="/#">网易云音乐</a>
          </h1>
          {/* 选项卡 */}
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="select-item">
                    <a>{item.title}</a>
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight></HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})

    // <div>
    //   <NavLink to="/">发现</NavLink>
    //   <NavLink to="/mine">我的</NavLink>
    //   <NavLink to="/friend">朋友</NavLink>
    // </div>