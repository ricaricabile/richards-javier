import React from 'react';
import './help.css';
import Header from '../../components/header/header.component';
const HomeBodyMessageCSS = {
    // backgroundColor: 'gray',
    fontStyle: 'Italic', 
    // width: '100%', 
    color:'black', 
    padding: '20px', 
    textAlign:'center', 
    // border: '5px solid #FFFFFF', 
    borderRadius: '8px',
    fontSize: '20px',
    lineHeight: '30px'
}
const MainDivCSS = {
    width: '100%', 
    // height:'50%',
    display: 'flex', 
    justifyContent: 'space-around'
}
const NestedDivCSS = {
    width: '70%',
    height:'100%', 
    paddingLeft: '15px', 
    alignSelf:'center',
    // backgroundColor: 'gray'
};
const HelpPage = () => (<>
    <div className='home' >
        <Header />
        <div style={MainDivCSS}>
            <div style={NestedDivCSS}>
            
            <p style={HomeBodyMessageCSS}>
                <a href ={"https://github.com/ricaricabile/calculator"}>https://github.com/ricaricabile/calculator</a> <br/>
               <a href ={"https://github.com/ricaricabile/boxing-news-website"}>https://github.com/ricaricabile/boxing-news-website</a><br/>
               <a href ={"https://github.com/ricaricabile/bmi-calculator-website"}>https://github.com/ricaricabile/bmi-calculator-website</a> <br/>
               <a href ={"https://github.com/ricaricabile/calculator"}>https://github.com/ricaricabile/calculator</a> <br/>
               <a href ={"https://github.com/ricaricabile/canvas-js-drawing"}>https://github.com/ricaricabile/canvas-js-drawing</a> <br/>
               <a href="https://boxing-news-website-live-eb4bad6591ca.herokuapp.com/">https://boxing-news-website-live-eb4bad6591ca.herokuapp.com</a><br/>
               <a href={'https://newsapi.org/'} >https://newsapi.org/</a><br/>
               <a href ={"https://bmi-calculator-live-ad16371bd9f6.herokuapp.com/"}>https://bmi-calculator-live-ad16371bd9f6.herokuapp.com/</a> <br/>
               <a href={"https://basic-calculator-be080dcf00c0.herokuapp.com/"}>https://basic-calculator-be080dcf00c0.herokuapp.com/</a><br/>
               <a href={"https://fontawesome.com/download"}> https://fontawesome.com/download </a> <br/>
            </p>
            </div>
            <p style={{width: '200px'}}></p>
        </div>
        
    </div>




    </>
);

export default HelpPage;
