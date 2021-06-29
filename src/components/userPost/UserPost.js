export default function UserPost ({item}){
    return (
        <div className='post'>
            {item.userId}-{item.id}-{item.body}
        </div>
    );
}
