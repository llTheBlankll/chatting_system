import React from "react";
import "./chat.scss";
import { ChatProps } from "../types";

export const Chat = (properties: ChatProps) => {
    return (
        <div className="chat-container">
            <div className="person-messages">
                <div className="message-container">
                    <div className="user-avatar">
                        <img src={properties.user.avatar} alt={properties.user.name} className="user-avatar" />
                    </div>
                    <div className="message">
                         Laboris sint amet laborum commodo ipsum tempor excepteur laboris nostrud id consectetur Lorem. Tempor adipisicing ut anim irure aute minim nisi incididunt veniam voluptate exercitation consequat. Quis fugiat enim culpa sit do magna cillum. Anim pariatur veniam fugiat duis esse ad nostrud. Aute duis commodo fugiat pariatur. Labore Lorem deserunt cillum ea ipsum irure. Reprehenderit occaecat quis anim nisi voluptate duis ex id ad sint dolor sint nisi ea.

Eu laborum mollit minim ad adipisicing qui et do nostrud. Ea dolore incididunt occaecat magna Lorem eiusmod elit exercitation cupidatat. Ullamco enim in cupidatat excepteur ea cillum magna exercitation anim exercitation sint esse.

Lorem cillum incididunt veniam sint aute ipsum dolor anim nulla nulla. Reprehenderit ad qui cillum tempor consequat dolore. Fugiat laboris enim pariatur aliqua incididunt reprehenderit aute in. Culpa aute dolor qui ea. Ea veniam anim quis aliquip. Reprehenderit sit proident magna laboris exercitation pariatur. Lorem amet eu occaecat sunt occaecat enim id ea voluptate proident incididunt elit.

Ex ullamco sunt eu incididunt sunt tempor pariatur qui pariatur. Esse eiusmod do proident anim ea voluptate labore amet. Irure cillum velit amet irure laborum do nostrud adipisicing ullamco. Duis commodo labore consectetur consequat reprehenderit nisi. Consequat adipisicing laborum enim culpa. Ad nisi fugiat sit culpa sit excepteur ad commodo mollit culpa id fugiat et incididunt.

Eu excepteur adipisicing reprehenderit laboris magna velit incididunt. Commodo Lorem anim elit pariatur amet. Et incididunt duis non proident ullamco cupidatat duis. Sunt fugiat voluptate minim cupidatat cupidatat. Aliquip ut reprehenderit voluptate ipsum magna voluptate deserunt cupidatat.

Reprehenderit pariatur culpa commodo fugiat laborum labore culpa veniam quis cillum est elit. Incididunt tempor reprehenderit et cupidatat consequat ullamco velit in ea ea amet. Nostrud sit ipsum labore deserunt ut culpa officia id. Esse id id nisi deserunt minim cillum sunt fugiat aliqua aliqua labore consectetur. Duis Lorem reprehenderit aute voluptate dolore. Cupidatat et ad reprehenderit non aliqua excepteur eu nostrud eu dolor ex. Sit nisi officia culpa cillum commodo eu.

Lorem nulla consequat id tempor quis sint. Enim enim elit esse veniam. Enim irure ut laboris ipsum. Ut deserunt do irure id. Magna pariatur incididunt duis commodo nisi consequat. Ea id in incididunt consequat magna.

Lorem nostrud dolore duis minim eu consequat quis consequat ea non dolore laboris ad reprehenderit. Lorem laborum et magna excepteur ullamco consequat sit ex duis enim sit est. Esse non commodo magna anim nulla nulla fugiat.
                    </div>
                </div>
                <div className="message-container">
                    <div className="user-avatar">
                        <img src={properties.user.avatar} alt={properties.user.name} className="user-avatar" />
                    </div>
                    <div className="message">
                         Laboris sint amet laborum commodo ipsum tempor excepteur laboris nostrud id consectetur Lorem. Tempor adipisicing ut anim irure aute minim nisi incididunt veniam voluptate exercitation consequat. Quis fugiat enim culpa sit do magna cillum. Anim pariatur veniam fugiat duis esse ad nostrud. Aute duis commodo fugiat pariatur. Labore Lorem deserunt cillum ea ipsum irure. Reprehenderit occaecat quis anim nisi voluptate duis ex id ad sint dolor sint nisi ea.

Eu laborum mollit minim ad adipisicing qui et do nostrud. Ea dolore incididunt occaecat magna Lorem eiusmod elit exercitation cupidatat. Ullamco enim in cupidatat excepteur ea cillum magna exercitation anim exercitation sint esse.

Lorem cillum incididunt veniam sint aute ipsum dolor anim nulla nulla. Reprehenderit ad qui cillum tempor consequat dolore. Fugiat laboris enim pariatur aliqua incididunt reprehenderit aute in. Culpa aute dolor qui ea. Ea veniam anim quis aliquip. Reprehenderit sit proident magna laboris exercitation pariatur. Lorem amet eu occaecat sunt occaecat enim id ea voluptate proident incididunt elit.

Ex ullamco sunt eu incididunt sunt tempor pariatur qui pariatur. Esse eiusmod do proident anim ea voluptate labore amet. Irure cillum velit amet irure laborum do nostrud adipisicing ullamco. Duis commodo labore consectetur consequat reprehenderit nisi. Consequat adipisicing laborum enim culpa. Ad nisi fugiat sit culpa sit excepteur ad commodo mollit culpa id fugiat et incididunt.

Eu excepteur adipisicing reprehenderit laboris magna velit incididunt. Commodo Lorem anim elit pariatur amet. Et incididunt duis non proident ullamco cupidatat duis. Sunt fugiat voluptate minim cupidatat cupidatat. Aliquip ut reprehenderit voluptate ipsum magna voluptate deserunt cupidatat.

Reprehenderit pariatur culpa commodo fugiat laborum labore culpa veniam quis cillum est elit. Incididunt tempor reprehenderit et cupidatat consequat ullamco velit in ea ea amet. Nostrud sit ipsum labore deserunt ut culpa officia id. Esse id id nisi deserunt minim cillum sunt fugiat aliqua aliqua labore consectetur. Duis Lorem reprehenderit aute voluptate dolore. Cupidatat et ad reprehenderit non aliqua excepteur eu nostrud eu dolor ex. Sit nisi officia culpa cillum commodo eu.

Lorem nulla consequat id tempor quis sint. Enim enim elit esse veniam. Enim irure ut laboris ipsum. Ut deserunt do irure id. Magna pariatur incididunt duis commodo nisi consequat. Ea id in incididunt consequat magna.

Lorem nostrud dolore duis minim eu consequat quis consequat ea non dolore laboris ad reprehenderit. Lorem laborum et magna excepteur ullamco consequat sit ex duis enim sit est. Esse non commodo magna anim nulla nulla fugiat.
                    </div>
                </div>
            </div>
            <div className="message-input-container">
                <div className="message-input">
                    <input type="text" placeholder="Enter message..." />
                </div>
                <div className="message-send">
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
}