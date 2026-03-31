"use client"

import { ReactNode, useRef, useEffect, useState } from "react";
import ReactToPrint from "react-to-print";

interface IProps {
    children: ReactNode;
}

export default function ButtonPrint({ children }: IProps) {
    const ref = useRef(null);
    const [showPrintButton, setShowPrintButton] = useState(true);

    useEffect(() => {
        // Функция для обновления состояния
        const updatePrintVisibility = () => {
            // Сначала проверяем параметр в URL
            const params = new URLSearchParams(window.location.search);
            let hidePrint = params.get('printable') === 'false';

            // Если параметра нет, смотрим в localStorage
            if (params.get('printable') === null) {
                const saved = localStorage.getItem('hidePrintButton');
                hidePrint = saved === 'true';
            } else {
                // Если параметр есть, сохраняем его в localStorage
                localStorage.setItem('hidePrintButton', String(hidePrint));
            }

            setShowPrintButton(!hidePrint);
        };

        // Проверяем при загрузке
        updatePrintVisibility();

        // Слушаем изменения URL (для SPA навигации)
        let lastUrl = window.location.href;
        const observer = new MutationObserver(() => {
            if (window.location.href !== lastUrl) {
                lastUrl = window.location.href;
                updatePrintVisibility();
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => observer.disconnect();
    }, []);

    return (
        <div>
            <div ref={ref}>{children}</div>
            {showPrintButton && (
                <div style={{ display: "flex", justifyContent: "center", padding: "5px" }}>
                    <ReactToPrint
                        trigger={() => (
                            <button style={{ padding: "10px", borderRadius: "10px", cursor: "pointer" }}>
                                Распечатать
                            </button>
                        )}
                        content={() => ref.current}
                    />
                </div>
            )}
        </div>
    );
}
