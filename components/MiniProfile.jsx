export default function MiniProfile({userData}) {
    const StatusDot = ({color}) => {
        let fillHelper = `fill-current text-${color} stroke-0.1`
        return(
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="10" height="10" className='w-10px h-auto ml-1'>
                <circle r="4" cx="4" cy="4" className={fillHelper}/>
            </svg>

        )
    }
    const user = userData || {
        first_name: 'Sam',
        avatar: 'http://placekitten.com/200/300',
        city: 'New York'
    }
    return(
        <div className="flex justify-end mt-2 w-1/3 h-12">
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
