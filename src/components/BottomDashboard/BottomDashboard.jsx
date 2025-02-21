import "./BottomDashboard.scss";
import { bottom_dashboard_data } from "../../data";

function BottomDashboard({ styling, toggle }) {
    const items = bottom_dashboard_data.map((each) => {
        return (
            <div
                style={styling.cardBackground}
                className={`items ${
                    toggle ? "hoverDarkMode" : "hoverWhieMode"
                }`}
                key={each.id}
            >
                <div className="top-part">
                    <p style={styling.secondaryText}>{each.metric}</p>
                    <img src={each.platformURL} alt={each.platformAlt} />
                </div>
                <div className="bottom-part">
                    <h1 style={styling.mainText}>{each.count}</h1>
                    <div>
                        <img src={each.changeIconUrl} alt="down or up icon" />
                        <p
                            style={
                                each.changeType === "up"
                                    ? { color: "hsl(163, 72%, 41%)" }
                                    : { color: "hsl(356, 69%, 56%)" }
                            }
                        >
                            {`${each.change}%`}
                        </p>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="bottom-dashboard-wrapper">
            <div className="bottom-dashboard-inner-wrapper">
                <h1 style={styling.mainText} className="overview-title">
                    Overview - Today
                </h1>
                <div className="items-container">{items}</div>
            </div>
        </div>
    );
}

export default BottomDashboard;
