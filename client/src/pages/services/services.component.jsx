import React from 'react';
import './services.css';
import Header from '../../components/header/header.component';
const HomeBodyMessageCSS = {
    // backgroundColor: 'gray',
    fontStyle: 'Italic', 
    // width: '100%', 
    color:'black', 
    padding: '20px', 
    textAlign:'left', 
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
    zIndex: 123
    // backgroundColor: 'gray'
};
const ServicesPage = () => (<>
    <div className='home' >
        <Header />
        <div style={MainDivCSS}>
            <div style={NestedDivCSS}>
            
            <p style={HomeBodyMessageCSS}>
            <h2 style={{color: 'green'}}>World Boxing News Website</h2>
            This application fetches the latest boxing news using this api ( <a href={'https://newsapi.org/'} >https://newsapi.org/</a> ) The frontend used in this application is React JS and for the Backend Node JS with express js framework. This application uses React-Redux for state management. This application is running on Heroku see link ( <a href="https://boxing-news-website-live-eb4bad6591ca.herokuapp.com/">https://boxing-news-website-live-eb4bad6591ca.herokuapp.com</a> ).
            please clone the project in your local
            then go to the root directory of the project you should see files client server.js etc. enter npm install next go the the client folder and enter npm install again
            then go back to the root directory you should see files client server.js etc. from here enter npm run dev
            The application is on the master branch enter this command in your command line git checkout master
            Github link <a href ={"https://github.com/ricaricabile/boxing-news-website"}>https://github.com/ricaricabile/boxing-news-website</a> 
            </p>
            </div>
            <p style={{width: '200px'}}></p>
        </div>
        <div style={MainDivCSS}>
            <div style={NestedDivCSS}>
            <p style={HomeBodyMessageCSS}>
            <h2 style={{color: 'green'}}>BMI Calculator Website</h2>
            This application calculates a person body mass index. Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. This calculator provides body mass index (BMI) and the corresponding BMI weight status category for adults.
            The frontend used in this application is React JS and for the Backend Node JS with express js framework.
            This application uses React-Redux for state management.
            This application is running on Heroku see link <a href ={"https://bmi-calculator-live-ad16371bd9f6.herokuapp.com/"}>https://bmi-calculator-live-ad16371bd9f6.herokuapp.com/</a> 
            Github link <a href ={"https://github.com/ricaricabile/bmi-calculator-website"}>https://github.com/ricaricabile/bmi-calculator-website</a> 
            </p>
            </div>
            <p style={{width: '200px'}}></p>
        </div>
        <div style={MainDivCSS}>
            <div style={NestedDivCSS}>
            <p style={HomeBodyMessageCSS}>
            <h2 style={{color: 'green'}}>Basic Calculator Application</h2>
            This is a calculator application you can perform basic mathematical operations.
            This application is built using React.JS and ECMAScript 2023 javascript and has an inbuilt redux state management scaffold that I made you should see more of redux on my other projects.
            This application is running on heroku link  <a href={"https://basic-calculator-be080dcf00c0.herokuapp.com/"}>https://basic-calculator-be080dcf00c0.herokuapp.com/</a>
            Github link <a href ={"https://github.com/ricaricabile/calculator"}>https://github.com/ricaricabile/calculator</a> 
            </p>
            </div>
            <p style={{width: '200px'}}></p>
        </div>
        <div style={MainDivCSS}>
            <div style={NestedDivCSS}>
            <p style={HomeBodyMessageCSS}>
            <h2 style={{color: 'green'}}>Javascript Paint Application</h2>
            To use this application download fontawesome in this website <a href={"https://fontawesome.com/download"}> https://fontawesome.com/download </a>I included an image in this directory it is the fontawesome page see the red box in the image. please view to avoid confusion and modify html href as the version of the fontawesome updates
            after downloading fontawesome, extract it in the root directory of this project
            After that is finish open parts.html in your web browser it should show you two rows on the top of screen and a gray area where you will be able to draw.
            Click on any of the tools on the first row and your desired color on the second row, then hover your mouse on the gray area and click it. A rectangle, circle, line, strokes will be drawn based on the tools and colors you choose.
            Github link <a href ={"https://github.com/ricaricabile/canvas-js-drawing"}>https://github.com/ricaricabile/canvas-js-drawing</a> 
            </p>
            </div>
            <p style={{width: '200px'}}></p>
        </div>
    </div>




    </>
);

export default ServicesPage;
