import { useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
export default function SearchBox({search, setSearch}) {
    const [tempSearch, setTempSearch] = useState()
    const handleChange = (e) => {
        setTempSearch(e.target.value)
    }
    const handleSubmit = () => {
        setSearch(tempSearch)
    }
    return(
        <div className='w-48 flex no-wrap h-8 mr-56 border border-black m-5'>
            <IoIosSearch className='w-8 my-auto'/>
            <input className='w-full h-full outline-none' type="text" name='search' placeholder='Search Everywhere'
            onChange={handleChange} />
        </div>
    )
}
