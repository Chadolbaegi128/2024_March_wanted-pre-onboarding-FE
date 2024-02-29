import { FC, ChangeEvent } from 'react';
import '../../style/Add.css';

// 필요한 Props: 메모 추가 시 실행할 변수들
type Props = {
    todo: string;
    onChangeTodo: (e: ChangeEvent<HTMLInputElement>) => void;
    onClickAdd: () => void
};

const Add: FC<Props> = (props) => {
    const { todo, onChangeTodo, onClickAdd } = props;

    return (
        <>            
            <input type="text" className='addListButton' placeholder='input' value={todo} onChange={onChangeTodo}/> 
            <button className='addListButton' onClick={onClickAdd}>Add</button>           
        </>
    )
};

export default Add;