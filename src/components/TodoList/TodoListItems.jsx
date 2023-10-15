import './TodoListItems.css';

export default function TodoListItems(props) {
    return (
        <div className='todoList'>
            <div className='todoDetail'>
                <span className='heading'>{props.title}</span>
                <span className='para'>{props.desc}</span>
            </div>
            <div className='button'>
                <button id='btn-delete' onClick={() => {
                    props.selectItem(props.id)
                }}>Delete</button>
            </div>
        </div>
    );
}