import { FC } from 'react';
import '../../style/Delete.css';

// 필요한 Props: 메모 삭제 시 실행할 함수
type Props = {
    todoLists: string[];
    onClickDelete: (index: number) => void;
};

const Delete: FC<Props> = (props) => {
    const { todoLists, onClickDelete } = props;

    return (
        <div className='todoLists'>
            <ul>
                {todoLists.map((todo, index) => (
                    <li key={todo}>
                        <div className='todoWrapper'>
                            <p>{todo}</p>
                            <button onClick={() => onClickDelete(index)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Delete;