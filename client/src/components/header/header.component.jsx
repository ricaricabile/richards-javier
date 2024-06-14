import React from 'react';
import JBDM from  '../../assets/javier.png';
import {
  HeaderNavigator,
  NavItemsMenu,
  NavItems,
  ProfilePictureContainer
} from './header.styles';
const ImageStyleCSS = { 
  verticalAlign: 'middle', 
  border: '5px solid #FFFFFF',
  filter: 'grayscale(25%)' 
};
const CaptionStyleCSS = { 
  fontFamily:'Snell Roundhand, cursive', 
  fontWeight:'bold', 
  fontStyle: 'italic', 
  color: 'red', 
  textAlign:'center', 
  backgroundColor:'white', 
  margin:'0'
};
const Header = () => (
  <HeaderNavigator>
      <NavItemsMenu>
      <NavItems to='/'>HOME</NavItems>
      <NavItems to='/about'>ABOUT</NavItems>
      <NavItems to='/services'>SERVICES</NavItems>
      <NavItems to='/help'>HELP US</NavItems>
    </NavItemsMenu>
    <ProfilePictureContainer to='/'>
    <img width="200px" src={JBDM} style={ImageStyleCSS} ></img>
    <figcaption style={CaptionStyleCSS}>Mr. Richards</figcaption>
    </ProfilePictureContainer>
  </HeaderNavigator>
);


export default Header;
