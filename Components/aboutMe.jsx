import Image from 'next/image';
import SectionHeader from './sectionHeader';

import styles from '../styles/aboutMe.module.css';
import utilStyles from '../styles/utils.module.css';

const AboutMe = () => {
	return (
		<section className={`${styles.aboutMe} ${utilStyles.section}`}>
			<SectionHeader number={0}>About Me</SectionHeader>
                <div className={styles.content}>
                    <p>The name is Kyle and I have been inputting text into a computer so that it can do cool stuff since I was 12. I am currently a computer science student at the University of Pretoria in South Africa. Programming to me is a way of staying sane in a world which I find to be crazy and weird. My programming experience comes from the five years of Robotics Programming for our High School team. I spend most of my time solving online programming related problems and developing smaller programs ranging from bash commands to stock screeners.</p>
                    <div className={styles.imageContainer}>
                        <Image className={styles.image} layout="fill" objectFit="cover" src="/images/personalImage.jpg" alt="That's me"/>
                    </div>
                </div>
		</section>
	)
};

export default AboutMe;
