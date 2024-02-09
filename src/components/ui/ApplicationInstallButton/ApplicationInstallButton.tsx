"use client"
import Image from "next/image";
import {useEffect, useState} from "react";
import classNames from "@/lib/classNames";
import styles from "./ApplicationInstallButton.module.css";
const ApplicationInstallButton = () => {
    const [deferredPrompt , setDeferredPrompt ] = useState<any>()
    useEffect(() => {
        window.addEventListener('beforeinstallprompt', function(event) {
            event.preventDefault();
            setDeferredPrompt(event);
        });
    }, []);
    function handleClick(){
        if (deferredPrompt){
            deferredPrompt.prompt();
        }
    }
    return (
        <button className={classNames(styles.btn, deferredPrompt&&styles.active)} onClick={handleClick}>
            {deferredPrompt
                ? <span>Установить</span>
                : <Image src={"/loader.gif"} className={styles.loading} width={24} height={24} alt={"Загрузка"} />}
        </button>
    );
};

export default ApplicationInstallButton;