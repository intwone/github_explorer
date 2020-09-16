import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #A8A8B3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const InfoRepo = styled.section`
  margin-top: 100px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 20px;

      strong {
        color: #3D3D4D;
        font-weight: bold;
        font-size: 24px;
      }

      p {
        color: #A8A8B3;
        font-size: 18px;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3D3D4D;
      }

      span {
        display: block;
        font-size: 16px;
        color: #6C6C80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;
  a {
    background: #FFF;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    &:hover {
      transform: translateX(10px);
      transition: transform 0.2s;
    }

    & + a {
      margin-top: 16px;
    }

    div {
      margin-left: 20px;

      strong {
        color: #3D3D4D;
        font-weight: bold;
        font-size: 24px;
      }

      p {
        color: #A8A8B3;
        font-size: 18px;
        line-height: 21px;
        margin-top: 4px;
        font-weight: normal;
      }
    }

    svg {
      margin-left: auto;
      color: #C9C9D4;
    }
  }
`;
