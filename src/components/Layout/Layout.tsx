import React from 'react';
import Drawer from "@mui/material/Drawer";
import styles from "./Layout.module.css"
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Grades from "../../pages/Grades";
import Attendance from "../../pages/Attendance";
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {AddCircleOutlineOutlined, SubjectOutlined} from "@mui/icons-material";
import InfoIcon from '@mui/icons-material/Info';
import BookIcon from '@mui/icons-material/Book';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MessageIcon from '@mui/icons-material/Message';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';


function Layout({children}: any) {

  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    {
      text: 'Grades',
      icon: <BookIcon/>,
      path: '/Grades'
    },
    {
      text: 'Attendance',
      icon: <CalendarMonthIcon/>,
      path: '/attendance'
    },
    {
      text: 'Announcements',
      icon: <AddCircleOutlineOutlined/>,
      path: '/announcements'
    },
    // others
    {
      text: 'History, Mission & Vision',
      icon: <WorkspacePremiumIcon/>,
      path: '/history-mission-vision'
    },
    {
      text: 'Feedback',
      icon: <MessageIcon/>,
      path: '/feedback'
    },
    {
      text: 'About',
      icon: <InfoIcon/>,
      path: '/about'
    },
    {
      text: 'FAQ',
      icon: <HelpOutlineIcon/>,
      path: '/faq'
    },
  ];

  if (location.pathname === "/login") {
    return null;
  }

  return (
    <>
      <div className={styles.root}>
        <Drawer variant={"permanent"}
                className={styles.drawer}
                anchor={"left"}
                classes={{paper: styles.drawerPaper}}
        >
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
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;