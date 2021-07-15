export default function UserInfo ({item}){
    return (
        <div>
            {item.id}-{item.name}
            <br/>
            {item.username}
            <br/>
            {item.email}, {item.phone}
            <br/>
            {item.website}
        </div>
    );
}
