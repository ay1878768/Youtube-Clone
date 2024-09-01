// import Videocontainer from "./Videocontainer";
import Maincontainer from "./Maincontainer";
import Sidebar from "./Sidebar";
const Body = () => {
    return (
            <div className="flex mt-16">
                <div><Sidebar /></div>
                <div><Maincontainer/></div> 
            </div> 
    );
};
export default Body;
