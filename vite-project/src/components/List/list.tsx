import { FC, useState } from 'react';
import Add from './add';

const List: FC = () => {
    // 할일 글 State
    const [todo, setTodo] = useState<string>('');

    // 투두 리스트 State
    const [todoList, setTodoList] = useState<string[]>([]);
    
    return (
        <>
            <Add/>
        </>
    );
}

export default List;