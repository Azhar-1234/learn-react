import { Fragment } from "react";
import ContactForm from "./component/contactform";
import Footer from "./component/footer";
import Header from "./component/header";
import Hero from "./component/hero";

const App = () => {
    return (
        <div>
            <Fragment>
                <h1>hello world</h1>
                {new Date().toLocaleTimeString()}
            </Fragment>
           <Header />
           <Hero />
           <ContactForm />
           <Footer />

        </div>
    );
};

export default App;