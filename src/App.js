import React from 'react';
import {Contact,Experience,Project,About, Education,Skills,Header} from './components/index';
import styles from './App.module.css';
import data from './data/resume';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.inside}>
          
          <Header values={data.name}/>
          <About values={data.about}/>
          <Education values={data.education}/>
          <Skills />
          <Project/>
          <Experience/>
          <Contact/>
        </div>
      </div>
    </div>
  );
}

export default App;
