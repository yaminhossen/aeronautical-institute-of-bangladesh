import React from 'react';
import styles from '@/styles/Home.module.css'

const rewards = [
    { id: 1, count: 212, categori: 'National Awards', icon: <i class="fa-solid fa-certificate"></i> },
    { id: 2, count: 212, categori: 'Best Teachers', icon: <i class="fa-regular fa-user"></i> },
    { id: 3, count: 212, categori: 'Students Enrolled', icon: <i class="fa-solid fa-users"></i> },
    { id: 4, count: 212, categori: 'Courses', icon: <i class="fa-solid fa-book"></i> },
]
const reward = () => {
    return (
        <section>
            <div className={styles.rewardSection}>
                <div className={styles.rewardItems}>


                    <div className={styles.rewards}>
                        {
                            rewards.map(reward => <div className={styles.reward}>

                                <p className={styles.reIcon}>{reward.icon}</p>

                                <h2>{reward.count}</h2>
                                <h3>{reward.categori}</h3>
                            </div>

                            )
                        }
                    </div>
                </div>


            </div>


        </section>
    );
};

export default reward;