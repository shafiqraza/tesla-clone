import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 15px 12px 15px;
`;
export const Logo = styled(Link)`
  display: flex;
  align-items: center;
`;
export const LogoImage = styled.img`
  width: 120px;
  height: 24px;
  fill: #000;
  flex: 1;
  object-fit: contain;
`;
export const Languages = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  padding: 10px;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background-color: rgba(128, 128, 128, 0.13);
  }
`;
export const LanguagesText = styled.h4`
  margin-left: 5px;
  color: #666;
  font-size: 14px;
`;
