/* eslint-disable prettier/prettier */
import { FaGithub } from 'react-icons/fa';
import { portfolioList } from '../constants';
import styles from '../style';
import SectionTitle from './SectionTitle';

const Portfolio = () => {
    return (
        <section
            id="portfolio"
            className={`portfolio ${styles.section}`}
        >
            <div className="portfolio-area">
                <div className={`${styles.container}`}>
                    <SectionTitle title="Portfolio" />
                    <div className="grid w-full grid-cols-12 gap-4">
                        {portfolioList.map((item, id) => (
                            <div
                                key={id}
                                className="single-portfolio col-span-12 sm:col-span-6 md:col-span-4 rounded-md overflow-hidden shadow-xl mb-2 bg-[#1d293a]"
                            >
                                <div className="si-img h-[200px] ss:h-[250px] sm:h-[200px] overflow-hidden">
                                    <a
                                        target="_blank"
                                        href={item.link}
                                        rel="noreferrer"
                                    >
                                        <img
                                            className="w-full h-full transition duration-500 portfolio-img"
                                            src={item.img}
                                            alt="portfolio img"
                                        />
                                    </a>
                                </div>
                                <div className="px-3 py-5 si-content">
                                    <div className="flex items-center justify-between mb-2">
                                        <a
                                            target="_blank"
                                            className={`text-white font-semibold text-[28px] capitalize inline-block hover:text-primary dark:hover:text-primary`}
                                            href={item.link}
                                            rel="noreferrer"
                                        >
                                            {item.title}
                                        </a>
                                        <div>
                                            <a
                                                target="_blank"
                                                className="text-white"
                                                href={item.github} rel="noreferrer"
                                            >
                                                <FaGithub />
                                            </a>
                                        </div>
                                    </div>
                                    <p
                                        className={`si-desc mb-4 sm:min-h-[140px] ${styles.paragraph} text-white text-[16px]`}
                                    >
                                        {item.text}
                                    </p>
                                    <ul className="flex items-center si-tag-box">
                                        {item.tags.map((tag) => (
                                            <li
                                                key={tag}
                                                className="dark:text-white mr-2 bg-primary px-2 py-1 rounded-sm text-white text-[12px]"
                                            >
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
