import { IoIosArrowForward } from 'react-icons/io'
export default function FeedCard({update}) {

    update = update || {
        title: 'News Title',
        updatedAt: 'May 16, 2020'
    }
    return(
        <div className="newsCard my-4 shadow bg-white border-t-4 border-c1 ml-4 pl-1 text-left text-c1 font-f1">
            <h3 className='h-4 tracking-wide font-semibold'>{update.title}</h3>
            <p className='text-c3 text-xs mt-1 h-4 w-full mx-0'>{update.updatedAt}</p>
            <p className='mt-3 text-black text-left text-sm font-f1 leading-tight' >Bork shibe heckin angery woofer yapper the neighborhood pupper clouds porgo, snoot lotsa pats bork super chub very good spot.</p>
            <div className='flex justify-end w-full'>
                <button className='w-1/3 flex no-wrap text-right items-center mt-4'>Read More<IoIosArrowForward className='w-4 mx-auto' /></button>
            </div>
        </div>
    )
}
