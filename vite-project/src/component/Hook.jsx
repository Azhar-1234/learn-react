import { useRef } from 'react';
const Hook = () => {
    let firstName,lastName,button = new useRef();

    const change = () => {
        alert(firstName.value+' '+lastName.value);
        button.classList.remove('text-warning');
        button.classList.add('text-primary');

    }
    return (
        <div>
            <input ref={(a) =>firstName=a} type="text" />
            <input ref={(b)=>lastName=b} type="text" />
            <button onClick={change} ref={(c)=>button=c} className='text-warning'>hook test</button>
        </div>
    );
};
export default Hook;
