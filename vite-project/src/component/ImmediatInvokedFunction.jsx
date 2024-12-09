const ImmediatInvokedFunction = () => {
    let marks = 80;
    return (
        <div>
            { 
                (
                    () => {
                       return marks > 80 ? <h1>briliant imadiat invoked result</h1> : <h1>average imadiat invoked result</h1>
                    }
                )()
                // (() => {
                //     marks > 80 ? <h1>briliant imadiat invoked result</h1> : <h1>average imadiat invoked result</h1> 
                // })()
            }
        </div>
    )
}
export default ImmediatInvokedFunction;