import styles from '../style';

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-area :bg-sky-100 py-8">
                <div className={styles.container}>
                    <p className="footer-text capitalize flex justify-center dark:text-white items-center">
                        all rights reserved by
                        <span className="inline-block ml-1 font-semibold font-lato text-sky-500 cursor-pointer">
                            &copy;Mahbub
                        </span>{' '}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
