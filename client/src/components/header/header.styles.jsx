import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProfilePictureContainer = styled(Link)`
  height: 100%;
  width: inherit;
`;

export const HeaderNavigator = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const NavItemsMenu = styled.div`
  padding-top: 25px;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;

`;

export const NavItems = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: white;
`;
