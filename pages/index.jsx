import '../styles/tailwind.css'
import SideNav from '../components/SideNav'
import CenterPane from '../components/CenterPane'
export default () => (

    <div className="grid grid-cols-mobileHome sm:grid-cols-home grid-rows-1 h-screen overflow-y-hidden">
        <SideNav />
        <CenterPane />
    </div>
)
