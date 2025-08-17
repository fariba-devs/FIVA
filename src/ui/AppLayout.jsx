import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./footer/Footer.jsx";

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navbar */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer className="bg-gray-900" />
    </div>
  );
};

export default AppLayout;
