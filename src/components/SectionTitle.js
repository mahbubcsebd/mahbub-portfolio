import styles from '../style';
const SectionTitle = ({ title }) => {
    return (
        <div className="section-top-box text-center mb-8">
            <h2 className={`section-title capitalize ${styles.heading2}`}>{title}</h2>
        </div>
    );
};

export default SectionTitle;
