import { portfolioList } from '../constants';
import styles from '../style';

const Portfolio = () => {
    return (
        <section id="portfolio" className={`portfolio ${styles.section}`}>
            <div className="portfolio-area">
                <div className={`${styles.container}`}>
                    <div className="grid grid-cols-12 gap-4 w-full">
                        {portfolioList.map((item, id) => (
                            <div
                                key={id}
                                className="single-portfolio col-span-12 sm:col-span-6 md:col-span-4 rounded-md overflow-hidden shadow-xl mb-2 bg-[#1d293a]"
                            >
                                <div className="si-img h-[200px]">
                                    <a target="_blank" href={item.link} rel="noreferrer">
                                        <img className="h-full" src={item.img} alt="" />
                                    </a>
                                </div>
                                <div className="si-content px-3 py-5">
                                    <a
                                        target="_blank"
                                        className={`text-white font-semibold text-[28px] capitalize mb-2 inline-block hover:text-primary dark:hover:text-primary`}
                                        href={item.link}
                                        rel="noreferrer"
                                    >
                                        {item.title}
                                    </a>
                                    <p
                                        className={`si-desc mb-4 min-h-[140px] ${styles.paragraph} text-white text-[16px] dark:text-[16px]`}
                                    >
                                        {item.text}
                                    </p>
                                    <ul className="si-tag-box flex items-center">
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
