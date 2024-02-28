import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import styles from '../style';

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-area bg-[#1d293a] py-10">
                <div className={styles.container}>
                    <div className="flex flex-col items-center justify-center footer-box">
                        <a
                            className="text-primary text-[30px] mb-5 tracking-wide font-bold"
                            href="#"
                        >
                            Mahbub
                        </a>
                        <ul className="flex mb-5 social-box">
                            <li>
                                <a
                                    target="_blank"
                                    href="https://www.facebook.com/mahbubcsebd"
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
                        <p className="flex items-center justify-center tracking-wide text-white capitalize footer-text dark:text-white">
                            all rights reserved by
                            <span className="inline-block ml-1 font-semibold cursor-pointer font-lato text-primary">
                                &copy;Mahbub
                            </span>{' '}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
