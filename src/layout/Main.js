import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

import Header from "../Pages/Shared/Header/Header";
import LeftSideNav from "../Pages/Shared/LeftSideNav/LeftSideNav";

const Main = () => {
  return (
    <div>
      <Header className='mb-6'></Header>
      <div className="md:mx-12 mx-6 ">
        <div className="md:flex block">
          <div className="flex-none w-full md:w-1/4 ">
            <LeftSideNav></LeftSideNav>
          </div>
          <div className="grow w-full md:w-3/4 ">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
