import { ChangeEvent, FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../store/todoSlice';

const List: FC = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state: any) => state.todos.todos);
    const [todo, setTodo] = useState('');

    const handleAddTodo = () => {
        dispatch(addTodo(todo));
        setTodo('');
    };

    const handleDeleteTodo = (index: number) => {
        dispatch(deleteTodo(index));
    }

    return (
        <>
            <div>
                
            </div>
        </>
    );
}

export default List;