import React, { useState } from 'react';
import '../styles/Home.css';

// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";

import { IconContext } from "react-icons";

// ROUTING

import { Link, withRouter } from "react-router-dom";

// DATA FILE
import { SideMenuData } from "../data/SideMenuData";

// STYLES
import "../styles/Sidebar.css";

function SideMenu() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#000" }}>
        {/* All the icons now are white */}
        <div className="side-navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="side-navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SideMenuData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}


// class SideMenu extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//         sidebar: false,
//     }
//     this.showSidebar = this.showSidebar.bind(this);
//     }
    

//     showSidebar = (e) => {

//         console.log("side bar will show");

//         this.setState({
//             sidebar: true
//         })
//     }


//   render() {

//     console.log("render method called in home");
//     const { sidebar } = this.state;


//     return <React.Fragment>
//         <div className="auth-wrapper">
//                     <nav className="auth-inner-side-menu">
//                         <button className="hamburger"type="button" onClick={this.showSidebar}>
//                             <div></div>
//                         </button>
//                         <ul onClick={this.showSidebar}>
//                             <li><Link to="/">Home</Link></li>
//                             <li><Link to="/inventory">Inventory</Link></li>
//                             <li><Link to="/accounting">Accounting</Link></li>
//                         </ul>
//                     </nav>
//                 </div>
//     </React.Fragment>;
//   }
// }

 export default withRouter(SideMenu);
