import '../../styles/tailwind.css'
import { useRouter } from 'next/router'
import SideNav from '../../components/SideNav'
import CenterPane from '../../components/CenterPane'
export default function Profile({ userID }) {
    Profile.getInitialProps = async ({ query }) => {
      return { userID: query.userID }
    }
    return(
        <p className='text-5xl text-center'>{userID}</p>
    )
}
{/* <div className="grid grid-cols-mobileHome sm:grid-cols-home grid-rows-1 h-screen overflow-y-hidden">
    <SideNav />
    <CenterPane showProfile='true' userId={userID} />
</div> */}
