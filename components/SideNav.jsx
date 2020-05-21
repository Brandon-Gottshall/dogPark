import Link from 'next/link'
export default function SideNav () {
    const style = {
        buttonContainer: 'column-widthself-start flex border border-c1 flex-column flex-wrap items-start justify-center',
        navButton: 'w-9/12 ml-1/4 mr-1/4 h-auto leading-tight my-0 font-thin tracking-wide text-2xl text-white font-f1 text-left transform hover:translate-x-5 transition-all duration-200 ease-in-out'
    }
    return (
        <div className="flex flex-wrap flex-column content-start text-center h-full bg-c1">
            <h1 className="text-white font-f1 text-5xl w-full my-12 h-20">dogPark</h1>
                <div className={style.buttonContainer}>
                    <button className={style.navButton}>My Team</button>
                    <button className={style.navButton}>Latest News</button>
                    <button className={style.navButton}>Project Teams</button>
                    <button className={style.navButton}>Directory</button>
                </div>
        </div>
    )
}
