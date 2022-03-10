import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "pages/Dashboard";
// import Settings from 'pages/Settings';
import Order from "pages/Order";
import Maps from "pages/Maps";
import Shoes from "pages/Shoes";

// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";
import { useContext } from "react";
import { AuthContext } from "contexts/AuthContext";
import Login from "components/login/Login";
import ChangePassword from "components/change-password/ChangePassword";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      {/* <Sidebar />
      <div className="md:ml-64"> */}
      <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="login" element={<Login />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>

      {/* </div> */}
    </>
  );
}

export default App;
