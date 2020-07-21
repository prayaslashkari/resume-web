import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.inner}>
                <h1 className={styles.headline}>Skills</h1>
                
                <div  className={styles.desc}>
                    <div>
                        <h2 className={styles.head}>Development</h2>
                        <p className={styles.content}> React Js, Javascript, HTML5, CSS3, Sass, C++</p>
                    </div>

                    <div>
                        <h2 className={styles.head}>Design</h2>
                        <p className={styles.content}> Photoshop, Illustrator, Figma, After Effects</p>
                    </div>

                    <div>
                        <h2 className={styles.head}>Soft Skills</h2>
                        <p className={styles.content}>Self-Confidence, Problem Solving, Collaboration</p>
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default Skills;