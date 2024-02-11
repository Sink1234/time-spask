"use client"
import {ChangeEvent, InputHTMLAttributes, useState} from 'react';
import styles from "./SemesterSearch.module.css"
import classNames from "@/lib/classNames";
import Link from "next/link";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    listGroup: string[];
    wrapper?: string;
}

export default function Group(
    {className, listGroup, ...props}: IProps
) {
    const [value, setValue] = useState<string>()

    function InputChange(event: ChangeEvent<HTMLInputElement>) {
        let value = event.target.value
            .toUpperCase()
            .replace(/[ACM]/g, (x) => {
                const replacer: { [key: string]: string } = {"A": "А", "C": "С", "M": "М"}
                return replacer[x]
            })

        const cleaned = value.replace(/[^0-9АСМП]/g, "")
        const math = cleaned.match(/^(\d{2,3})([АСМП]?)(\d{0,2})$/)
        console.log(cleaned, math)
        if (math) {
            let format = ""
            if (math[1]) {
                format += math[1]
            }
            if (math[2]) {
                format += "-" + math[2]
                if (math[3]) {
                    format += "-" + math[3]
                }
            }
            value = format
        }
        setValue(value)
    }

    return (
        <div className={styles.wrapper}>
            <input
                className={classNames(styles.input, className)}
                onChange={InputChange}
                value={value}
                placeholder={"Введите группу"}
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
                                href={`/main/group/${groupName}`}
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