import React from 'react';
import JBDM from  '../../assets/javier.png';
import './header.css';
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
};
const Header = () => (
  <HeaderNavigator>
      <NavItemsMenu style={{zIndex: 123}}>
      <NavItems to='/' className='itemsReact'>HOME</NavItems>
      <NavItems to='/about' className='itemsReact'>ABOUT</NavItems>
      <NavItems to='/services' className='itemsReact'>SERVICES</NavItems>
      <NavItems to='/help' className='itemsReact'>LINKS</NavItems>
    </NavItemsMenu>
    <div className='rightsection'>
    <ProfilePictureContainer to='/'>
    <img width="200" src={JBDM} style={ImageStyleCSS} ></img>
    <figcaption style={CaptionStyleCSS}>Mr. Richards</figcaption>
    </ProfilePictureContainer>
    </div>
  </HeaderNavigator>
);


export default Header;
