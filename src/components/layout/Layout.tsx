import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import MainContainer from "./MainContainer";
import Header from "./Header/Header";

export default function Layout() {
  return (
    <div className="bg-[var(--background-color)] min-h-screen">
      <Header />

      <MainContainer>
        <Outlet />
      </MainContainer>

      <Footer />
    </div>
  );
}
