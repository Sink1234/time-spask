"use client"
import Link from "next/link"
import PageWrapper from "@/components/PageWrapper"
import styles from './Header.module.css'
import Image from "next/image"
import { useRef, useState } from "react"
import { useOnClickOutside } from "@/components/click-outside"
import font from 'next/font/local'

const myFont = font({src: './PT Sans Pro Extra Condensed Light.otf'})

const Navbar = () => {


    const [click, setClick] = useState(false)
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState(false)

    const divRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const getSearch = () => {
        setSearch(!search)
        setClick(true) 
        setTimeout(() => getFocus(), 740)
        
    }
    const MobMenu = () => {
      setOpen(!open);
      setClick(true)
    };

    const getFocus = () =>{
        if(inputRef.current){
            inputRef.current.focus(); 
        }
    }
    useOnClickOutside(divRef, () => setSearch(false))
    return(
        <div className={styles.sticky}>
            <header >
                <PageWrapper>
                    <div className={styles.flex}>
                        <div className={styles.left}>
                            <Image quality={80} src='/Icon.svg' width={70} height={70} alt="Логотип СПАСКа" priority className={click === true ? (search === true ? styles.disImg : styles.image) : styles.not_animImage}/>
                            <span className={styles.v_line}/>
                            <p className={myFont.className}>Расписание занятий</p>
                        </div>

                        <div className={styles.right}>
                            <div ref = {divRef} className={click === true ? (search === true ? styles.act_circle : styles.circle) : styles.not_animCircle} >
                                <input ref={inputRef} type="text" />
                                <div className={styles.sm_circle} onClick={getSearch}>
                                    <Image quality={80} priority src={'/Zoom.svg'} width={26} height={26} alt="Поиск" />
                                </div>
                            </div>
                            <button
                                className={click === true ? (search === true ? styles.disBurger : styles.burger) : styles.not_animBurger}
                                onClick={MobMenu}
                                 style={
                                    { color: "white" } 
                                }>
                                <span className={styles.nav}>
                                  <div
                                    className={styles.open}
                                    style={
                                       {
                                          border: "3px solid white",
                                          borderRadius: '5px',
                                          width: 33,
                                          height: 0,
                                        }
                                    }
                                  />
                                  <div
                                    style={
                                        {
                                          border: "3px solid white",
                                          borderRadius: '5px',
                                          width: 33,
                                          height: 0,
                                          marginTop: 4,
                                        }
                                    }
                                  />
                                  <div
                                    style={
                                        {
                                          border: "3px solid white",
                                          borderRadius: '5px',
                                          width: 19,
                                          height: 0,
                                          marginTop: 4,
                                        }
                                    }
                                  />
                                </span>
                            </button>
                        </div>
                    </div>
                </PageWrapper>
            </header>
        </div>
    )
}

export default Navbar