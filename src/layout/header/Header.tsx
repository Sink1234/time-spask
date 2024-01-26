"use client"

import {useEffect, useRef, useState, Suspense} from "react"
import {usePathname, useRouter} from "next/navigation"
import Image from "next/image"
import font from 'next/font/local'
import PageWrapper from "@/components/PageWrapper"
import Search from "@/components/ui/Search/Search"
import styles from './Header.module.css'
import classNames from "@/lib/classNames";

const myFont = font({src: './PT Sans Pro Extra Condensed Light.otf'})

const Navbar = ({searchParams,}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) => {
    const [click, setClick] = useState(false)
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState(false)

    const divRef = useRef<HTMLDivElement>(null)

    const pathname = usePathname()
    const router = useRouter()

    const [href, setHref] = useState(pathname)
    useEffect(() => {
        pathname === href
            ? ''
            : setHref(pathname)
    }, [pathname])

    useEffect(() => {
        setSearch(false);
        router.push(`${pathname}#now`)

    }, [href])


    const MobMenu = () => {
        setOpen(!open);
        setClick(true)
    };

    function setStatusSearch(value: boolean) {
        setClick(value)
        setSearch(value)
        // setOpen(value)
    }
    return (
        <div className={styles.sticky} ref={divRef}>
            <header>
                <PageWrapper>
                    <Suspense>
                        <div className={styles.flex}>
                            <div className={styles.left}>
                                <Image quality={100}
                                       src='/Icon.svg'
                                       width={70} height={70}
                                       alt="Логотип СПАСКа"
                                       priority
                                       className={
                                           click
                                               ? (
                                                   search
                                                       ? styles.disImg
                                                       : styles.image
                                               )
                                               : styles.not_animImage
                                       }/>
                                <span className={styles.v_line}/>
                                <p className={myFont.className}>Расписание занятий</p>
                            </div>

                            <div className={styles.right}>
                                <Search setStatus={setStatusSearch}/>
                                <button
                                    className={
                                        click
                                            ? (
                                                search
                                                    ? styles.disBurger
                                                    : styles.burger
                                            )
                                            : styles.not_animBurger}
                                    onClick={MobMenu}
                                    style={
                                        {color: "white"}
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
                    </Suspense>
                </PageWrapper>
            </header>
        </div>
    )
}

export default Navbar
