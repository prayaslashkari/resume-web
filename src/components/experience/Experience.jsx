import React from 'react';
import styles from './Experience.module.css';

const Experience = () => {
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.experience}>
                    <div className={styles.header}> <h1>Experience</h1> </div>
                    
                    <div className={styles.content}>
                        <div className={styles.section}>
                            <h2 className={styles.ins}> India Reads / <span className={styles.spantext}>Graphic Designer</span> </h2>
                            <h4 className={styles.time}> Aug 2019 - July 2020 ,  Noida</h4>
                            <p className={styles.descrip}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quibusdam corrupti, earum consequuntur delectus illum dolores libero tempora ratione animi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nam, perspiciatis rerum sed, illo tenetur repudiandae optio enim asperiores tempora id totam voluptatibus dolore ut deserunt non quam veniam maxime.</p>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.ins}> Salvadore / <span className={styles.spantext}> Designer</span> </h2>
                            <h4 className={styles.time}> Aug 2019 - July 2020 ,  Noida</h4>
                            <p className={styles.descrip}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quibusdam corrupti, earum consequuntur delectus illum dolores libero tempora ratione animi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nam, perspiciatis rerum sed, illo tenetur repudiandae optio enim asperiores tempora id totam voluptatibus dolore ut deserunt non quam veniam maxime.</p>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
      );
}
 
export default Experience;