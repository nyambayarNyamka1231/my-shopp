import HeaderTop from "./Header-top";
import HeaderRabbit from "./Header-Rabbit";
import MainMenu from "./MainMenu";
import { useMenu } from "../hooks/use-menu";
import { useTheme } from "../hooks/use-theme";

const Layout = ({ children, setMenu }) => {
  // const { theme } = useTheme();
  // console.log(theme);
  // const { value } = useMenu();
  // console.log("menu", value);
  return (
    <>
      <HeaderTop />
      <HeaderRabbit />
      <div className="max-w-7xl mx-auto mt-10">
        <div className="flex flex-wrap">
          <MainMenu setMenu={setMenu} />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
