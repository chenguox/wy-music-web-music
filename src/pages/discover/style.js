import styled from 'styled-components';

export const DiscoverWrapper = styled.div``

export const TopMenu = styled.div`
  height: 30px;
  background: #C20C0C;


  ul {
    display: flex;
    padding-left: 180px;

    li {
      padding: 0 18px;

      a {
        display: inline-block;
        height: 22px;
        line-height: 22px;
        color: #fff;
        padding: 0 12px;
        margin-top: 2px;

  
        &:hover, &.active {
          background: #9B0909;
          text-decoration: none;
          border-radius: 20px;
      }
    }
  }
`
