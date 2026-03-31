"use client"

import {ReactNode, useRef, useEffect, useState} from "react";
import ReactToPrint from "react-to-print";

interface IProps {
    children:ReactNode
}

export default function ButtonPrint({children}:IProps) {
    const ref = useRef(null);
    const [showPrintButton, setShowPrintButton] = useState(true);
    
    useEffect(() => {
        // Функция проверки параметра
        const checkPrintParameter = () => {
            const params = new URLSearchParams(window.location.search);
            const printable = params.get('printable');
            setShowPrintButton(printable !== 'false');
        };
        
        // Проверяем при загрузке
        checkPrintParameter();
        
        // Слушаем изменения URL (для SPA навигации)
        const observer = new MutationObserver(() => {
            checkPrintParameter();
        });
        
        observer.observe(document.querySelector('body')!, {
            childList: true,
            subtree: true
        });
        
        return () => observer.disconnect();
    }, []);
    
    return <div>
        <div ref={ref}>
            {children}
        </div>
        
        {showPrintButton && (
            <div style={{
                display: "flex",
                justifyContent: "center",
                padding: "5px"
            }}>
                <ReactToPrint
                    trigger={() => <button style={{padding: "10px", borderRadius: "10px", cursor: "pointer"}}>Распечатать</button>}
                    content={() => ref.current}
                />
            </div>
        )}
    </div>
}
