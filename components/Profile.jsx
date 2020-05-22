import { IoIosCloseCircleOutline } from 'react-icons/io'
import StatusDot from  '../components/shared/StatusDot'
import { UserContext } from '../contexts/userContext'
import { useContext } from 'react'
export default function Profile() {
    const { userID, storeUserID } = useContext(UserContext)
    return(
        <div className='w-full bg-c1'>
            <div className="grid grid-cols-2 grid-rows-2 bg-c2">
                <h2 className="ml-4 mt-1 text-white">Abbie Roberts</h2>
                <div className='flex flex-row-reverse items-center w-full text-right'>
                     <IoIosCloseCircleOutline onClick={() => storeUserID(false)} className="w-6 h-6 mr-2 text-white"/>
                </div>
                <div className='h-3 ml-4 font-thin text-xs text-white flex items-center'>
                    <p>Online</p>
                    <StatusDot color='green-400'/>
                </div>
            </div>
            <div className='flex items-center justify-center bg-c2 h-40'>
                <img src='http://www.place-puppy.com/201x201' className='w-32 h-32 mb-6 rounded-full shadow border-2 border-c1 border-opacity-75'/>
            </div>
            <div className="h-full font-f1 flex flex-col items-center justify-start bg-c4">
                <h3 className="my-2 text-sm font-semibold tracking-narrow">Project Lead | Chicago (2:30 p.m. CST)</h3>
                <p className='ml-2 mt-2 text-black text-sm'><p className='inline text-c1 text-sm'>Top Skills: </p>CSM, Python, JavaScript, Ruby on Rails</p>
                <p className='-ml-20 pl-1 mt-2 text-black text-sm'><p className='inline text-c1 text-sm'>Projects I'm working on: </p>Intercom</p>
                <p className='ml-2 mt-2 text-black text-sm'><p className='inline text-c1 text-sm'>On the weekends you’ll find me: </p>Biking downtown, visiting the Art Institute of Chicago, or catching up on Netflix</p>
                <p className='ml-2 mt-2 text-black text-sm'><p className='inline text-c1 text-sm'>Why I love working at DataDog:</p> The warm and fun environment make me excited to come to work everyday.</p>
                <button className='mt-4 w-48 h-10 border-2 border-c2 rounded text-c2 hover:bg-c2 hover:text-white'>View my Office Hours</button>
            </div>
        </div>
    )
}
