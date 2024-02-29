import { ChangeEvent, FC, useState } from 'react';
import Add from './add';

const List: FC = () => {
    // 할일 글 State
    const [todo, setTodo] = useState<string>('');

    // 투두 리스트 State
    const [todoList, setTodoList] = useState<string[]>([]);

    // 인풋창에 할일 입력 시 입력 내용을 State에 설정
    const onChangeTodo = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

    return (
        <>
            <Add/>
        </>
    );
}

export default List;