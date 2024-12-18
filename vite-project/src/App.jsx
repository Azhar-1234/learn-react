import { Fragment } from "react";
import ContactForm from "./component/contactform";
import Footer from "./component/footer";
import Header from "./component/header";
import Hero from "./component/hero";
import JavascriptBlock from "./component/javascriptBlock";
import ImmediatInvokedFunction from "./component/ImmediatInvokedFunction";
import Map from "./component/map";
import Conditional from "./component/conditional";    
import Event from "./component/Event";            
import Hook from "./component/Hook";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
const App = () => {
    const ItemObj = {
        name: 'item1',
        tex:5+'euro',
        price: 100,
    };
    function clickBtn() {
        alert('hello world Btn');
    }
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
            <Hook />
           <Hero title="Hero Title" desc="hero descriptio" item={ItemObj} clckBtn={clickBtn}/>
              <Map />
           <JavascriptBlock />
              <ImmediatInvokedFunction />
           <ContactForm />
           <Footer />
           <Event />    

        </div>
    );
};

export default App;