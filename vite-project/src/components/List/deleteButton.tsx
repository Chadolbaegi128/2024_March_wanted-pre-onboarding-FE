import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../store/todoSlice.ts';

type Props = {
    index: number;
}

const DeleteButton: FC<Props> = (props) => {
    const { index } = props;
    const dispatch = useDispatch();
    
    const handleDeleteTodo = (index: number) => {
        dispatch(deleteTodo(index));
    }

    return (
        <div>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
        </div>
    )
};

export default DeleteButton;