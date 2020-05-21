import SearchBox from './SearchBox'
import Dash from './Dash'
import Results from './Results'
import MiniProfile from './MiniProfile'
import { useState, useEffect } from 'react'
import { debounce } from 'lodash'
export default function CenterPane() {
    const [search, setSearch] = useState('')
    useEffect(() => {
        console.log(search)
        // debounce( () => console.log('triggered'), 1000)
    }, [search])
    const view = (search === '') ? <Dash search={search}/> : <Results search={search}/>
    return(
        <div className="flex flex-wrap flex-column content-start text-left h-full">
            <div className='flex justify-between h-36 w-10/12 border border-black' >
                <SearchBox setSearch={setSearch} search={search}/>
                <MiniProfile/>
            </div>
            {view}
        </div>
    )
}
