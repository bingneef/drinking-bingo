import { ThemeOptions } from "@material-ui/core";
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

const base: ThemeOptions = {
  palette: {
    primary: pink,
    secondary: blue
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#F5F5F5"
        }
      }
    },
    MuiDrawer: {
      paper: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
        paddingLeft: "12px"
      },
      paperAnchorDockedLeft: {
        borderRight: 0
      }
    }
  }
};
export default base;
