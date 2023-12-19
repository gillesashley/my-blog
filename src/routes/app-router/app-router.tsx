import Footer from "../../components/common/footer.component";
import Navbar from "../../components/common/navbar.component";
import { Outlet } from "react-router-dom";
export default function AppRouter() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
