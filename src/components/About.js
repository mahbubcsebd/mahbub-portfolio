/* eslint-disable react/no-unescaped-entities */
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { AboutImg, mahbubResume } from '../assets';
import styles from '../style';
import { BtnPrimary } from './buttons';
import SectionTitle from './SectionTitle';

function About() {
    return (
        <section id="about" className={`about ${styles.section}`}>
            <div className="about-area">
                <div className={`${styles.container}`}>
                    <SectionTitle title="About Me" />
                    <div className="about-content grid grid-cols-12 gap-4 content-center items-center">
                        <div className="col-span-12 md:col-span-6 content-center">
                            <div className="about-img w-full">
                                <img
                                    className="sm:w-[85%] sm:h-[535px]"
                                    src={AboutImg}
                                    alt="about-img"
                                />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 content-center">
                            <div className="about-text">
                                <h2
                                    className={`${styles.heading3} capitalize dark:text-primary mb-3 text-primary`}
                                >
                                    Let's Introduce Myself
                                </h2>
                                <p className={`${styles.paragraph} mb-10`}>
                                    I am a professional Front End Web Developer. I'm very passionate
                                    and dedicated to my work. With 1.5 years of experience as a
                                    professional Front End Web Developer, I have acquired the skills
                                    and knowledge necessary to make your project a success. I've
                                    helped so many organizations improve their online presence and
                                    hope I can help you to make an awesome website for your
                                    business. I am passionate to learn more and get my skill sets
                                    more polished and learn new technologies. I love programming as
                                    It's my passion.
                                </p>
                                <div className="grid grid-cols-12 gap-4 justify-between mb-4">
                                    <div className="col-span-12 ss:col-span-6">
                                        <ul>
                                            <li className={`${styles.paragraph} sm:text-[16px]`}>
                                                <span className="inline-block font-semibold mr-1">
                                                    Residence
                                                </span>
                                                : Bangladesh
                                            </li>
                                            <li className={`${styles.paragraph} sm:text-[16px]`}>
                                                <span className="inline-block font-semibold mr-1">
                                                    City
                                                </span>
                                                : Dhaka
                                            </li>
                                            <li className="mt-6 hidden ss:block">
                                                <ul className="social-box flex">
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
                                        </ul>
                                    </div>
                                    <div className="col-span-12 ss:col-span-6">
                                        <ul>
                                            <li className={`${styles.paragraph} sm:text-[16px]`}>
                                                <span className="inline-block font-semibold mr-1">
                                                    WhatsApp
                                                </span>
                                                : +8801862179418
                                            </li>
                                            <li className={`${styles.paragraph} sm:text-[16px]`}>
                                                <span className="inline-block font-semibold mr-1">
                                                    Mail
                                                </span>
                                                : mahbub.cse.me@gmail.com
                                            </li>
                                            <li className="mt-6 block ss:hidden">
                                                <ul className="social-box flex">
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
