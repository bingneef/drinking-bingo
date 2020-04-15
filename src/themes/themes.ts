import { createMuiTheme } from "@material-ui/core/styles";
import base from "./base";
import dark from "./dark";

export default {
  base: createMuiTheme(base),
  dark: createMuiTheme(dark)
};
