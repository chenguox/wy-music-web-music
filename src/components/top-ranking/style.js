import styled from "styled-components";

export const TopRankingWrapper = styled.div`
  .header {
    display: flex;

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
        background-position: -300px -207px;

        &:hover {
          background-position: -300px -237px;
        }
      }
    }
  }

  .list {
    .rank {
    }

    .info {
      .name {
      }
      .btn {
      }
      .play {
      }
      .addto {
      }
      .favor {
      }
    }
  }

  .footer {
  }
`;
