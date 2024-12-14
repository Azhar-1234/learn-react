const Event = () => {
    function demo(){
        alert('hello world');
    }
    const postFormData = (e) => {
        e.preventDefault();
        alert('form submitted');
    }
    return (
        <div>
            <button onClick={
                () => {
                    alert('hello world');
                }
            }>Submit Button</button>
            <button type="button" onClick={demo}>Demo</button>
            <form onSubmit={postFormData}>
                <input type="text" placeholder="name" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
export default Event;