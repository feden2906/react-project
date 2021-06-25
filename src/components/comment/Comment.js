export default function Comment (props){
let {item} = props;

return (
        <div>
            {item.id} - {item.name}
            <p>{item.body}</p>
        </div>
    );
}
