import React from "react";


const CommentDetail = (props) =>{
    return(
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.avatar}></img>
                </a>
                <div className="content">
                    <a href="/" className="autor">
                        {props.author}
                    </a>
                    <div className="data">
                        <span className="date">{props.timeAgo}</span>
                    </div>
                    <div className="text">
                        {props.content}
                    </div>
                </div>
            </div>
    );
};
export default CommentDetail;