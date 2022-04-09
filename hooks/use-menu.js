import { useContext } from "react";
import MenuContext from "../context/menu-context";

export const useMenu = () => useContext(MenuContext);
