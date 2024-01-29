"use client"

import { useRef, useState, Suspense, useEffect } from "react"
import Image from "next/image"
import font from 'next/font/local'
import PageWrapper from "@/components/PageWrapper"
import Search from "@/components/ui/Search/Search"
import styles from './Header.module.css'
import classNames from "@/lib/classNames";
import Link from "next/link"

const myFont = font({ src: './PT Sans Pro Extra Condensed Light.otf' })

const Navbar = ({ searchParams, }: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false)

  const MobMenu = () => {
    setOpen(!open);
  };

  function setStatusSearch(value: boolean) {
    setSearch(value)
    // setOpen(value)
  }
  return (
    <div className={styles.sticky}>
      <header id="nav">
          <Suspense>
            <div className={styles.flex}>
              <div className={styles.left}>
                <Image quality={100}
                  src='/Icon.svg'
                  width={70} height={70}
                  alt="Логотип СПАСКа"
                  priority
                  className={
                    search
                      ? styles.disImg
                      : styles.image
                  } />
                <span className={styles.v_line} />
                <p className={myFont.className}>Расписание занятий</p>
              </div>

              <div className={styles.right}>
                <Search setStatus={setStatusSearch} />
                <button
                  className={
                    search
                      ? styles.disBurger
                      : styles.burger
                  }
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
          </Suspense>
      </header>
      
        <div className={open ? styles.mob_menu : styles.mob_menuClose}>
            <button className={styles.burger} onClick={MobMenu}>
              <span className={styles.nav}>
                <div
                  className={styles.open}
                  style={{
                    border: "1px solid white",
                    width: 50,
                    height: 0,
                    marginTop: 5,
                    transform: "rotateZ(45deg)",
                  }}
                />
                <div
                  style={{
                    border: "1px solid white",
                    width: 50,
                    height: 0,
                    marginTop: -1,
                    transform: "rotateZ(-45deg)",
                  }}
                />
              </span>
            </button>
            <div>
              <Link
                onClick={MobMenu}
                href="/"
              >
                Главная
              </Link>
              <Link
                onClick={MobMenu}
                href="/room"
              >
                Поиск по кабинетам
              </Link>
              <Link
                onClick={MobMenu}
                href="/room/onTeacher"
              >
                Кабинеты по преподавателям
              </Link>
              <Link
                onClick={MobMenu}
                href="/room/onGroup"
              >
                Кабинеты по группам
              </Link>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
