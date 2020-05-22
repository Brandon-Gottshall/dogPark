import ProjectSquare from "./shared/ProjectSquare"
export default function ProjectGrid({data, type}) { //type can be used to switch update/news
    const projectsData = data || Array(20).fill({
        name: 'Project Name'
    })
    const squares = projectsData.map((data, i) => <ProjectSquare data={data} key={i} id={i}/>)
    const grid = `w-screen overflow-x-scroll grid grid-rows-2 grid-cols-${projectsData.length/2} col-gap-0 no-scrollbar justify-between no-wrap ml-2`
    return(
        <div style={{gridTemplateColumns: `repeat(${projectsData.length/2}, 250px)`}} className={grid}>
            {squares}
        </div>
    )
}
