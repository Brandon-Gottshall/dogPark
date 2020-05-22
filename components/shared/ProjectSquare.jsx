import {
    IoIosBarcode,
    IoIosCash,
    IoIosFlask,
    IoIosOptions,
    IoIosPaw,
    IoIosThunderstorm,
    IoIosToday,
    IoIosTrendingUp,
    IoLogoIonic
} from 'react-icons/io'
import { useState } from 'react'
export default function ProjectSquare({data, id}) {
    const iconStyle = 'w-40 h-40 text-white mt-2'
    const icons = [
        <IoIosBarcode      className={iconStyle}/>,
        <IoIosCash         className={iconStyle}/>,
        <IoIosFlask        className={iconStyle}/>,
        <IoIosOptions      className={iconStyle}/>,
        <IoIosPaw          className={iconStyle}/>,
        <IoIosThunderstorm className={iconStyle}/>,
        <IoIosToday        className={iconStyle}/>,
        <IoIosTrendingUp   className={iconStyle}/>,
        <IoLogoIonic       className={iconStyle}/>
    ]
    const color = [ 2, 6, 4 ]
    let square = `projectSquare flex flex-col items-center border-c${color[id%3]} bg-c${color[id%3]}`
    return (
        <div key={id} className={square}>
            <h3 className="w-full mt-4 font-f1 text-center text-white">{data.name}</h3>
            {icons[id%8]}
            <p className="font-f1 font-thin text-sm tracking-tight self-end mr-4 mt-4 text-white text-left">MEET THE TEAM</p>
        </div>
    )
}
