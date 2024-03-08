import { FC } from 'react';


type Props = {
    onClickAdd: () => void;
}

const AddButton: FC<Props> = (props) => {
    const { onClickAdd } = props;

    

    return (
        <div>
            <button onClick={onClickAdd}></button>
        </div>
    )
};

export default AddButton;