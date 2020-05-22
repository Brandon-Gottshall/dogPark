import Users from './shared/Users'
import Feed from './shared/Feed'
import { getMyTeamAndProjects} from '../public/helper/api-helper'
import { useState, useEffect } from 'react'

export default function Dash() {
  
  const [userData, setUserData] = useState([])
  
  useEffect(() => {
    const data = getMyTeamAndProjects();
    data.then((value) =>setUserData(value))
    }, [])

    return(
        <div className="w-full mt-6 h-full text-center text-black font-f1">
            <h3 className="font-f1 text-left ml-4 tracking-wide">My Team</h3>
            <Users userData={userData} />

            <h3 className="font-f1 text-left mt-6 ml-4 tracking-wide">Latest News</h3>
            <Feed />

        </div>
    )
}
