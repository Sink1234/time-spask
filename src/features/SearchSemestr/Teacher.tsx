"use client"
import {ChangeEvent, InputHTMLAttributes, useState} from 'react';
import styles from "./SemesterSearch.module.css"
import classNames from "@/shared/lib/classNames";
import Link from "next/link";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    listGroup: string[];
    wrapper?: string;
}

export default function Teacher(
    {className, listGroup, ...props}: IProps
) {
    const [value, setValue] = useState<string>()

    function InputChange(event: ChangeEvent<HTMLInputElement>) {
        let value = event.target.value
        setValue(value)
    }

    return (
        <div className={styles.wrapper}>
            <input
                className={classNames(styles.input, className)}
                onChange={InputChange}
                value={value}
                placeholder={"ФИО"}
                {...props}
            />
            {value
                && listGroup.length
                && <div className={styles.list}>
                    {listGroup
                        .filter(name => name.startsWith(value))
                        .map((groupName) => (
                            <Link
                                className={styles.item}
                                href={`/main/teacher/${groupName}`}
                                onClick={() => setValue(groupName)}
                            >
                                {groupName}
                            </Link>
                        ))
                    }
                </div>
            }
        </div>

    );
}