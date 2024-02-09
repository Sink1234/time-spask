'use client'

import {ChangeEvent, useEffect, useRef} from "react"
import {useSearchParams, usePathname, useRouter} from 'next/navigation'
import {useDebouncedCallback} from 'use-debounce'

export interface ISearch {
    focus: string
}

const Search = ({focus}: ISearch) => {

    const page = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [focus])

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(page);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    const changeSearch = (e:ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value);

    return (
        <div>
            <input ref={inputRef}
                   placeholder='Введите группу или фамилию'
                   onChange={changeSearch}
                   defaultValue={page.get('query')?.toString()}/>
            <div>

            </div>
        </div>
    )
}

export default Search