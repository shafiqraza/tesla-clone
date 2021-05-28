import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: url(${({ image }) => image}) no-repeat;
  background-position: center;
  background-size: cover;
  display: grid;
  place-items: center;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  // position: fixed;
  // left: 50%;
  // top: 30px;
  // transform: translateX(-50%);
  // opacity: 0;
`;

export const Info = styled.div`
  text-align: center;
  height: 300px;
  margin-top: 30px;
`;

export const Title = styled.h1`
  font-size: 42px;
  color: #393c41;
  padding: 4px 0;
  font-weight: 600;
  @media only screen and (max-width: 600px) {
    font-size: 36px;
  }
`;

export const SubTitle = styled.p`
  color: #5c5e62;
  padding-bottom: 20px;
  font-size: 15px;

  & a {
    border-bottom: 1px solid #5c5e62;
    color: inherit;
    text-decoration: none;
    transition: 0.2s color;

    &:hover {
      color: #000;
      border-bottom-width: 2px;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 30px;
  // height: 30%;
  align-items: flex-end;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    gap: 15px;
  }
`;
