import "./Header.scss";

export default function Header({ styling, setToggle }) {
    function toggle_hendler() {
        setToggle((prev) => !prev);
    }

    return (
        <header>
            <div
                style={styling.headerBackground}
                className="header__background"
            ></div>

            <div className="header__wrapper">
                <div className="header__content">
                    <h1 className="header__title" style={styling.mainText}>
                        Social Media Dashboard
                    </h1>
                    <p
                        style={styling.secondaryText}
                        className="header__followers"
                    >
                        Total Followers: 23,004
                    </p>
                </div>

                <div className="header__theme-toggle">
                    <label
                        htmlFor="theme-toggle"
                        className="header__theme-label"
                        style={styling.secondaryText}
                    >
                        Dark Mode
                    </label>
                    <button
                        onClick={toggle_hendler}
                        style={styling.headerThemeButton}
                        className="header__theme-button"
                        id="theme-toggle"
                    >
                        <span
                            style={styling.headerThemeCircle}
                            className="header__theme-circle"
                        ></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
