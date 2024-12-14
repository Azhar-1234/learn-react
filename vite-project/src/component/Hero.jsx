const Hero = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <button onClick={props.clckBtn}>Click Me</button>
            <ul>
                <li>Product Name:{props.item['name']}</li>
                <li>Product Price:{props.item.price}</li>
                <li>Product Tex:{props.item.tex}</li>
            </ul>
            <img src="https://media.istockphoto.com/id/1842477719/photo/umbrella-canopies-open-at-nabawi-masjid-medina-with-blue-beautiful-sky-and-tower-masjid-on.jpg?s=1024x1024&w=is&k=20&c=A9lQQ2CdqVu3FaWwW7AhjODnnSTNxesBYoXU_PL6o00=" />
        </div>
    );
};

export default Hero;