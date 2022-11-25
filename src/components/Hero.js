import { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import { heroProfile, mahbubResume, right } from '../assets';
import styles from '../style';
import { BtnPrimary, BtnSecondary } from './buttons';

const Hero = () => {
    useEffect(() => {
        new Typewriter('#typewriter', {
            strings: ['Web Developer', 'Frond End Developer', 'React Js Developer', 'Programmer'],
            autoStart: true,
            loop: true,
            delay: 75,
        });
    }, []);

    return (
        <section id="hero" className="hero pt-16 sm:pt-0">
            <div className={`hero-area min-h-screen ${styles.flexCenter}`}>
                <div className={`${styles.container}`}>
                    <div className="hero-content grid grid-cols-12 gap-4 text-center xs:text-start">
                        <div className="hero-text order-2 sm:order-1 col-span-12 sm:col-span-7 grid content-center">
                            <p className="font-bold tracking-wide  dark:text-white text-[22px] leading-3 mb-2">
                                Hello! <span className="text-primary">I am</span>
                            </p>
                            <h1 className={`${styles.heading1} sm:mb-2`}>
                                Mahbubur{' '}
                                <span className="text-[#212529] dark:text-white">Rahman</span>
                            </h1>
                            <div className="work-box flex items-center mb-4 md:mb-8">
                                <img
                                    className="w-[30px] h-[30px] xs:w-[40px] xs:h-[40px] mr-4"
                                    src={right}
                                    alt=""
                                />
                                <h3
                                    id="typewriter"
                                    className="capitalize text-primary text-[22px] xs:text-[28px] tracking-wide font-semibold"
                                ></h3>
                            </div>
                            <div className="">
                                <BtnPrimary btnText="Get resume" btnLink={mahbubResume} />
                                <BtnSecondary btnText="About me" btnLink="#about" />
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-5 order-1 sm:order-2 mx-auto mb-5">
                            <img
                                src={heroProfile}
                                alt="hero-profile"
                                className="h-auto sm:max-w-auto md:h-[420px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
