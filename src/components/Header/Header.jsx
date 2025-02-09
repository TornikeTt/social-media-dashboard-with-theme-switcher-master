import "./Header.scss";

export default function Header({ toggle, setToggle }) {
    function toggle_hendler() {
        setToggle((prev) => !prev);
    }

    const headerStyle = {
        headerBackground: {
            backgroundColor: toggle
                ? "hsl(232, 19%, 15%)"
                : "hsl(225, 100%, 98%)",
        },

        headerTitle: {
            color: toggle ? "hsl(0, 0%, 100%)" : "hsl(230, 17%, 14%)",
        },

        headerFollowers: {
            color: toggle ? "hsl(228, 34%, 66%)" : "hsl(228, 12%, 44%)",
        },

        headerThemeLabel: {
            color: toggle ? "hsl(228, 34%, 66%)" : "hsl(228, 12%, 44%)",
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
    };

    return (
        <header>
            <div
                style={headerStyle.headerBackground}
                className="header__background"
            ></div>

            <div className="header__wrapper">
                <div className="header__content">
                    <h1
                        className="header__title"
                        style={headerStyle.headerTitle}
                    >
                        Social Media Dashboard
                    </h1>
                    <p
                        style={headerStyle.headerFollowers}
                        className="header__followers"
                    >
                        Total Followers: 23,004
                    </p>
                </div>

                <div className="header__theme-toggle">
                    <label
                        htmlFor="theme-toggle"
                        className="header__theme-label"
                        style={headerStyle.headerThemeLabel}
                    >
                        Dark Mode
                    </label>
                    <button
                        onClick={toggle_hendler}
                        style={headerStyle.headerThemeButton}
                        className="header__theme-button"
                        id="theme-toggle"
                    >
                        <span
                            style={headerStyle.headerThemeCircle}
                            className="header__theme-circle"
                        ></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
