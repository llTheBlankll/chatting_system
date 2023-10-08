import React from "react";
import "./index.scss";

type HeaderProps = {
    title: string
}

export const HeaderComponent = (props: HeaderProps) => {
    return (
        <div className="header">
            <div className="header-title">
                <h1>{props.title}</h1>
            </div>
        </div>
    );
}