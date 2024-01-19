import styles from './Header.module.css'
import Image from 'next/image';
import { useEffect, useRef, useState } from "react"
import { useOnClickOutside } from "@/components/click-outside"
import Link from 'next/link';

export interface ISearch{
  search: boolean;
  focus: string
}

const Search = ({search, focus}: ISearch) => {

  console.log(search)
  const inputRef = useRef<HTMLInputElement>(null)

  const time = () => {
    setTimeout(() => getFocus(), 740)
    console.log('time')
  }

  const getFocus = () =>{
    if(search == true){
      console.log('true')
      if(inputRef.current){
        inputRef.current.focus();
        console.log('focus') 
      }
    }
    
  }
  useEffect( 
    () => time()
   
    ,[search])

  return(
    <>
      <input ref={inputRef} type="text" />
    </>
  )
}

export default Search