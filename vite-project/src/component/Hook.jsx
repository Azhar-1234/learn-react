import { useRef } from 'react';

const Hook = () => {
    const ApiData = useRef(null); // Correctly initialize useRef
    const myPtag = useRef(null); // Correctly initialize useRef for p tag

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        ApiData.current = await response.json(); // Store the API response in the ref
    };

    const showData = () => {
        if (myPtag.current) {
            myPtag.current.innerText = JSON.stringify(ApiData.current); // Correct JSON.stringify usage
        }
    };

    return (
        <div>
            <p ref={myPtag}></p>
            <button onClick={fetchData}>Fetch Data</button>
            <button onClick={showData}>Show Data</button>
        </div>
    );
};

export default Hook;
