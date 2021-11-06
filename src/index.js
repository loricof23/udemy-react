import react from "react";
import reactDOM from "react-dom";
import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui component comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are You sure ?
                    
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Antonio" 
                    timeAgo="Today at 4:45 PM" 
                    content="Nice!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Bernardo" 
                    timeAgo="Today at 12:45 PM" 
                    content="Good!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Carlos" 
                    timeAgo="Today at 4:00 PM" 
                    content="Cool!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

reactDOM.render(<App/>, document.getElementById('react'));