import { useState } from 'react';
import { mahbubResume } from '../assets';
import styles from '../style';
import DarkModeBtn from './DarkModeBtn';

const Header = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <header className="w-full relative z-[999]">
            <nav className="w-full fixed top-0 bg-white dark:bg-gray-900 transition duration-1000">
                <div className={`${styles.container}`}>
                    <div className="flex justify-center items-start md:items-center py-5 md:py-7">
                        <div
                            className={`justify-between mx-auto pr-10 md:items-center md:flex w-full`}
                        >
                            <div>
                                <div className="flex items-center justify-between md:block">
                                    <a href="#">
                                        <h2 className="text-2xl font-bold text-primary">Mahbub</h2>
                                    </a>
                                    <div className="md:hidden">
                                        <button
                                            className="p-2 text-gray-700 dark:text-white focus:border-0 rounded-md outline-none focus:border-gray-400"
                                            onClick={() => setNavbar(!navbar)}
                                        >
                                            {navbar ? (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            ) : (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M4 6h16M4 12h16M4 18h16"
                                                    />
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div
                                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                                        navbar ? 'block' : 'hidden'
                                    }`}
                                >
                                    <ul className="items-center justify-center space-y-5 sm:space-y-8 md:flex md:space-x-6 md:space-y-0">
                                        <li className="">
                                            <a href="#about" className={`${styles.navLink}`}>
                                                About
                                            </a>
                                        </li>
                                        <li className="">
                                            <a href="#skill" className={`${styles.navLink}`}>
                                                Skill
                                            </a>
                                        </li>
                                        <li className="">
                                            <a href="#portfolio" className={`${styles.navLink}`}>
                                                Portfolio
                                            </a>
                                        </li>
                                        <li className="">
                                            <a href="#contact" className={`${styles.navLink}`}>
                                                Contact
                                            </a>
                                        </li>
                                        <li className="">
                                            <a
                                                href={mahbubResume}
                                                className={`${styles.navLink} bg-primary px-4 py-2 rounded-sm text-white hover:text-white dark:hover:text-white`}
                                            >
                                                Resume
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <DarkModeBtn />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
