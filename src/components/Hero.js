/* eslint-disable jsx-a11y/heading-has-content */
import styles from "../style";
import { BtnPrimary,BtnSecondary } from "./buttons";
import Typewriter from 'typewriter-effect/dist/core';

new Typewriter('#typewriter', {
  strings: ['Web Developer','Frond End Developer', 'React Js Developer'],
  autoStart: true,
  loop: true,
  delay: 75,
});

const Hero = () => {
  return (
    <section id='hero' className='hero'>
      <div className={`hero-area min-h-screen ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <div className="hero-text">
            <p className="text-sky-500 tracking-wide dark:text-white text-[20px]  leading-3 mb-2">Hello! I am</p>
            <h1 className={`${styles.heading1} mb-2`}>Mahbubur Rahman</h1>
            <h3 id="typewriter" className="capitalize text-sky-500 dark:text-white text-[28px] tracking-wide font-semibold leading-6 mb-12"></h3>
            <div className="">
              <BtnPrimary btnText="Get resume" btnLink="#"/>
              <BtnSecondary btnText="About me" btnLink="#about"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero