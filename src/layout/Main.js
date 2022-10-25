import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

import Header from "../Pages/Shared/Header/Header";
import LeftSideNav from "../Pages/Shared/LeftSideNav/LeftSideNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="mx-12">
        <div className="flex">
          <div className="flex-none w-16">
            <LeftSideNav></LeftSideNav>
          </div>
          <div className="grow w-80 ">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
