export default function TwoByTwo() {
    const shortStyle = {
        list: 'text-center list-inside',
        pBold: 'text-center font-bold',
        pItalic: 'text-center italic',
        button: 'text-green-400 bg-white border border-white no-underline',
        strong: 'text-lg',
        twoByTwo: 'grid grid-cols-2 grid-rows-2 h-full',
        twoByOne: 'grid grid-cols-2 grid-rows-2',
        profile: 'flex flex-col justify-start items-center text-centered mb-12 w-full h-500px', //h48<height-stops>h64
        soloProfile: 'flex flex-col justify-start items-center text-centered mb-12 h-auto w-',
        profileImage: 'h-48 w-48 rounded-full m-8',
        profileLink: 'text-base mt-20',
        profileLink2: 'text-base',
        profileP:'text-xs w-40',
        italic: 'text-left text-xs'
    }

    return(
        <div className={shortStyle.twoByTwo}>
            <div className={shortStyle.profile}>
                <h3>Mary Mac Murray</h3>
                <i className={shortStyle.italic}>Technical Project Manager | Software Engineer | EdTech Organizer</i>
                <img src='https://media-exp1.licdn.com/dms/image/C4D03AQH_Vqb6B7PDfA/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=3-lI5VNcRSHydf_Cr66WZiUF3fiMS0gHunpKdk8zrdI' alt='Mary Mac Murray' className={shortStyle.profileImage}/>
                <p className={shortStyle.profileP}>As a formally trained teacher and technical project manager, I energize teams through playful and tactical experiences. Being a scuba rescue diver and tango dancer means I test for failure but love to improvise.</p>
                <a className={shortStyle.profileLink} href='https://www.maryxmac.com/' alt="Mary's portfolio">My Portfolio</a>
                <a className={shortStyle.profileLink2} href='https://www.linkedin.com/in/maryxmac/' alt="Mary Mac Murray's LinkedIn">My LinkedIn</a>
            </div>
            <div className={shortStyle.profile}>
                <h3>Miykaelah (Rajmani) Sinclair</h3>
                <i className={shortStyle.italic}>UX Designer | Product Designer | Event Designer</i>
                <img src='https://media-exp1.licdn.com/dms/image/C5603AQGV5ISg-4gEJg/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=_15ckCFlxKEeIomYgRyYPpvgNL-D0t4fR_-U6IDbqss' className={shortStyle.profileImage} alt='Miykaelah Sinclair' />
                <p className={shortStyle.profileP}>AI am a UX designer with over 10 years of experience using human centered design practices to produce, direct, and market memorable and meaningful events for audiences and participants. I bring this same
                approach to my UX Design practice where I lead with listening, consider all the touch points and engagements of users, and deliver a delightful, intuitive, and memorable product.</p>
                <a className={shortStyle.profileLink} href='https://www.miykaelahsinclair.com' alt="Miykaelah's portfolio">My Portfolio</a>
                <a className={shortStyle.profileLink2} href='https://www.linkedin.com/in/miykaelah-sinclair/' alt="Miykaelah's LinkedIn">My LinkedIn</a>
            </div>
            <div className={shortStyle.profile}>
                <h3>Brandon Gottshall</h3>
                <i className={shortStyle.italic}>Software Engineer | Marine Corps Veteran</i>
                <img src='https://media-exp1.licdn.com/dms/image/C4E03AQErDiTHdpTt8g/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=UrTPfKAo--f-bqJ3XLdkNOf_V9ixRis1i1veE0h_Ojw' className={shortStyle.profileImage} alt='Brandon Gottshall' />
                <p className={shortStyle.profileP}>I am a highly adaptable, motivated Software Engineer. I’ve built a skill set through my time in the Marine Corps that allows me to take root in uncomfortable and difficult situations and extract success where others have accepted failure. I’m extremely passionate about the tech industry, and I’m always ready to embrace failure, growth, and to demand success.</p>
                <a className={shortStyle.profileLink} href='https://www.gottshall.dev' alt="Brandon's portfolio">My Portfolio</a>
                <a className={shortStyle.profileLink2} href='https://www.linkedin.com/in/brandon-gottshall/' alt="Brandon's LinkedIn">My LinkedIn</a>
            </div>
            <div className={shortStyle.profile}>
                <h3>Heather Sterman</h3>
                <i className={shortStyle.italic}>UX Researcher | Film & TV Librarian | Empath</i>
                <img src='https://media-exp1.licdn.com/dms/image/C4D03AQHjEB9PwL06uA/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=NtXNb-VOFRl5uC_VME_VKOvEYMMapzZWDc6LrzO_-lo' className={shortStyle.profileImage} alt='Heather Sterman' />
                <p className={shortStyle.profileP}>UX Researcher who’s a constant and curious learner.
                Empathic Listener with 13 years of experience in Librarianship. The library is the ultimate example of user experience: The librarian or archivist is the UX Professional, the library itself is the Information Architecture, and the library patrons are the users of the product. </p>
                <a className={shortStyle.profileLink} href='https://www.heather-sterman.com/' alt="Heather's portfolio">My Portfolio</a>
                <a className={shortStyle.profileLink2} href='https://www.linkedin.com/in/heathersterman/' alt="Heather's LinkedIn">My LinkedIn</a>
            </div>
    </div>
)}
