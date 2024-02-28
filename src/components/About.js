/* eslint-disable react/no-unescaped-entities */
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { AboutImg, mahbubResume } from '../assets';
import styles from '../style';
import SectionTitle from './SectionTitle';
import { BtnPrimary } from './buttons';

function About() {
    return (
        <section id="about" className={`about ${styles.section}`}>
            <div className="about-area">
                <div className={`${styles.container}`}>
                    <SectionTitle title="About Me" />
                    <div className="grid items-center content-center grid-cols-12 gap-4 about-content">
                        <div className="content-center col-span-12 md:col-span-6">
                            <div className="w-full about-img">
                                <img
                                    className="sm:w-[85%] sm:h-[535px]"
                                    src={AboutImg}
                                    alt="about-img"
                                />
                            </div>
                        </div>
                        <div className="content-center col-span-12 md:col-span-6">
                            <div className="about-text">
                                <h2
                                    className={`${styles.heading3} capitalize dark:text-primary mb-3 text-primary`}
                                >
                                    Let's Introduce Myself
                                </h2>
                                <p className={`${styles.paragraph} mb-10`}>
                                    Welcome! I'm a passionate front-end web developer. I thrive on
                                    turning visions into digital reality. I have 3.5 years of
                                    professional experience. I've been lucky enough to help many
                                    organizations improve their online presence. I drive my journey
                                    in web development with a deep passion for coding and an
                                    unending curiosity. I'm always ready to learn and polish my
                                    skills, and keep up with new technologies. Programming isn't a
                                    job - it's a passion that keeps me driven.
                                </p>
                                <div className="grid justify-between grid-cols-12 gap-4 mb-4">
                                    <div className="col-span-12 ss:col-span-6">
                                        <ul>
                                            <li className={`${styles.paragraph} sm:text-[16px]`}>
                                                <span className="inline-block mr-1 font-semibold">
                                                    Residence
                                                </span>
                                                : Bangladesh
                                            </li>
                                            <li className={`${styles.paragraph} sm:text-[16px]`}>
                                                <span className="inline-block mr-1 font-semibold">
                                                    City
                                                </span>
                                                : Dhaka
                                            </li>
                                            <li className="hidden mt-6 ss:block">
                                                <ul className="flex social-box">
                                                    <li>
                                                        <a
                                                            target="_blank"
                                                            href="https://www.facebook.com/mahbubcsebd/"
                                                            className="w-[40px] h-[40px] mr-2 bg-primary leading-[40px] flex justify-center items-center text-[20px] rounded-sm text-white"
                                                            rel="noreferrer"
                                                        >
                                                            <FaFacebookF />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            target="_blank"
                                                            href="https://www.linkedin.com/in/mahbubur-rahman-18914a26a/"
                                                            className="w-[40px] h-[40px] mr-2 bg-primary leading-[40px] flex justify-center items-center text-[20px] rounded-sm text-white"
                                                            rel="noreferrer"
                                                        >
                                                            <FaLinkedinIn />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            target="_blank"
                                                            href="https://twitter.com/"
                                                            className="w-[40px] h-[40px] mr-2 bg-primary leading-[40px] flex justify-center items-center text-[20px] rounded-sm text-white"
                                                            rel="noreferrer"
                                                        >
                                                            <FaTwitter />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            target="_blank"
                                                            href="https://www.instagram.com/mahbubcseme/"
                                                            className="w-[40px] h-[40px] mr-2 bg-primary leading-[40px] flex justify-center items-center text-[20px] rounded-sm text-white"
                                                            rel="noreferrer"
                                                        >
                                                            <FaInstagram />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            target="_blank"
                                                            href="https://github.com/mahbubcsebd"
                                                            className="w-[40px] h-[40px] bg-primary leading-[40px] flex justify-center items-center text-[20px] rounded-sm text-white"
                                                            rel="noreferrer"
                                                        >
                                                            <FaGithub />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-span-12 ss:col-span-6">
                                        <ul>
                                            <li className={`${styles.paragraph} sm:text-[16px]`}>
                                                <span className="inline-block mr-1 font-semibold">
                                                    WhatsApp
                                                </span>
                                                : +880 1886225492
                                            </li>
                                            <li className={`${styles.paragraph} sm:text-[16px]`}>
                                                <span className="inline-block mr-1 font-semibold">
                                                    Mail
                                                </span>
                                                : mahbub.cse.me@gmail.com
                                            </li>
                                            <li className="block mt-6 ss:hidden">
                                                <ul className="flex social-box">
                                                    <li>
                                                        <a
                                                            target="_blank"
                                                            href="https://www.facebook.com/mahbub624"
                                                            className="w-[40px] h-[40px] mr-2 bg-primary leading-[40px] flex justify-center items-center text-[20px] rounded-sm text-white"
                                                            rel="noreferrer"
                                                        >
                                                            <FaFacebookF />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            target="_blank"
                                                            href="https://www.linkedin.com/"
                                                            className="w-[40px] h-[40px] mr-2 bg-primary leading-[40px] flex justify-center items-center text-[20px] rounded-sm text-white"
                                                            rel="noreferrer"
                                                        >
                                                            <FaLinkedinIn />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            target="_blank"
                                                            href="https://twitter.com/"
                                                            className="w-[40px] h-[40px] mr-2 bg-primary leading-[40px] flex justify-center items-center text-[20px] rounded-sm text-white"
                                                            rel="noreferrer"
                                                        >
                                                            <FaTwitter />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            target="_blank"
                                                            href="https://www.instagram.com/mahbub.6242/"
                                                            className="w-[40px] h-[40px] mr-2 bg-primary leading-[40px] flex justify-center items-center text-[20px] rounded-sm text-white"
                                                            rel="noreferrer"
                                                        >
                                                            <FaInstagram />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            target="_blank"
                                                            href="https://github.com/mahbubcsebd"
                                                            className="w-[40px] h-[40px] bg-primary leading-[40px] flex justify-center items-center text-[20px] rounded-sm text-white"
                                                            rel="noreferrer"
                                                        >
                                                            <FaGithub />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="mt-5">
                                                <BtnPrimary
                                                    btnText="Get resume"
                                                    btnLink={mahbubResume}
                                                />
                                            </li>
                                        </ul>
                                    </div>
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
