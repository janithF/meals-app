import { useState } from 'react';

const useInput = (validateValue) => {

    const[enteredValue,setEnteredValue] = useState('');
    const[isTouched,setIsTouched]=useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangehandler=(e)=>{
        const value=e.target.value;
        setEnteredValue(value)
    }

    const inputBlurHandler=()=>{
        setIsTouched(true)
    }

    const reset=()=>{
        setEnteredValue('');
        setIsTouched(false);
    }

    return (
        {
            value:enteredValue,
            valueChangehandler,
            hasError,
            valueIsValid,
            inputBlurHandler,
            reset
        }
    );
};

export default useInput;