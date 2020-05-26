import { useContext } from 'react'
import { UserContext } from '../contexts/userContext'
import '../styles/tailwind.css'
import SideNav from '../components/SideNav'
import CenterPane from '../components/CenterPane'
import Profile from '../components/Profile'
export default () => {
    const { userID, storeUserID } = useContext(UserContext)
    const gridType = userID  ? 'profile sm:grid-cols-profile' : 'mobileHome sm:grid-cols-home'
    const grid = `grid grid-cols-${gridType} grid-rows-1 h-screen overflow-y-hidden`
    return(
        <div className={grid}>
            <SideNav />
            <CenterPane />
            {userID != false ? <Profile /> : null}
        </div>
    )
}
