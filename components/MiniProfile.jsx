import StatusDot from './shared/StatusDot'
export default function MiniProfile({userData}) {
    const user = userData || {
        first_name: 'Sam',
        avatar: '/images/generated/profile-project-manager.png',
        city: 'New York'
    }
    return(
        <div className="hidden sm:flex justify-end self-center h-12 w-full">
            <img className='w-12 h-12 mr-2 shadow border border-c1 border-opacity-50 rounded-full object-cover' src={user.avatar} alt={`${user.first_name} profile avatar`}/>
            <div className="grid grid-cols-1 grid-rows-3 h-10 font-f1 text-sm">
                <p className='text-c1 w-32 no-wrap'>Welcome, {user.first_name}!</p>
                <p className='font-thin font-c1'>{user.city}</p>
                <div className='font-thin font-c1 mt-2 flex items-center'>
                    <p className='font-thin'>Online</p>
                    <StatusDot color='green-400'/>
                </div>
            </div>
        </div>
    )
}
