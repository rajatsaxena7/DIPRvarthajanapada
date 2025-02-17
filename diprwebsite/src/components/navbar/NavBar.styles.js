import styled, { keyframes } from "styled-components";
import theme from "../../theme/Theme";

const scrollAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-20%); } /* Moves halfway to make loop seamless */
`;

export const NavContainer = styled.nav`
  background-color: ${theme.colors.error}; 
  padding: ${theme.spacing(0.5)} 0;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  width: 100%;
`;

export const NewsWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`;

export const NewsTicker = styled.div`
  display: flex;
  gap: ${theme.spacing(2)};
  animation: ${scrollAnimation} 20s linear infinite; /* Slower animation */
  min-width: 200%;
`;

export const NewsItem = styled.span`
  color: ${theme.colors.background};
  font-family: ${theme.fonts.heading};
  font-weight: bold;
  padding: 0 ${theme.spacing(2)};
  white-space: nowrap;
`;
