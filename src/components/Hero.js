import { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import { heroProfile, mahbubResume, right } from '../assets';
import styles from '../style';
import { BtnPrimary, BtnSecondary } from './buttons';

const Hero = () => {
    useEffect(() => {
        new Typewriter('#typewriter', {
            strings: [
                'Frond End Developer',
                'Next Js Developer',
                'React Js Developer',
                'Programmer',
            ],
            autoStart: true,
            loop: true,
            delay: 75,
        });
    }, []);

    return (
        <section id="hero" className="pt-16 hero sm:pt-0">
            <div className={`hero-area min-h-screen ${styles.flexCenter}`}>
                <div className={`${styles.container}`}>
                    <div className="grid grid-cols-12 gap-4 text-center hero-content xs:text-start">
                        <div className="grid content-center order-2 col-span-12 hero-text sm:order-1 sm:col-span-7">
                            <p className="font-bold tracking-wide  dark:text-white text-[22px] leading-3 mb-2">
                                Hello! <span className="text-primary">I am</span>
                            </p>
                            <h1 className={`${styles.heading1} sm:mb-2`}>
                                Mahbubur{' '}
                                <span className="text-[#212529] dark:text-white">Rahman</span>
                            </h1>
                            <div className="flex items-center mb-4 work-box md:mb-8">
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
                        <div className="order-1 col-span-12 mx-auto mb-5 sm:col-span-5 sm:order-2">
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
