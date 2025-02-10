import "./TopDashboard.scss";
import { top_dashboard_data } from "../../data";

export default function TopDashboard({ toggle, setToggle }) {
    const items = top_dashboard_data.map((each) => {
        return (
            <div className="item" key={each.id}>
                <div className="social-card__header">
                    <img
                        src={each.platformURL}
                        alt="Facebook Icon"
                        className="social-card__icon"
                    />
                    <p className="social-card__username">{each.username}</p>
                </div>
                <div className="social-card__followers">
                    <h1 className="social-card__count">{each.count}</h1>
                    <p className="social-card__label">{each.metric}</p>
                </div>
                <div className="social-card__today">
                    <img
                        src={each.changeIconUrl}
                        alt="Up/down Icon"
                        className="social-card__icon-up"
                    />
                    <p className="social-card__today-text">
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
