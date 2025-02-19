import "./TopDashboard.scss";
import { top_dashboard_data } from "../../data";

export default function TopDashboard({ styling, toggle }) {
    const items = top_dashboard_data.map((each) => {
        return (
            <div
                style={styling.cardBackground}
                className={`item ${toggle ? "hoverDarkMode" : "hoverWhieMode"}`}
                key={each.id}
            >
                <div
                    style={{ background: each.topBorder_color }}
                    className="item_topBorder"
                ></div>
                <div className="social-card__header">
                    <img
                        src={each.platformURL}
                        alt="Facebook Icon"
                        className="social-card__icon"
                    />
                    <p
                        style={styling.secondaryText}
                        className="social-card__username"
                    >
                        {each.username}
                    </p>
                </div>
                <div className="social-card__followers">
                    <h1 style={styling.mainText} className="social-card__count">
                        {each.count}
                    </h1>
                    <p
                        style={styling.secondaryText}
                        className="social-card__label"
                    >
                        {each.metric}
                    </p>
                </div>
                <div className="social-card__today">
                    <img
                        src={each.changeIconUrl}
                        alt="Up/down Icon"
                        className="social-card__icon-up"
                    />
                    <p
                        style={
                            each.changeType === "up"
                                ? { color: "hsl(163, 72%, 41%)" }
                                : { color: "hsl(356, 69%, 56%)" }
                        }
                        className="social-card__today-text"
                    >
                        {`${each.change}Today`}
                    </p>
                </div>
            </div>
        );
    });

    return (
        <div className="dashboard-wrapper">
            <div className="dashboard-inner-wrapper">{items}</div>
        </div>
    );
}
