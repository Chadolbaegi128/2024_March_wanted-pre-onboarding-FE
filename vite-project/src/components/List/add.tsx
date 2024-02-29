import { FC } from 'react';
import '../../style/Add.css';

type Props = {
    todo: string;
    todoLists: string[];
};

const Add: FC = () => {
    return (
        <>
            <div>
                <input type="text" className='addListButton'/>
            </div>
        </>
    )
};

export default Add;