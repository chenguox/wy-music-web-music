import styled from 'styled-components'
import sprite01 from '@/assets/img/sprite_01.png'

export const HeaderWrapper = styled.div`
  height: 75px;
  background: #242424;
  font-size: 14px; // 头部字体大小

  .content {
    height: 70px;

    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #C20C0C;
  }
`

export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display:inline-block; // 可以改变大小
    width: 176px;
    height: 69px;
    background-position: 0 0; // 精灵图位置
    text-indent: -9999px; // 文本缩进 -9999px 隐藏文字 
  }

  .select-list {
    display: flex;
    line-height: 70px; // 使文字在垂直方向居中

    .select-item {
      position: relative;
      a {
        display: block;
        padding: 0 20px; 
        color: #ccc;
      }

      :last-of-type a { // 最后一个div元素里的a元素添加 Hot
        position: relative;
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${sprite01});
          background-position: -190px 0; // 精灵图的位置
          top: 20px;
          right: -15px;
        }
      }

      &:hover a, a.active { // 移动到对应div上，或者a元素被激活
        color: #fff;
        background: #000;
        text-decoration: none;
      }

      .active .icon { // 被激活的底部出现小红三角形
        
      }
    }
  }
`

export const HeaderRight = styled.div`
  background: #e4c8dc;
`

