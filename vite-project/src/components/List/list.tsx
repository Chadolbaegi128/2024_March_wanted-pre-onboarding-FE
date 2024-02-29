import { ChangeEvent, FC, useState } from 'react';
import Delete from './delete';
import '../../style/List.css';

const List: FC = () => {
    // 할일 글 State
    const [todo, setTodo] = useState<string>('');

    // 투두 리스트 State
    const [todoLists, setTodoLists] = useState<string[]>([]);

    // 인풋창에 할일 입력 시 입력 내용을 State에 설정
    const onChangeTodo = (e: ChangeEvent<HTMLInputElement>) => setTodo(e.target.value);

    // [Add] 버튼 클릭 시
    const onClickAdd = () => {
        // State 변경을 정상적으로 감지하기 위해 배열을 생성
        const newTodoLists = [...todoLists];
        // 인풋 창에 입력한 내용을 투두리스트 배열에 추가
        newTodoLists.push(todo);
        setTodoLists(newTodoLists); // => 특정 투두 항목이 추가된 투두리스트 배열로 업데이트

        // 인풋 창 비우기
        setTodo(''); 
    };

    // [Delete] 버튼 클릭 시(몇 번째 버튼이 클릭되었는지 인수로 전달)
    const onClickDelete = (index: number) => {
        // State 변경을 정상적으로 감지하기 위해 배열을 생성
        const newTodoLists = [...todoLists];
        // 투두리스트 배열로부터 해당 요소 삭제
        newTodoLists.splice(index, 1);
        setTodoLists(newTodoLists); // => 특정 투두 항목이 제거된 투두리스트 배열를 저장
        
    }

    return (
        <>
            <div>
                <input type="text" value={todo} onChange={onChangeTodo} placeholder='input'/>
                <button className='addListButton' onClick={onClickAdd}>Add</button>
                <Delete todoLists={todoLists} onClickDelete={onClickDelete}/>
            </div>
        </>
    );
}

export default List;