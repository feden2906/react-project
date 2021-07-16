export default function UserInfo ({item}){
    return (
        <div className='info'>
            <h2>{item.id}-{item.name}</h2>
            <h3>{item.username}</h3>
            <p>{item.email}, {item.phone}
                <br/>
                {item.website}</p>
        </div>
    );
}
