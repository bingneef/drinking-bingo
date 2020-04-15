import React from "react";
import { Link, Location } from "@reach/router";
import {
  ListItem,
  ListItemIcon,
  List as BaseList,
  ListItemText,
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";

import styled from "styled-components";
import { useTranslation } from "react-i18next";

const List = styled(BaseList)`
  padding: 0;
`;

const config = [
  {
    key: "dashboard",
    to: "/",
    Icon: DashboardIcon,
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
                <ListItemIcon>
                  <item.Icon />
                </ListItemIcon>
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
