import React, { memo,useEffect } from 'react';
import { renderRoutes } from 'react-router-config'

import { dicoverMenu } from '@/common/local-data';
import { NavLink } from 'react-router-dom';
import {
  DiscoverWrapper,
  TopMenu
} from './style';

import request from '@/services/request'

export default memo(function WYDiscover(props) {
  
  useEffect(()=>{
    request({
      url: "/banner"
    }).then(res=>{
      console.log(res);
    })
  })
  
  const { route } = props;

  return (
    <DiscoverWrapper>
      {/* 上面子路由导航栏 */}
      <TopMenu >
        <ul className="nav wrap-v1">
          {
            dicoverMenu.map((item, index) => {
              return (
                <li key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </li>
              )
            })
          }
        </ul>
      </TopMenu>
      {/* 下面对应的子组件 */}
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})

