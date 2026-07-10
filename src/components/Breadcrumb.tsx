import React from "react";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./Styles.css";

const Breadcrumb = () => {
    const location = useLocation();
    const pathNames = location.pathname.split("/").filter((x) => x);

    return (
        <nav className="breadcrumb">
            <Link to="/" className="breadcrumb-link">
                <FaHome className="breadcrumb-icon" />
                <span>Home</span>
            </Link>
            {pathNames.map((name, index) => {
                const routeTo = `/${pathNames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathNames.length - 1;
                return (
                    <div key={index} className="breadcrumb-item">
                        <FaChevronRight className="breadcrumb-separator" />
                        {isLast ? (
                            <span className="breadcrumb-current">{formatName(name)}</span>
                        ) : (
                            <Link to={routeTo} className="breadcrumb-link">
                                {formatName(name)}
                            </Link>
                        )}
                    </div>
                );
            })}
        </nav>
    );
};

const formatName = (name) => name.replace(/-/g, " ").toUpperCase();

export default Breadcrumb;
