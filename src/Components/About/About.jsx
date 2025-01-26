import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/aboutprofile.svg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>
Here’s the refined version incorporating Power BI:

I am an aspiring Data Scientist with expertise in machine learning, statistical analysis, and data visualization. Proficient in Python, R, SQL, Power BI, and Tableau, I have applied these tools to projects in predictive modeling, natural language processing, and exploratory data analysis.</p>
                <p>My experience with Power BI includes creating interactive dashboards and reports to drive data-driven decision-making. I am passionate about uncovering actionable insights and eager to contribute to solving real-world challenges with innovative teams.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>Power-Bi</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Azure</p><hr style={{width:"50%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>1+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
