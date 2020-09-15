import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3A3A3A;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3A3A3A;

    &::placeholder {
      color: #A8A8B3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04D361;
    border-radius: 0 5px 5px 0;
    border: none;
    color: #FFFFFF;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04D361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

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

    img {
      width: 60px;
      height: 60px;
      border-radius: 30px;
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
