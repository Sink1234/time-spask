import type { ReactNode } from "react";
import styles from './PageWrapper.module.css'

const PageWrapper = ({
    className,
    children
} : {
    className?: string,
    children: ReactNode,
}) => {
    return(
        <div 
            className={className ? className : styles.wrapper} id='custom'>
            {children}
        </div>
    )
}

export default PageWrapper