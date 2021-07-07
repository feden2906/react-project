export default function Post({item}) {
    return (
        <div>
            <h3>Post {item.id}</h3>
            <p>{item.body}</p>
        </div>
    );
}
