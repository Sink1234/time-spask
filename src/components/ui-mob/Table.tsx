'use client'

import {  usePathname, useSearchParams } from "next/navigation";
import styles from './ui.module.css'
import { Welcome } from "@/interfaces";
import Link from "next/link";

export interface IN{
    N: Welcome
}

const Table = ({N}:IN) =>{
    const searchParams = useSearchParams()
    const search = searchParams.get('search')
    const term = searchParams.get('query')
    let st: string[] = []
    N.YhZav.ListGroup[0].Group.map((group)=>{
            let query = term
            let num = query ? query.length : 0
            if(query === group.$.Name.slice(0, num)){
               st.push(group.$.Name)
            }
    })
    

    return(
        <div className={search === '1' ? styles.groupDiv : styles.disGroup}>
            {st.map((group)=>(
                <Link key={group} href={'/group/' + group} ><span  >{group}</span></Link>
            ))}
        </div>
    )
}

export default Table