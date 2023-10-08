import React from "react";
import "./main.scss"
import { HeaderComponent } from "./components/Header";
import { Chatlist } from "./components/Chatlist";
import { Chat } from "./components/Chat";

function MainPage() {
    return (
        <div className="container">
            <HeaderComponent title="Chatting System" />
            <div className="container-row" style={{ border: "1px solid red" }}>
                <Chatlist users={[
                    {
                        id: "1",
                        name: "Vincent Batecan",
                        avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
                        status: "5 minute ago."
                    }
                ]} />
                <Chat chats={{ chatHistory: ["Hello"], currentChat: "Hello"}} user={{ id: "1", name: "Vincent Batecan", avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50", status: "5 minute ago." }} time={"5 minute ago."} isTyping={true} />
            </div>
        </div>
    );
}

export default MainPage;