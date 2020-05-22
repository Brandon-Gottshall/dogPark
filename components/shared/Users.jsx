import StatusDot from  '../shared/StatusDot'
import { UserContext } from '../../contexts/userContext'
import { useContext } from 'react'
export default function Users({userData}) {
    const users = userData ||
        Array(20).fill({
            first_name: 'First',
            last_name: 'Last',
            role: 'Project Lead',
            avatar: `http://place-puppy.com/200x300`,
            city: 'New York'
        }
    )
    const { userID, storeUserID } = useContext(UserContext)
    const CardGenerator = () => {

        const Card = ({user, id}) => {
            return (
                <div onClick={() => storeUserID(1)} className='w-40 pl-4 mt-4'>
                    <img src={user.avatar} className='w-32 h-32 rounded-full shadow border-2 border-c1 border-opacity-75'/>
                    <div className="text-left w-24 mx-auto leading-tight">
                        <h3 className="text-lg font-f1">{user.first_name+' '+user.last_name}</h3>
                        <p className='text-xs font-f1 font-thin'>{user.title}</p>
                        <p className='text-xs font-f1 font-thin'>{user.city}</p>
                        <div className='font-thin text-xs font-c1 flex items-center'>
                            <p>Online</p>
                            <StatusDot color='green-400'/>
                        </div>
                    </div>
                </div>
            )
        }
        const cards = users.map((user, i) => (<Card user={user} key={i} id={i} />))
        return cards
    }
    const grid = `w-full overflow-x-scroll grid grid-cols-${users.length} col-gap-0 no-scrollbar grid-flow-col no-wrap`
    return(
        <div className={grid}>
            <CardGenerator />
        </div>
    )
}
