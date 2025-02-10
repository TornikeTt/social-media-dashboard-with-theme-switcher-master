import "./App.scss";
import { useState } from "react";

import Header from "./components/Header/Header";
import TopDashboard from "./components/TopDashboard/TopDashboard";

function App() {
    const [toggle, setToggle] = useState(true);
    const mainStyle = {
        main: {
            backgroundColor: toggle ? "hsl(230, 17%, 14%)" : "hsl(0, 0%, 100%)",
        },
    };

    return (
        <main style={mainStyle.main}>
            <Header toggle={toggle} setToggle={setToggle} />
            <TopDashboard toggle={toggle} setToggle={setToggle} />
        </main>
    );
}

export default App;
