"use client"

import {useEffect, useState} from "react";
import styles from "./styles.module.css";

const AppletPWAInstruction = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<any>()
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/sw.js')
                .then((registration) => console.log('scope is: ', registration.scope));
        }
        window.addEventListener('beforeinstallprompt', function (event) {
            event.preventDefault();
            setDeferredPrompt(event);
        });
    }, []);

    function handleClick() {
        if (deferredPrompt) {
            deferredPrompt.prompt();
        }
    }

    return (
        <div>
            {deferredPrompt
                ? <div>
                    <div>Установить как приложение</div>
                    <button
                        className={styles.btn}
                        onClick={handleClick}
                    >
                        <span>Установить</span>
                    </button>
                </div>
                : <div>

                </div>
            }
        </div>

    );
};

export default AppletPWAInstruction;