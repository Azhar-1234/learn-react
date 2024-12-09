import { Fragment } from "react";
import ContactForm from "./component/contactform";
import Footer from "./component/footer";
import Header from "./component/header";
import Hero from "./component/hero";
import JavascriptBlock from "./component/javascriptBlock";
import ImmediatInvokedFunction from "./component/ImmediatInvokedFunction";
import Map from "./component/map";
import Conditional from "./component/conditional";                
const App = () => {
    return (
        <div>
            <Fragment>
                <h1 style={{
                    color: 'green',
                }}>hello world</h1>
                {new Date().toLocaleTimeString()}
            </Fragment>
           <Header />
              <Conditional />
           <Hero />
              <Map />
           <JavascriptBlock />
              <ImmediatInvokedFunction />
           <ContactForm />
           <Footer />

        </div>
    );
};

export default App;