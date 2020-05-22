import { UserContext } from '../contexts/userContext'
import { useContext } from 'react'
export default function Profile() {
    const { userID, storeUserID } = useContext(UserContext)
    return(
        <div className='w-full bg-c1'>
            <h2 className="text-white">{userID}</h2>
        </div>
    )
}
