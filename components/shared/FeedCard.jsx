export default function FeedCard({update}) {
    update = update || {
        title: 'News Title',
        updatedAt: 'May 16, 2020'
    }
    return(
        <div className="newsCard shadow bg-white border-t-4 border-c1 ml-4 pl-1 text-left text-c1 font-f1">
            <h3 className='h-4 tracking-wide font-semibold'>{update.title}</h3>
            <p className='h-4 w-full mx-0'>{update.updatedAt}</p>
            <p className='mt-3 text-black text-left text-sm font-f1 leading-tight' >Bork shibe heckin angery woofer yapper the neighborhood pupper clouds porgo, snoot lotsa pats bork super chub very good spot.</p>
            <a className='text-right' href="">Read More</a>
        </div>
    )
}
