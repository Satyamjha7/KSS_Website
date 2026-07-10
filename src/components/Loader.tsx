import "./Styles.css";

const logo = "/images/logo-png.png";

export default function KSSLoader() {
    return (
        <div className="kss-loader" role="status" aria-live="polite" aria-label="Loading">
            <div className="kss-loader__logo-wrap" aria-hidden="true">
                <img src={logo} alt="" className="kss-loader__logo" />
            </div>
            <div className="kss-loader__dots" aria-hidden="true">
                <span />
                <span />
                <span />
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    );
}
