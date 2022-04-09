import { useContext } from "react";
import ThemeContext from "../context/theme-context";
console.log(ThemeContext);
export const useTheme = () => useContext(ThemeContext);
