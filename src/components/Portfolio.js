import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { portfolioList } from '../constants';
import styles from '../style';

const Portfolio = () => {
    return (
        <section id="portfolio" className={`portfolio ${styles.section}`}>
            <div className="portfolio-area">
                <div className={`${styles.container}`}>
                    <div className="swiper-box">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            slidesPerGroup={3}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {portfolioList.map((item, id) => (
                                <SwiperSlide key={id}>
                                    <div className="single-portfolio rounded-md overflow-hidden shadow-xl mb-15">
                                        <div className="si-img">
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="si-content p-3">
                                            <a className={`${styles.heading3} capitalize`} href="#">
                                                {item.title}
                                            </a>
                                            <p className={`si-desc mb-4 ${styles.paragraph}`}>
                                                {item.text}
                                            </p>
                                            <ul className="si-tag-box flex items-center">
                                                {item.tags.map((tag) => (
                                                    <li
                                                        key={tag}
                                                        className="dark:text-white mr-2 bg-sky-500 px-2 py-1 rounded-sm text-white text-[12px]"
                                                    >
                                                        {tag}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
