import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

import Header from "../Pages/Shared/Header/Header";
import LeftSideNav from "../Pages/Shared/LeftSideNav/LeftSideNav";

const Main = () => {
  return (
    <div>
      <Header className='mb-6'></Header>
      <div className="mx-12">
        <div className="flex">
          <div className="flex-none w-1/4 ">
            <LeftSideNav></LeftSideNav>
          </div>
          <div className="grow w-3/4 ">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
