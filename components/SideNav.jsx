import Link from 'next/link'
export default function SideNav () {
    const style = {
        buttonContainer: 'self-start flex border border-c1 flex-column flex-wrap items-start justify-center',
        navButton: 'w-9/12 ml-1/4 mr-1/4 h-auto leading-tight my-0 font-thin tracking-wide text-3xl text-white text-left'
    }
    return (
        <div className="flex flex-wrap flex-column content-start text-center w-full h-full bg-c1">
            <h1 className="text-white text-5xl w-full my-12 h-20">dogPark</h1>
                <div className={style.buttonContainer}>
                    <button className={style.navButton}>My Team</button>
                    <button className={style.navButton}>Latest News</button>
                    <button className={style.navButton}>Project Teams</button>
                    <button className={style.navButton}>Directory</button>
                </div>
        </div>
    )
}
