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

  const getFocus = () =>{
    if(inputRef.current){
      inputRef.current.focus(); 
    }
  }
  useEffect(
    () => getFocus()
    ,[focus])

  return(
    <>
      <input ref={inputRef} type="text" />
    </>
  )
}

export default Search