import { love } from '../constants';
import styles from '../style';

const LoveToDo = () => {
    return (
        <section id="love-to-do" className={`love-to-do ${styles.section}`}>
            <div className="love-to-do-area">
                <div className={`${styles.container}`}>
                    <div className="grid grid-cols-12 gap-2 justify-between">
                        {love.map((item) => (
                            <div key={item.id} className="col-span-3">
                                <div className="single-love">
                                    <img
                                        className="w-[60px] h-[60px] fill-current stroke-sky-500 text-sky-500"
                                        src={item.img}
                                        alt=""
                                    />
                                    <h3 className={`${styles.heading3} capitalize`}>
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
