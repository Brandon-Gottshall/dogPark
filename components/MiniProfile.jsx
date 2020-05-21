import StatusDot from './shared/StatusDot'
export default function MiniProfile({userData}) {
    const user = userData || {
        first_name: 'Sam',
        avatar: 'http://place-puppy.com/201x300',
        city: 'New York'
    }
    return(
        <div className="flex self-center w-1/3 h-12">
            <img className='w-12 h-12 rounded-full' src={user.avatar}/>
            <div className="grid grid-cols-1 grid-rows-3 h-10 ml-3 font-f1 text-sm w-full">
                <p className='text-c1'>Welcome, {user.first_name}!</p>
                <p className='font-thin font-c1'>{user.city}</p>
                <div className='font-thin font-c1 mt-2 flex items-center'>
                    <p className='font-thin'>Online</p>
                    <StatusDot color='green-400'/>
                </div>
            </div>
        </div>
    )
}
