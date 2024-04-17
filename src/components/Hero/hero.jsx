import React from 'react';
import styles from "./hero.module.css";
import { getImageUrl } from "../../utils";
import resumeAKA from "../../assets/resume-AKA.pdf"

export const Hero = () =>{

  const handleDowloadCV = () =>{
    //const pdfPath = '/resume-AKA.pdf';
    const link = document.createElement('a');
    link.href = resumeAKA; // Set the href to the imported PDF file
    link.download = 'resume-AK_Arangala.pdf'; // Specify the file name for download
    link.target = '_blank'; // Open the PDF file in a new tab/window

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

};
 

    return (
        <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Achinika</h1>
        <p className={styles.description}>
          I'm an undergraduate student in SLIIT. 
          I have expereince in Front-end Developing, UI/UX designing and Full Stack Developing areas. 
          Reach out if you'd like to learn more!
        </p>
        <div class="button-container">
        <a href="mailto:kavindiarangala@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <button className={styles.downloadBtn} onClick={handleDowloadCV}>
            Download CV
        </button>
        </div>
      </div>
      <img
        src={getImageUrl("hero/profilePic.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
    );
};