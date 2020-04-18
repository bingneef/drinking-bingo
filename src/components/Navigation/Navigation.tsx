import React from "react";
import { Link, Location } from "@reach/router";
import {
  ListItem,
  ListItemIcon,
  List as BaseList,
  ListItemText,
} from "@material-ui/core";
import TwoIcon from "@material-ui/icons/LooksTwo";
import ThreeIcon from "@material-ui/icons/Looks3";
import FourIcon from "@material-ui/icons/Looks4";
import FiveIcon from "@material-ui/icons/Looks5";

import styled from "styled-components";
import { useTranslation } from "react-i18next";

const List = styled(BaseList)`
  padding: 0;
`;

const config = [
  {
    key: "2x2",
    to: "/bingo/2x2",
    Icon: TwoIcon,
  },
  {
    key: "3x3",
    to: "/bingo/3x3",
    Icon: ThreeIcon,
  },
  {
    key: "4x4",
    to: "/bingo/4x4",
    Icon: FourIcon,
  },
  {
    key: "5x5",
    to: "/bingo/5x5",
    Icon: FiveIcon,
  },
];

const Navigation = () => {
  const [t] = useTranslation();
  return (
    <Location>
      {({ location }) => (
        <List>
          {config.map((item) => (
            <Link to={item.to} key={item.key}>
              <ListItem button selected={location.pathname === item.to}>
                {item.Icon && (
                  <ListItemIcon>
                    <item.Icon />
                  </ListItemIcon>
                )}
                <ListItemText primary={t(`navigation.labels.${item.key}`)} />
              </ListItem>
            </Link>
          ))}
        </List>
      )}
    </Location>
  );
};

export default Navigation;
