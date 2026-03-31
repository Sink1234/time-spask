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
        // Получаем параметры из URL браузера
        const params = new URLSearchParams(window.location.search);
        const printable = params.get('printable');
        // Скрываем кнопку, если printable === 'false'
        setShowPrintButton(printable !== 'false');
    }, []);
    
    return <div>
        <div ref={ref}>
            {children}
        </div>
        
        {/* Показываем кнопку только если showPrintButton === true */}
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
