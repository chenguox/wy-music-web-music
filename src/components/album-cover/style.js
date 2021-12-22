import styled from "styled-components";

export const AlbumWrapper = styled.div`
  width: ${(props) => props.width + "px"};
  // overflow: hidden;

  // .mask-box {
  // height: ${(props) => props.size + 5 + "px"};
  // overflow: hidden;

  .album-image {
    position: relative;
    width: ${(props) => props.width + "px"};
    height: ${(props) => props.size + "px"};
    overflow: hidden;
    margin: 15px 0 12px;
    // -webkit-box-reflect: below 1px -webkit-linear-gradient(transparent 70%, rgba(0, 0, 0, 0.15));
    -webkit-box-reflect: below 1px -webkit-gradient(linear, from(transparent), color-stop(70%, transparent), to(rgba(250, 250, 250, 0.1)));

    img {
      width: ${(props) => props.size + "px"};
      height: ${(props) => props.size + "px"};
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${(props) => props.bgp};
      text-indent: -9999px;
    }
  }
  // }

  .album-info {
    font-size: 12px;
    width: ${(props) => props.size + "px"};

    .name {
      color: #000;
    }

    .artist {
      color: #666;
    }
  }
`;
