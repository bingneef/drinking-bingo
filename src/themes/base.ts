import { ThemeOptions } from "@material-ui/core";

const base: ThemeOptions = {
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
