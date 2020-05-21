export default function StatusDot({color}) {
    let fillHelper = `fill-current text-${color} stroke-0.1`
    return(
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="10" height="10" className='w-10px h-auto ml-1'>
            <circle r="4" cx="4" cy="4" className={fillHelper}/>
        </svg>

    )
}
