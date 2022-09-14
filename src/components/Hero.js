import { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import { heroProfile, heroProfileBg, right } from '../assets';
import styles from '../style';
import { BtnPrimary, BtnSecondary } from './buttons';

const Hero = () => {
    useEffect(() => {
        new Typewriter('#typewriter', {
            strings: ['Web Developer', 'Frond End Developer', 'React Js Developer'],
            autoStart: true,
            loop: true,
            delay: 75,
        });
    }, []);

    return (
        <section id="hero" className="hero">
            <div className={`hero-area min-h-screen ${styles.flexCenter}`}>
                <div className={`${styles.container}`}>
                    <div className="hero-content grid grid-cols-12 gap-4">
                        <div className="hero-text col-span-8 grid content-center">
                            <p className="text-sky-500 tracking-wide dark:text-white text-[20px]  leading-3 mb-2">
                                Hello! I am
                            </p>
                            <h1 className={`${styles.heading1} mb-2`}>Mahbubur Rahman</h1>
                            <div className="work-box flex items-center mb-8">
                                <img className="w-[40px] h-[40px] mr-4" src={right} alt="" />
                                <h3
                                    id="typewriter"
                                    className="capitalize text-sky-500 dark:text-white text-[28px] tracking-wide font-semibold"
                                ></h3>
                            </div>
                            <div className="">
                                <BtnPrimary btnText="Get resume" btnLink="#" />
                                <BtnSecondary btnText="About me" btnLink="#about" />
                            </div>
                        </div>
                        <div className="col-span-4 relative z-40">
                            <img src={heroProfile} alt="hero-profile" className="relative z-50" />
                            <img
                                src={heroProfileBg}
                                alt="hero-profile"
                                className="absolute bottom-0 z-[0]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
