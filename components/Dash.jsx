import Users from './shared/Users'
import Feed from './shared/Feed'
export default function Dash() {
    return(
        <div className="w-full mt-6 h-full text-center text-black font-f1">
            <h3 className="font-f1 text-left ml-4 tracking-wide">My Team</h3>
            <Users />

            <h3 className="font-f1 text-left mt-6 ml-4 tracking-wide">Latest News</h3>
            <Feed />

        </div>
    )
}
