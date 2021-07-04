export default function UserPost ({item}){
    return (
        <div>
           <h3>{item.title}</h3>
            <p>{item.body}</p>
        </div>
    );
}
