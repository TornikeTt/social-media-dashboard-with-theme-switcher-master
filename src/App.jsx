import "./App.scss";
import { useState } from "react";

import Header from "./components/Header/Header";
import TopDashboard from "./components/TopDashboard/TopDashboard";

function App() {
    const [toggle, setToggle] = useState(true);

    const styling = {
        main: {
            backgroundColor: toggle ? "hsl(230, 17%, 14%)" : "hsl(0, 0%, 100%)",
        },

        headerBackground: {
            backgroundColor: toggle
                ? "hsl(232, 19%, 15%)"
                : "hsl(225, 100%, 98%)",
        },

        headerThemeButton: {
            background: toggle
                ? "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))"
                : "hsl(230, 22%, 74%)",
        },

        headerThemeCircle: {
            backgroundColor: toggle
                ? "hsl(230, 17%, 14%)"
                : "hsl(227, 47%, 96%)",

            left: toggle ? "25%" : "70%",
        },

        cardBackground: {
            backgroundColor: toggle
                ? "hsl(228, 28%, 20%)"
                : "hsl(227, 47%, 96%)",
        },

        mainText: {
            color: toggle ? "hsl(0, 0%, 100%)" : "hsl(230, 17%, 14%)",
        },

        secondaryText: {
            color: toggle ? "hsl(228, 34%, 66%)" : "hsl(228, 12%, 44%)",
        },
    };

    return (
        <main style={styling.main}>
            <Header styling={styling} setToggle={setToggle} />
            <TopDashboard styling={styling} toggle={toggle} />
        </main>
    );
}

export default App;
