import { Provider } from "react-redux";
import "./App.css";
import Navbar from "./Components/Navbar";
import Body from "../src/Components/Body";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Videocontainer from "./Components/Videocontainer";
import Watchvideo from "./Components/Watchvideo";
function App() {
    const appRoute = createBrowserRouter([
        {
            path: "/",
            element: <Body />,
            children: [
                {
                    path: "/",
                    element: <Videocontainer />,
                },
                {
                    path: "watch",
                    element: <Watchvideo />,
                },
            ],
        },
    ]);
    return (
        
            <Provider store={store}>
                <div className="w-[100%] h-[100%] flex flex-col">
                    <Navbar />
                    <RouterProvider router={appRoute}/>
                </div>
            </Provider>
    );
}

export default App;
