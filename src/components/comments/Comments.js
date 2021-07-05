export default function Comments({item}) {
    return (
        <div className='comments'>
            <h3>Post {item.postId} - comment {item.id}</h3>
            <p>{item.body}</p>
        </div>
    );
}
