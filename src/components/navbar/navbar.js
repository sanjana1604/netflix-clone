import {React,useState} from 'react';
import './navbar.scss';
import {ArrowDropDown, Notifications, Search} from '@material-ui/icons';
function Navbar(props) {
  const [isScroll, setIsScroll] = useState(false);
  window.onscroll =()=>{
    setIsScroll(window.pageYOffset===0?false:true);
    return()=>window.onscroll=null;
  }
  console.log(isScroll);
  return (
    <div className={isScroll?"navbar scroll":"navbar"}>
      <div className="container">
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="netflix-logo"/>
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search/>
          <span className="icon">
            KID
          </span>
          <Notifications className="icon"/>
          <img src="https://images.pexels.com/photos/9226524/pexels-photo-9226524.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="content"/>
          <div className="profile">
            <ArrowDropDown className="icon"/>
            <div className="options">
              <span>Setting</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;