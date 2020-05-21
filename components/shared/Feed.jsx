import FeedCard from './FeedCard'
export default function Feed({data, type}) { //type can be used to switch update/news
    const feedData = data || Array(20).fill({})
    const cards = feedData.map((data, i) => <FeedCard data={data} id={i}/>)
    const grid = `w-screen overflow-x-scroll grid grid-rows-2 grid-cols-${feedData.length/2} col-gap-0 no-scrollbar justify-between no-wrap`
    return(
        <div style={{gridTemplateColumns: `repeat(${feedData.length/2}, 350px)`}} className={grid}>
            {cards}
        </div>
    )
}
