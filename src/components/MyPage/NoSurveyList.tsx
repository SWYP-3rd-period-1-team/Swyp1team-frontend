import React from 'react';
import styles from "../../styles/MySurveyList.module.css";
import Link from 'next/link';
import Image from 'next/image';
import LargeImage from "../../../public/favicon2.png"
import SmallImage from "../../../public/favicon3.png"
const NoSurveyList = () => {
    
    return (
        <>
            <div className={styles.mySurvey_container}>
                <div className={styles.mySurvey_text}>나의 질병 리스트</div>
                <div className={styles.no_hospitals}>
                    <div className={styles.image}>
                        <Image src={LargeImage} alt="favicon2" />
                        <Image src={SmallImage} alt="favicon3" />
                    </div>
                    <div className={styles.no_mySurvey}>앗! 아직 질병 리스트가 없네요!</div>
                    <div className={styles.no_mySurvey_text}>간단한 건강 설문을 해볼까요?</div>
                    <Link href={"/"}>
                        <button className={styles.click_survey}>간단 설문하러 가기</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NoSurveyList;