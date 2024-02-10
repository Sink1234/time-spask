"use client"
import type {KeyboardEvent, ChangeEvent, FC} from "react"
import {useCallback, useEffect, useRef, useState} from "react"
import Link from "next/link";
import Image from "next/image";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useDebouncedCallback} from "use-debounce";
import Timetable from "@/lib/data"
import classNames from "@/lib/classNames";
import styles from "./Search.module.css";

enum Type {
    Teacher,
    Group
}


const listNames = Timetable.teacher.listName().map(value => ({
    type: Type.Teacher,
    name: value
}));
const listGroups = Timetable.listGroup.map((value) => ({
    type: Type.Group,
    name: value.name
}));

interface IProps {
    setStatus: (v: boolean) => void;
}

const Search: FC<IProps> = ({setStatus}) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [active, setActive] = useState(false);
    const [data, setData] = useState<{ type: Type, name: string }[]>([]);
    const nodeRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const page = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    const [href, setHref] = useState(pathname);
    useEffect(() => {
        if(pathname !== href){
            setHref(pathname);
        }
    }, [pathname]);

    function handleChangeInputValue(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setInputValue(value);
        handleSearch(value);
    }

    function handleChangeSearch() {
        setActive(active => !active);
        useCallback(() => {
            replace(`${pathname}#now`);
        }, [href, active]);
    }


    function handleCloseSearch() {
        setData([]);
        setInputValue("");
        setActive(false);
    }

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(page);
        if (!term) {
            params.delete('query');
            replace(`${pathname}?${params.toString()}`);
            setData([]);
            return;
        }
        if (term[0].toLowerCase() === term[0].toUpperCase()){
            setData(listGroups.filter(value => value.name.toLowerCase().startsWith(term.toLowerCase())));
        } else {
            setData(listNames.filter(value => value.name.toLowerCase().startsWith(term.toLowerCase())));
        }
        params.set('query', term);
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    function handleKeyPress(event: KeyboardEvent<HTMLElement>) {
        switch (event.code) {
            case "Escape":
                handleCloseSearch();
                break;
        }
    }

    useEffect(() => {
        if (active){
            inputRef.current?.focus();
        }
        setStatus(active);
    }, [active]);

    useEffect(() => {
        const handleOutsideClick = (e: globalThis.MouseEvent) => {
            if (!nodeRef.current?.contains(e.target as Node)){
                handleCloseSearch();
            }
        }
        window.addEventListener("click", handleOutsideClick);
        return () => {
            window.removeEventListener("click", handleOutsideClick);
        }
    }, []);

    return (
        <div className={styles.wrapper}>
            <div ref={nodeRef} className={classNames(styles.search, active && styles["search-active"])}>
                <div className={styles.box}>
                    <button className={styles.button} onClick={handleChangeSearch}>
                        <Image
                            src={"/Zoom.svg"}
                            width={22} height={22}
                            className={styles.icon}
                            alt={"Поиск по группе или фамилии преподавателя"}
                        />
                    </button>
                    <input
                        type="text"
                        className={styles.input}
                        ref={inputRef}
                        placeholder="Введите группу или фамилию"
                        value={inputValue}
                        onChange={handleChangeInputValue}
                        onKeyDown={handleKeyPress}
                    />
                </div>
                <div className={active && data.length > 0 ? styles.resultActive : styles.result}>
                    <div className={styles["result__wrapper"]}>
                        <ul className={styles.list}>
                            {data.map((value, index) => (
                                <Link key={index}
                                      href={`/${value.type === Type.Teacher ? "teacher" : "group"}/${value.name}/#now`}
                                      className={styles.link}
                                      onClick={handleChangeSearch}>
                                    <li className={styles.item}>
                                        {value.name}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;