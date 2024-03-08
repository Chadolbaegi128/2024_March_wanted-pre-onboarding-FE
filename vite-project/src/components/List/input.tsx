import { ChangeEvent, FC } from 'react';

type Props = {
    todo: string;
    onChangeTodo: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<Props> = (prop) => {
    const { todo, onChangeTodo  } = prop;

    return (
        <div>
            <input type="text" value={todo} onChange={onChangeTodo}/>
        </div>
    );
};

export default Input;