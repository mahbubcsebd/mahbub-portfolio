import { love } from '../constants';
import SectionTitle from './SectionTitle';
import styles from '../style';

const LoveToDo = () => {
    return (
        <section id="love-to-do" className={`love-to-do ${styles.section}`}>
            <div className="love-to-do-area">
                <div className={`${styles.container}`}>
                    <SectionTitle title="Love To Do" />
                    <div className="grid grid-cols-12 gap-4 justify-between">
                        {love.map((item) => (
                            <div key={item.id} className="col-span-12 xs:col-span-6 md:col-span-3">
                                <div className="single-love text-center bg-[#1d293a] px-5 py-10 rounded-md">
                                    <span className="w-[60px] h-[60px] mb-2 fill-primary text-primary dark:text-gray-400 inline-block">
                                        {item.img}
                                    </span>
                                    <h3
                                        className={`text-[22x] ss:text-[25px] font-semibold text-white capitalize`}
                                    >
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoveToDo;
