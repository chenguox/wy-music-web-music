import React, { memo, Fragment } from 'react'

import { footerLinks, footerImages } from '@/common/local-data'

import {
  AppFooterWrapper,
  FooterLeft,
  FooterRight
} from './style'

export default memo(function WYAppFooter() {
  return (
    <AppFooterWrapper>
      <div className="wrap-v2 content">
        <FooterLeft>
          <p className="link">
            {
              footerLinks.map((item, index) => {
                return (
                  <Fragment>
                    <a className="item s-fc4" href={item.link}>{item.title}</a>
                    <span className="line">{footerLinks.length - 1 === index ? "" : "|"}</span>
                  </Fragment>
                )
              })
            }
          </p>
          <p className="copyright s-fc3">
            <span>网易公司版权所有©1997-2021</span>
            <span>杭州乐读科技有限公司运营：</span>
            <a>浙网文[2021] 1186-054号</a>
          </p>
          <p className="contact s-fc3">
            <span>违法和不良信息举报电话：0571-89853516</span>
            <span>举报邮箱：</span>
            <a href="mailto:ncm5990@163.com">ncm5990@163.com</a>
          </p>
          <p className="info s-fc3">
            <a>粤B2-20090191-18  工业和信息化部备案管理系统网站</a>
            <a href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action">
              <span className="police-logo"></span>
              <span className="police-text">浙公网安备 33010902002564号</span>
            </a>
          </p>
        </FooterLeft>
        <FooterRight>
          <ul className="enter">
            {
              footerImages.map((item, index) => {
                return (
                  <li className="item" key={item.link}>
                    <a className="logo" href={item.link}></a>
                    <span className="title"></span>
                  </li>
                )
              })
            }
          </ul>
        </FooterRight>
      </div>
    </AppFooterWrapper>
  )
})
