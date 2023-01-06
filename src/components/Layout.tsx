import React from 'react';
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import styles from "./Layout.module.css"
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Grades from "../pages/Grades";
import Attendance from "../pages/Attendance";
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {AddCircleOutlineOutlined, SubjectOutlined} from "@mui/icons-material";

function Layout() {

  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    {
      text: 'Grades',
      icon: <SubjectOutlined color="secondary"/>,
      path: '/Grades'
    },
    {
      text: 'Dashboard',
      icon: <AddCircleOutlineOutlined color="secondary"/>,
      path: '/attendance'
    },
  ];


  return (
    <>
      <div className={styles.root}>
        <Drawer variant={"permanent"}
                anchor={"left"}
                classes={{paper: styles.drawerPaper}}
        >
          <div>
            <Typography variant="h5">
              C A S C H C O M
            </Typography>
          </div>

          <List>
            {menuItems.map((item) => (
              <ListItemButton
                key={item.text}
                onClick={() => navigate(item.path)}
                // className={location.pathname == item.path ? classes.active : null}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text}/>
              </ListItemButton>
            ))}

          </List>

        </Drawer>

        <div className={styles.page}>

        </div>
      </div>
    </>
  );
}

export default Layout;