import utilStyles from '../styles/utils.module.css';
import styles from '../styles/sectionHeader.module.css';

const SectionHeader = ({children, number}) => {
    return (
        <div className={styles.sectionHeader}>
            <div className={styles.sectionText}>
                <span className={styles.sectionNumber}>0{number}.</span>
                <h1 className={`${styles.sectionTitle} ${utilStyles.headingLg}`}>{children}</h1>
                <span className={styles.sectionLine}></span>
            </div> 
        </div> 
    );
};

export default SectionHeader;