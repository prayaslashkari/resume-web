import React from 'react';
import styles from './About.module.css';

const About = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.inner}>
                <h1 className={styles.headline}>About Me</h1>
                <p className={styles.content}>Passionate front-end web developer with 3 years of experience using JavaScript, HTML5, and CSS to build all aspects of the user experience and user interface for client-facing landing pages. Specializes in using jQuery and AngularJS to build e-commerce sites.
                
                Passionate front-end web developer with 3 years of experience using JavaScript, HTML5, and CSS to build all aspects of the user experience and user interface for client-facing landing pages. Specializes in using jQuery and AngularJS to build e-commerce sites.</p>
            </div>
        </div>
     );
}
 
export default About;