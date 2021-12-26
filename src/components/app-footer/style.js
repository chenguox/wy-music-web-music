import styled from "styled-components";

import police_icon from "@/assets/img/police.png";
import sprite_footer_01 from "@/assets/img/sprite_footer_01.png";
import sprite_footer_02 from "@/assets/img/sprite_footer_02.png";

export const AppFooterWrapper = styled.div`
  border-top: 1px solid #d3d3d3;
  .content {
    display: flex;
    justify-content: space-between;
  }
`;

export const FooterLeft = styled.div`
  padding-top: 15px;
  line-height: 24px; // 使字体高度24px

  .link {
    .line {
      margin: 0 10px;
      color: #c2c2c2;
    }
  }

  .copyright,
  .contact {
    span:first-of-type {
      margin-right: 14px;
    }
  }

  .info {
    .police-logo {
      display: inline-block;
      width: 14px;
      height: 14px;
      background: url(${police_icon});
      background-size: cover;
      margin: 0 2px 0 5px;
      vertical-align: -2px; // 往下偏移2像素
    }
  }
`;
export const FooterRight = styled.div`
  .enter {
    // ul
    display: flex;
    justify-content: space-between;
    width: 420px;
    height: 70px;
    margin-top: 33px;

    .item {
      // li
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 72px;

      .logo {
        display: block;
        width: 50px;
        height: 45px;

        background-image: url(${sprite_footer_02});
        background-size: 110px 552px;
      }

      // 第一个li下的a元素
      :nth-child(1) .logo {
        background-position: -60.5px -456.5px;
      }
      // 第二个li下的a元素
      :nth-child(2) .logo {
        background-position: -60.5px -101px;
      }
      // 第三个li下的a元素
      :nth-child(3) .logo {
        background-position: 0 0;
      }
      // 第四个li下的a元素
      :nth-child(4) .logo {
        background-position: -60px -50px;
      }
      // 第五个li下的a元素
      :nth-child(5) .logo {
        background-position: 0 -101px;
      }

      .title {
        display: block;
        margin: 5px 5px 0;
        width: 52px;
        height: 14px;

        background-image: url(${sprite_footer_01});
        background-size: 180px 139px;
      }

      :nth-child(1) .title {
        width: 72px;
        background-position: 0 -108px;
      }
      :nth-child(2) .title {
        background-position: -1px -91px;
      }
      :nth-child(3) .title {
        background-position: 0 0;
      }
      :nth-child(4) .title {
        background-position: 0 -54px;
      }
      :nth-child(5) .title {
        background-position: -1px -72px;
      }
    }
  }
`;
