import {useEffect, useState} from "react";
import Comment from "../comment/Comment"


export default function Comments(props) {
    let [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(commentsfromServer => {
                setComments(commentsfromServer);
            });
    }, []);
    return (
        <div>
            {comments.map(comments=> <Comment item={comments}/>)}
        </div>
    );
}
