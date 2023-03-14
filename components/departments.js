import React from 'react';
import styles from '@/styles/Home.module.css'

const allDepartment = [
    { id: 1, name: 'Department of Aerospace', img: '/dept (3).jpg', },
    { id: 2, name: 'Department of Avionics', img: '/dept (1).jpg', },
    { id: 2, name: 'Department of Airhostess', img: '/dept (3).jpg', }
]
const departments = () => {
    return (
        <section className={styles.departmentSection}>

            <h1>Department of AIB</h1>
            <div className={styles.departmentBorders}>
                <div className={styles.departmentBorder}></div>
                <div className={styles.departmentBorder}></div>
            </div>
            <div className={styles.departments}>
                {allDepartment.map(department =>
                    <div className={styles.department}>

                        <div className={styles.departmentImg}>
                            <div className={styles.depImg}>
                                <img src={department.img} alt="" />
                            </div>
                        </div>
                        <div className={styles.departmentDetail}>
                            <button>See More</button>
                        </div>

                        <h3>{department.name}</h3>
                    </div>)}
            </div>

        </section>
    );
};

export default departments;