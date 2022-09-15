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
                                <div className="si-img">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="si-content px-3 py-5">
                                    <a
                                        className={`text-white font-semibold text-[28px] capitalize mb-2 inline-block hover:text-primary dark:hover:text-primary`}
                                        href="#"
                                    >
                                        {item.title}
                                    </a>
                                    <p className={`si-desc mb-4 ${styles.paragraph} text-white`}>
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
