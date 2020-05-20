import '../styles/tailwind.css'
import SideNav from '../components/SideNav'
import CenterPane from '../components/CenterPane'
export default () => (
  <div className="grid grid-cols-home grid-rows-1 h-screen">
    <SideNav />
    <CenterPane />
    <div className='border border-c1'></div>
  </div>
)
