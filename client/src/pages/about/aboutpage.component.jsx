import React from 'react';
import './aboutpage.css';
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
    lineHeight: '30px',
    color: 'blue'
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
const AboutPage = () => (
    <div className='home' >
        <Header />
        <div style={MainDivCSS}>
            <div style={NestedDivCSS}>
            <p style={HomeBodyMessageCSS}>
            Hello there Im Gabriel M. Nativdad, I have a degree in Computer Science, while studying I also work for a consulting company that specializes in sales and operation tools in the construction industry then I moved on to explore the banking industry creating backend and frontend web programs.

            I am very effective in all aspects of Software development because of my background in Computer Science, and working experience in three different industries.
            <br/>
            Accomplishments: <br/>
            ~ Overall lead of 2 company projects(1. Backend API 2. Frontend Web), also involved in analysis and coding of other company projects (backend and frontend).(Sept 2020 - June 2021)<br/>
            ~ Assigned 3 positions in the span of 8 months. (Sept 2020 - May 2021)<br/>
            ~ One of the leaders with the most number of deployed defect fixes - Development Team Progress Board. (Sept 2020 - June 2021)<br/>
            ~ Software Project Manager(Sept 2021 - March 2022)<br/>
            ~ Consulting company in the construction industry - Researcher, Blueprint Maker, Plan Loader, Matrix Tracker, Data Model Logic. (June 2017, July 2020)<br/>
            ~ BS in Computer Science (2014-2018)<br/>
            ~“TestDome” certified(Top 10%) for JavaScript, React, Node, PHP, ASP.NET core (MVC), Angular, TypeScript, SQL, C#, HTML, CSS. Official certifications are attached at the bottom of my profile (Licenses & Certifications section).<br/>
            ~ Linkedin JavaScript skill-based assessment certified (Top 5%).<br/>
            ~ Samsung Solutions Engineer (2023-2024).<br/>
            </p>
            </div>
            <p style={{width: '200px'}}></p>
        </div>
    </div>
);

export default AboutPage;
