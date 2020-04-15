import { ThemeOptions } from "@material-ui/core";
import merge from "deepmerge";
import pink from '@material-ui/core/colors/pink';
import base from "./base";

const dark: ThemeOptions = {
  palette: {
    primary: pink
  }
};

export default merge(base, dark);
