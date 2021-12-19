import styled from "styled-components";

export const SongsCoverWrapper = styled.div`
  width: 140px;
  padding-bottom: 30px;

  .cover-top {
    position: relative;

    & > img {
      width: 140px;
      height: 140px;
    }

    // 可以看到图片上有一层玻璃背景
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0 0;

      .info {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        justify-content: space-between;
        align-items: center;

        color: #ccc;
        height: 27px;
        padding: 0 10px;

        background-position: 0 -537px;

        & > span {
          display: flex;
          justify-content: center;
          align-items: center;
          line-height: 30px;
        }

        .erji {
          display: inline-block;
          width: 14px;
          height: 11px;

          margin-right: 5px;

          background-position: 0 -24px;
        }

        .play {
          display: inline-block;
          width: 16px;
          height: 17px;

          background-position: 0 0;
        }
      }
    }
  }

  .cover-bottom {
    font-size: 14px;
    color: #000;
    margin-top: 5px;
  }

  .cover-source {
    color: #666;
  }
`;
