import utilStyles from '../styles/utils.module.css';
import styles from '../styles/hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={`${utilStyles.flexCol} ${utilStyles.flex} ${utilStyles.jCenter} ${styles.heroContainer}`}>
                <p className={`${utilStyles.subheading}`}>Hi my name is,</p>
                <h1 className={`${utilStyles.heading2Xl}`}>Kyle Smith</h1>
                <p className={`${utilStyles.headingMd}`}>{'<'} <span>Student</span> by day and <span>Engineer</span> by Night{' />'}</p>
            </div>

                <div className={styles.iconContainer}>
                    <div className={styles.outer}>
                        <div className={styles.circle}></div>
                    </div>
                </div>
        </section>
    );
};

export default Hero;
