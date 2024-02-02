"use client"
import styles from "./Button.module.css";
import classNames from "@/lib/classNames";
import {ReactNode, useRef} from "react";
import ReactToPrint from "react-to-print";
interface IProps {
    children:ReactNode
}
export default function ButtonPrint({children}:IProps) {
    const ref = useRef(null)
    return <div>
        <div ref={ref}>
            {children}
        </div>
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



    </div>
    // <button onClick={()=>window.print()} className={classNames(styles.button, styles['button-print'])}>Печать</button>
}