import HeaderTop from "./Header-top";
import HeaderRabbit from "./Header-Rabbit";
import MainMenu from "./MainMenu";

const Layout = ({ children }) => {
  return (
    <>
      <HeaderTop />
      <HeaderRabbit />
      <div className="max-w-screen-2xl mx-auto mt-10">
        <div className="flex flex-wrap">
          <MainMenu />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
