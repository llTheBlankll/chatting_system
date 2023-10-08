import React from "react";
import "./chatlist.scss";
import { ChatlistProps } from "../types";

export const Chatlist = (props: ChatlistProps) => {
    return (
        <div className="chatlist">
            <div className="user">
                <div className="user-avatar">
                    <img src={props.users[0].avatar} alt={props.users[0].name} className="user-avatar" />
                </div>
                <div className="user-details">
                    <div className="user-name">
                        { props.users[0].name }
                    </div>
                    <div className="user-last-chat">
                        Hello. · Fri
                    </div>
                </div>
            </div>
            <div className="user">
                <div className="user-avatar">
                    <img src={props.users[0].avatar} alt={props.users[0].name} className="user-avatar" />
                </div>
                <div className="user-details">
                    <div className="user-name">
                        Vince Angelo Batecan
                    </div>
                    <div className="user-last-chat">
                        Hello. · Fri
                    </div>
                </div>
            </div>
        </div>
    );
}