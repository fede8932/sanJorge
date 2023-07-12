import React, { useEffect, useState } from "react";
import "./App.css";
import LoginView from "./views/loginView/LoginView";
import NavbarContainer from "./containers/NavbarContainer";
import SideBarContainer from "./containers/SideBarContainer";
import { useDispatch, useSelector } from "react-redux";
import { persistUser } from "./redux/user";
import AddUser from "./views/addUser/AddUser";
import { Routes, Route } from "react-router-dom";
import Dashbord from "./views/dashbord/Dashbord";
import AddClient from "./views/addClient/AddClient";
import AddSupplier from "./views/addSupplier/AddSupplier";
// import AddBrand from "./views/addBrand/AddBrand";
// import AddProduct from "./views/addProduct/AddProduct";
// import SearchProduct from "./views/searchProduct/SearchProduct";
// import SearchBrand from "./views/searchBrand/SearchBrand"
// import NewBuyOrder from "./views/newBuyOrder/NewBuyOrder";
// import NewSellOrder from "./views/newSellOrder/NewSellOrder";

function App() {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const [render, setRender] = useState(false);
  const dataUser = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(persistUser())
      .then(() => {
        setRender(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  // console.log(dataUser);
  return (
    <div>
      {render ? (
        <div className="panelViewContainer">
          {dataUser == null ? (
            <LoginView />
          ) : (
            <>
              <NavbarContainer />
              <div className="panelSubContainer">
                <SideBarContainer />
                <div className={`viewContainer ${isOpen ? "" : "big"}`}>
                  <Routes>
                    <Route path="/" element={<Dashbord />} />
                    <Route path="/dashbord" element={<Dashbord />} />
                    <Route path="add/seller" element={<AddUser />} />
                    <Route path="add/supplier" element={<AddSupplier />} />
                    <Route path="add/client" element={<AddClient />} />
                    {/* <Route path="add/brand" element={<AddBrand />} />
                    <Route path="add/product" element={<AddProduct />} />
                    <Route path="search/product" element={<SearchProduct />} />
                    <Route path="search/brand" element={<SearchBrand />} />
                    <Route path="new/buy" element={<NewBuyOrder />} />
                    <Route path="new/sell" element={<NewSellOrder />} /> */}
                  </Routes>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
