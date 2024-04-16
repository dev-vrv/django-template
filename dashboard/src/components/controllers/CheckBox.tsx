import './CheckBox.scss'
import { FaCheck } from "react-icons/fa6";

interface checkboxProps {
    id: string;
    name: string;
    checked?: boolean;
    text?: string;
    labelClassName?: string;
}

function CheckBox(props: checkboxProps) {
    const { id, name, checked, text, labelClassName } = props;
    return (
        <label
        htmlFor="remember"
        className={labelClassName}
        >
            <input 
            type="checkbox" 
            id={id} 
            name={name} 
            checked={checked} 
            />

            <i className='checkbox-view'>
                <FaCheck />
            </i>
            <span>{text}</span>
        </label>
    )
}

export default CheckBox;