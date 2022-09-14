/* eslint-disable react/no-unescaped-entities */
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { heroProfile } from '../assets';
import styles from '../style';
import { BtnPrimary, BtnSecondary } from './buttons';

function About() {
    return (
        <section id="about" className={`about ${styles.section}`}>
            <div className="about-area">
                <div className={`${styles.container}`}>
                    <div className="about-content grid grid-cols-12 gap-4 content-center items-center">
                        <div className="col-span-6 content-center">
                            <div className="about-img max-w-[350px]">
                                <img src={heroProfile} alt="about-img" />
                            </div>
                        </div>
                        <div className="col-span-6 content-center">
                            <div className="about-text">
                                <h2 className={`${styles.heading3}`}>Let's Introduce Myself</h2>
                                <p className={`${styles.paragraph} mb-10`}>
                                    I am a professional Front End Web Developer. I'm very passionate
                                    and dedicated to my work. With 1.5 years of experience as a
                                    professional Front End Web Developer, I have acquired the skills
                                    and knowledge necessary to make your project a success. I’ve
                                    helped so many organizations improve their online presence and
                                    hope I can help you to make an awesome website for your
                                    business. I am passionate to learn more and get my skill sets
                                    more polished and learn new technologies. I love programming as
                                    It's my passion.
                                </p>
                                <div className="grid grid-cols-12 gap-2 justify-between mb-4">
                                    <div className="col-span-6">
                                        <ul>
                                            <li className={`${styles.paragraph}`}>
                                                <span className="inline-block font-semibold mr-1">
                                                    Residence
                                                </span>
                                                : Bangladesh
                                            </li>
                                            <li className={`${styles.paragraph}`}>
                                                <span className="inline-block font-semibold mr-1">
                                                    City
                                                </span>
                                                : Dhaka
                                            </li>
                                            <li>
                                                <ul className="social-box flex>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="w-[40px] h-[40px] bg-sky-500 leading-[40px] flex justify-center items-center text-[20px] rounded-sm text-white"
                                                        >
                                                            <FaFacebookF />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="w-[40px] h-[40px] bg-sky-500 leading-[40px] flex justify-center items-center text-[20px] rounded-sm text-white"
                                                        >
                                                            <FaLinkedinIn />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="w-[40px] h-[40px] bg-sky-500 leading-[40px] flex justify-center items-center text-[20px] rounded-sm text-white"
                                                        >
                                                            <FaTwitter />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="w-[40px] h-[40px] bg-sky-500 leading-[40px] flex justify-center items-center text-[20px] rounded-sm text-white"
                                                        >
                                                            <FaInstagram />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="w-[40px] h-[40px] bg-sky-500 leading-[40px] flex justify-center items-center text-[20px] rounded-sm text-white"
                                                        >
                                                            <FaGithub />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-span-6">
                                        <ul>
                                            <li className={`${styles.paragraph}`}>
                                                <span className="inline-block font-semibold mr-1">
                                                    WhatsApp
                                                </span>
                                                : +8801862179418
                                            </li>
                                            <li className={`${styles.paragraph}`}>
                                                <span className="inline-block font-semibold mr-1">
                                                    Mail
                                                </span>
                                                : mahbub.cse.me@gmail.com
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="">
                                    <BtnPrimary btnText="Get resume" btnLink="#" />
                                    <BtnSecondary btnText="My Skills" btnLink="#skill" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
