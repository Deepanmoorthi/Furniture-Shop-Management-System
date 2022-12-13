import "./navbar.css";
import {BsSearch} from "react-icons/bs";
// import Logo from '../../images/logof.png'

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="adlogo">
          {/* <img src={Logo} alt="nav Logo" /> */}
          <h2>KFS</h2>
        </div>
        <div className="searchh">
          <input type="text" placeholder="Search..." />
          <BsSearch />
        </div>
        
        <div className="items">
          {/* <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div> 
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>*/}
          <div className="item">
            <p>ADMIN</p>
             {/* <img src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="avatar"/>  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
