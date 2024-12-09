const Map = () => {
    const city = ['dhaka', 'chittagong', 'sylhet', 'khulna', 'rajshahi', 'barishal', 'rangpur', 'mymensingh'];
    return (
        <ul>
            {
                city.map((city,i) => {
                    return <li key={i.toString} style={{color: `#2f116${i}`,background:'#330b2c'+i,listStyle:'none'}}>{city}</li>
                })
            }
        </ul>
    );
};

export default Map;