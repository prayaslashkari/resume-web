import React from 'react';
import styles from './Education.module.css';

const Education = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.upper}>
                <h1 className={styles.headline}>Education</h1>
            </div>
            
            <div className={styles.lower}>
                <div className={styles.section}>
                    <h2 className={styles.ins}> Jaypee Institute Of Information Technology / <span className={styles.spantext}> B.Tech CSE</span> </h2>
                    <h4 className={styles.time}> Aug 2019 - July 2020 ,  Noida</h4>
                    <p className={styles.descrip}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quibusdam corrupti, earum consequuntur delectus illum dolores libero tempora ratione animi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nam, perspiciatis rerum sed, illo tenetur repudiandae optio enim asperiores tempora id totam voluptatibus dolore ut deserunt non quam veniam maxime.</p>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.ins}> Delhi Public School / <span className={styles.spantext}> HSC </span> </h2>
                    <h4 className={styles.time}> Aug 2019 - July 2020 ,  Mathura</h4>
                    <p className={styles.descrip}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quibusdam corrupti, earum consequuntur delectus illum dolores libero tempora ratione animi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nam, perspiciatis rerum sed, illo tenetur repudiandae optio enim asperiores tempora id totam voluptatibus dolore ut deserunt non quam veniam maxime.</p>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.ins}> Delhi Public School / <span className={styles.spantext}> SSC </span> </h2>
                    <h4 className={styles.time}> Aug 2019 - July 2020 ,  Mathura</h4>
                    <p className={styles.descrip}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quibusdam corrupti, earum consequuntur delectus illum dolores libero tempora ratione animi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nam, perspiciatis rerum sed, illo tenetur repudiandae optio enim asperiores tempora id totam voluptatibus dolore ut deserunt non quam veniam maxime.</p>
                </div>
            </div>
        </div>
     );
}
 
export default Education;