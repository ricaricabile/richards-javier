import React from 'react';
import { HomePageContainer } from './homepage.styles';
import './homepage.css';
import home from  '../../assets/homepagever.jpg';
import Header from '../../components/header/header.component';
const HomeBodyMessageCSS = {
    backgroundColor: 'black',
    fontStyle: 'Italic', 
    width: '50%', 
    color:'green', 
    padding: '20px', 
    textAlign:'left', 
    border: '5px solid #FFFFFF', 
    borderRadius: '8px',
    fontSize: '20px',
}
const MainDivCSS = {
    width: '100%', 
    height:'50%',
    display: 'flex', 
    justifyContent: 'space-around'
}
const NestedDivCSS = {
    width: '50%',
    height:'50%', 
    paddingLeft: '15px', 
    alignSelf:'center'};
const HomePage = () => (
    <div className='home' >
        <Header />
        <div style={MainDivCSS}>
            <div style={NestedDivCSS}>
            <p style={HomeBodyMessageCSS}>
                Hello there! I'm a Computer Programmer. My Friend's calls me Mr. Richards,
                Browse my website to get to know me personally and the services I offer.
            </p>
            </div>
            <p style={{width: '200px'}}></p>
        </div>
    </div>
);

export default HomePage;
