import React from 'react';

const Input = ({getDateInput,submit,value}) =>{
    return(
        <div>
            <input type="date" onChange={getDateInput} value={value}/>
            <button onClick={submit} class="button">Submit</button>
        </div>
    )

}
export default Input;