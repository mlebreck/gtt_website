import React, { useEffect } from 'react';
import WOW from 'wowjs';
import 'animate.css/animate.min.css';
import './Homepage.css';

const Homepage = () => {
  useEffect(() => {
    new WOW.WOW({
      boxClass: 'wow', // Default CSS class for Wow.js animations
      animateClass: 'animated', // Default CSS class for animation library (animate.css)
      offset: 0, // Change this value to adjust the viewport offset for triggering animations
      mobile: false, // Enable animations on mobile devices
      live: true, // Apply changes to the DOM after adding new elements
    }).init();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <img src={'./theme.png'} alt="Technology Consulting" />
        <div className="text">
          <h1 className="wow animate__animated animate__fadeInUp" data-wow-duration="1s">About Us</h1>
          <p className="wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
            GTT specializes in providing Information Technology resources to FDA regulated industries.
            Our clients include Medical Device Manufacturers, Pharmaceutical, Biotech, and Research organizations.
            Our founders offer 20 years of industry experience that was incorporated into Group Technology when the company was founded in 1998.
          </p>
        </div>
      </div>
      
      <h2 className="wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">Competencies</h2>
      <p className="competencies-intro wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
        Consulting industry analysis has proven that because of their personal involvement entrepreneur operated consulting firms offer greater expertise,
        higher quality and lower costs than larger firms. We can add valued consultants to your staff augmentation in the following areas:
      </p>

      <div className="competency-row wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.8s">
        <div className="competency">
          <img src={'./quality-assurance.png'} alt="Quality Assurance" />
          <h3>Project Management and Quality Assurance</h3>
          <ul>
            <li>Project Management (all levels)</li>
            <li>Quality Assurance (Analysts & Testers)</li>
            <li>Validation Specialists</li>
            <li>Technical Writers</li>
          </ul>
        </div>
        
        <div className="competency">
          <img src={'./troubleshooting.png'} alt="IT Support and Administration" />
          <h3>IT Support and Administration</h3>
          <ul>
            <li>Server Administration</li>
            <li>Desktop Support (levels 1, 2, 3)</li>
            <li>Laboratory Equipment Support</li>
            <li>DBA’s</li>
          </ul>
        </div>
        
        <div className="competency">
          <img src={'./data-analytics.png'} alt="Development and Data Analysis" />
          <h3>Development and Data Analysis</h3>
          <ul>
            <li>Application Developers</li>
            <li>Application / Infrastructure Deployment</li>
            <li>Technical System Architects</li>
            <li>Clinical Data Analysts</li>
            <li>Biostatisticians</li>
            <li>Software Engineers – medical instrumentation</li>
            <li>Data / Process Modeling</li>
          </ul>
        </div>
      </div>
      
      <p className="wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
        We understand SOP’s, GLMP’s, Regulatory issues, Validation needs, CAPA, Remediation, and Compliance.
      </p>
      
      <h2 className="wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="1s">Experience</h2>
      <div className="experience-section wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
        <div className="experience-column">
          <p>
            Our representatives average 20 years industry experience providing clients with extensive consulting contacts
            in addition to the resources available from our existing staff of over 60 IT professionals.
            The average tenure of our consultants exceeds the industry average as a result of consistent client satisfaction and contract renewal.
          </p>
          <img src={'./consulting.png'} alt="Consulting" />
        </div>
        <div className="experience-column">
          <img src={'./project-management.png'} alt="Project Management" />
          <p>
            Group Technology helps managers reduce time consuming consultant staffing activity that can be efficiently outsourced
            allowing you to focus on project execution and successful implementation. This requires the assistance of a firm with the
            experience and ability to understand technology, planning and business in addition to the desire to act as a partner in
            the success of your organization.
          </p>
        </div>
      </div>
      
      <h2 className="wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="1s">Contact Brian Lebreck</h2>
      <div className="contact-details wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
        <p>(203) 260-1500</p>
        <p>2 Corporate Drive; Suite 246</p>
        <p>Shelton, CT 06484</p>
      </div>

      <footer className="footer">
        <p><a href="https://storyset.com/technology">Technology illustrations by Storyset</a></p>
      </footer>
    </div>
  );
};

export default Homepage;
