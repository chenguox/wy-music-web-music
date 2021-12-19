import styled from "styled-components";

import download from "@/assets/img/download.png";
import btnSprite from "@/assets/img/banner_sprite.png";

// 整体
export const BannerWrapper = styled.div`
  background: url(${(props) => props.bgImage}) center center/6000px;

  .banner {
    height: 280px;

    display: flex;
    position: relative;
  }
`;
// 左边轮播图
export const BannerLeft = styled.div`
  width: 730px;

  .banner-item {
    height: 280px;
    .image {
      width: 100%;
      height: 280px;
    }
  }
`;
// 右边下载，给a元素添加跳转链接属性 coderwhy 的实现
// export const BannerRight = styled.a.attrs({
//   href: "https://music.163.com/#/download",
//   target: "_blank"
// })`
//   width: 254px;
//   height: 270px;
//   background: url(${download});
// `

// 右边下载
export const BannerRight = styled.div`
  width: 254px;
  height: 280px;
  background: url(${download});

  .btn-download {
    display: block;
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    // 让 下载客户端 这几个字消失
    text-indent: -9999px;

    background: url(${download}) no-repeat;
    background-position: 0 -289px;
  }

  p {
    margin: 10px auto;
    text-align: center;
    color: #8d8d8d;
  }
`;

// 左右两个按钮
export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${btnSprite});
    // 背景透明
    background-color: transparent;
    cursor: pointer;
  }

  .left {
    left: -68px;
    background-position: 0 -360px;

    &:hover {
      background-position: 0 -430px;
    }
  }

  .right {
    right: -68px;
    background-position: 0 -500px;

    &:hover {
      background-position: 0 -578px;
    }
  }
`;
