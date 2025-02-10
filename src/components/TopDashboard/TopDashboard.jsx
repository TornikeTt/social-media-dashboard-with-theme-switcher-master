import "./TopDashboard.scss";

export default function TopDashboard({ toggle, setToggle }) {
    return (
        <div className="dashboard-wrapper">
            <div className="dashboard-inner-wrapper">
                <div className="item">
                    <div className="social-card__header">
                        <img
                            src="/images/icon-facebook.svg"
                            alt="Facebook Icon"
                            className="social-card__icon"
                        />
                        <p className="social-card__username">@nathanf</p>
                    </div>
                    <div className="social-card__followers">
                        <h1 className="social-card__count">1987</h1>
                        <p className="social-card__label">followers</p>
                    </div>
                    <div className="social-card__today">
                        <img
                            src="/images/icon-up.svg"
                            alt="Up Icon"
                            className="social-card__icon-up"
                        />
                        <p className="social-card__today-text">12 Today</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
