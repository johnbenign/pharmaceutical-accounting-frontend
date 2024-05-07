import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';
import '../styles/Home.css';
import Footer from './Footer';
import Header from './Header';
import SideMenu from './SideMenu';

class Home extends Component {
    constructor(props) {
        super(props)

        
    }

    

    render() {

        
        //const showSidebar = () => setSidebar(!sidebar);

        return (
            <div>

                <Header />

                <SideMenu/>


                {/* <div className="auth-wrapper">
                    <nav className="auth-inner-home">
                
                
                    </nav>
                </div> */}

                <Footer />

            </div>
            // <div style={{ display: 'block', width: 700, padding: 30 }}>
            //     <h4>React-Bootstrap Tab Component</h4>
            //     <Tabs defaultActiveKey="second">
            //         <Tab eventKey="first" title="Dashboard">
            //         Hii, I am 1st tab content
            //         </Tab>
            //         <Tab eventKey="second" title="Setting">
            //         Hii, I am 2nd tab content
            //         </Tab>
            //         <Tab eventKey="third" title="Aboutus">
            //         Hii, I am 3rd tab content
            //         </Tab>
            //     </Tabs>
            // </div>
        )
    }
}

export default Home
