import React from "react";
import styles from "./TableHead.module.css";

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

export default function TableHead() {
    return (
        <thead>
        <tr className={styles.wrapper}>
            <th className={styles.part}>Пара</th>
            {week.map((value) => (
                <th key={value} className={styles.week}>{value}</th>
            ))}
        </tr>
        </thead>
    )
}