import React from "react";
import { Aside } from "../components/Aside/Aside";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";

/*
.grid-container {
  // display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas:
    "sidenav header"
    "sidenav main"
    "sidenav footer";
  // height: 100vh;
}
*/
export const Dashboard = () => {

  return (
    <div className="grid h-screen grid-container ">
      <Header>
        <div className="header__search">Search...</div>
        <div className="header__avatar">Your face</div>
      </Header>
      <Aside>
        <ul className="p-0 mt-16 list-none">
          {["1", "2", "3", "4", "5"].map((i) => (
            <li
              key={i}
              className="p-4 cursor-pointer hover:bg-white hover:bg-opacity-25 text-gray-300"
            >
              {`Item ${i}`}
            </li>
          ))}
        </ul>
      </Aside>

      <Main>
        <div className="flex justify-between m-5 p-5 h-40 bg-gray-100 text-gray-600">
          <div className="main-header__heading">Hello User</div>
          <div className="main-header__updates">Recent Items</div>
        </div>
        <div className="grid auto-rows-fr sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 m-5">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex items-center justify-between p-5 bg-purple-600"
            >
              <div className="overviewcard__icon">Overview</div>
              <div className="overviewcard__info">Card</div>
            </div>
          ))}
        </div>
        <div className="main-cards m-5">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="card flex flex-col items-center w-full bg-red-300 mb-5 p-6 box-border"
            >
              Card
            </div>
          ))}
        </div>
      </Main>
      <div className="snr sm:hidden lg:block">SNR</div>
      <Footer>
        <div className="bg-gray-100">
FOOTER
        </div>
      </Footer>
    </div>
  );
};
