const JavascriptBlock = () => {
    let marks = 80;
    return (
        <div>
            {marks>80?<h1 style={{ color: 'green' }}> Result is A+</h1>: <h1 style={{ color:'red', backgroundColor:'dark'}}>average result</h1>}
        </div>
    )
}
export default JavascriptBlock;