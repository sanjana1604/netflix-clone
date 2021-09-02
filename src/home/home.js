import React from 'react';
import '../home/home.scss';
import Navbar from '../components/navbar/navbar';
import Featured from '../components/featured/featured';
function Home(props) {
  return (
    <div className="home">
      <Navbar/>
      {/* <img width="100%" src="https://images.pexels.com/photos/1182127/pexels-photo-1182127.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="user"/> */}
    <Featured type="movies"/>
    </div>
  );
}

export default Home;