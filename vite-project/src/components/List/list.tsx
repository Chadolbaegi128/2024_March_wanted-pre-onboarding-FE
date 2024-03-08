import {FC, ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../../store/todoSlice.ts';
import { Input } from './input';

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

    const onChangeTodo = (e: ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    }

    return (
        <>
            <div>
                <Input type="text" todo={todo} onChangeTodo={onChangeTodo}/>
                <ul>
                    {todos.map((todo: any, index: number) => (
                        <li key={index}>
                            {todo}{' '}
                            
                    ))}
                </ul>
            </div>
        </>
    );
}

export default List;