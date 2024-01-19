'use client'

import styles from './Header.module.css'
import { useEffect, useRef, useState } from "react"
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

export interface ISearch{
  focus: string
}

const Search = ({focus}: ISearch) => {


  const  page = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const inputRef = useRef<HTMLInputElement>(null)

  const getFocus = () =>{
    if(inputRef.current){
      inputRef.current.focus(); 
    }
  }
  useEffect(
    () => getFocus()
    ,[focus])

  const  handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);
   
    const params = new URLSearchParams(page);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return(
    <>
      <input ref={inputRef}
        placeholder='Введите группу или фамилию'
         onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={page.get('query')?.toString()}/>
      <div>

      </div>
    </>
  )
}

export default Search