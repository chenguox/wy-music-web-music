import React, { memo } from 'react'

import { headerLinks } from "@/common/local-data";
import { NavLink } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons'
import { Input } from "antd";
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style';

export default memo(function WYAppHeader() {

  // 页面代码，只有前三个是路由跳转，这里做一下处理
  const showSelectItem = (item, index) => {
    if (index < 3 || index === 5) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return <a href="{item.link}">{item.title}</a>
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
                    {showSelectItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <div className="center">创作者中心</div>
          <div>登录</div>
        </HeaderRight>
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