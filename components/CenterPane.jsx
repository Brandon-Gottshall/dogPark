import SearchBox from './SearchBox'
import Dash from './Dash'
import Results from './Results'
import MiniProfile from './MiniProfile'
import { useState, useEffect } from 'react'
import { UserContext } from '../contexts/userContext'
import { debounce } from 'lodash'
export default function CenterPane() {
    const [search, setSearch] = useState('')
    useEffect(() => {
        console.log(search)
        // debounce( () => console.log('triggered'), 1000)
    }, [search])
    const view = (search === '') ? <Dash search={search}/> : <Results search={search}/>
    return(
        <div className="flex flex-wrap flex-column overflow-y-scroll overflow-x-hidden content-start text-left h-full">
            <div className='grid grid-cols-2 grid-rows-1 h-36 w-full' >
                <SearchBox setSearch={setSearch} search={search}/>
                <MiniProfile />
            </div>
            {view}
        </div>
    )
}
