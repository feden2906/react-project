
export default function Post ({post, fnFather}){

    return (
        <div>
            {post.id} - {post.title} - <button onClick={()=> fnFather(post.body)}>
            Click me </button>
        </div>
    );
}
