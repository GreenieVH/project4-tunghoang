import Header from "./Header";
import Footer from "./Footer";

function DefaultLayout({children}) {
    return ( 
        <div className="page-wrapper">
            <Header/>
            {children}
            <Footer/>
        </div>
     );
}

export default DefaultLayout  ;