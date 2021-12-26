import styled from "styled-components";

export const TopRankingWrapper = styled.div`
  // 三个都是同样的，设置 flex = 1 可以平分为三
  flex: 1;

  .header {
    display: flex;
    height: 100px;

    margin: 20px 0 0 20px;

    .image {
      width: 80px;
      height: 80px;
      // 让玻璃层定位显示出来
      position: relative;

      img {
        width: 80px;
        height: 80px;
      }
    }

    .info {
      margin: 5px 0 0 10px;

      a {
        font-size: 14px;
        color: #333;
        font-weight: 700;
      }

      .btn {
        display: inline-block;
        text-indent: -99999px;
        width: 22px;
        height: 22px;
        margin: 8px 10px 0 0;
        cursor: pointer;
      }

      .play {
        background-position: -267px -205px;

        &:hover {
          background-position: -267px -235px;
        }
      }

      .favor {
        position: relative;
        top: 2px;

        background-position: -300px -207px;

        &:hover {
          background-position: -300px -237px;
        }
      }
    }
  }

  .list {
    margin-left: 15px;

    .list-item {
      display: flex;
      align-items: center;
      height: 32px;

      // 前三个标红色
      :nth-child(-n + 3) .rank {
        color: #c10d0c;
      }

      .rank {
        width: 35px;
        text-align: center;
        font-size: 16px;
      }

      .info {
        width: 170px;
        // height: 20px;

        color: #000;
        height: 17px;
        line-height: 17px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        .name {
          // 剩余的宽度给name
          flex: 1;
        }

        .operate {
          display: flex;
          align-items: center;
          // 平时按钮隐藏
          display: none;
          width: 82px;
          // 给了高度才不会偏移
          height: 17px;

          .btn {
            width: 17px;
            height: 17px;

            margin-left: 8px;
            cursor: pointer;
          }

          .play {
            background-position: -267px -268px;

            &:hover {
              background-position: -267px -288px;
            }
          }

          .addto {
            position: relative;
            top: 2px;
            background-position: 0 -700px;

            &:hover {
              background-position: -21px -700px;
            }
          }

          .favor {
            background-position: -297px -268px;

            &:hover {
              background-position: -297px -290px;
            }
          }
        }
      }

      // 当鼠标指到这一项时，显示按钮
      &:hover {
        .operate {
          display: block;
        }
      }
    }
  }

  .footer {
    height: 32px;
    display: flex;
    align-items: center;
    margin-right: 32px;
    justify-content: flex-end;

    a {
      color: #000;
    }
  }
`;
