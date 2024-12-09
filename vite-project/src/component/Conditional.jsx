const loginstatus = (status) => {
    if (status) {
        return <button type="button" style={{color:'white',background:'blue'}}>Login</button>
    } else {    
        return <button type="button" style={{color:'green'}}>Logout</button>
    }
}
const CheckStatus = true;
const Conditional = () => {
  
    return (
        <div>
            <h1>wellcome dashboard</h1>
            {loginstatus(true)}
            <h1>{CheckStatus && <button>koth sotto true ache</button>}</h1>
        </div> 
        )
 
};
export default Conditional;