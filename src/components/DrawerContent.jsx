import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingBagTickIcon from "../icons/ShoppingBagTickIcon";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Box, IconButton, ListItemText } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

function DrawerContent({ open }) {
  return (
    <Box
      sx={{
        background: "var(--primary-color)",
        height: "100%",
        top: "-1px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        paddingBottom: "15px",
      }}
    >
      <List sx={{ flexGrow: 1 }}>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                borderLeft: "2px solid #7193fe",
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <HomeIcon sx={{ color: "#7193fe" }} fontSize="medium" />
            </ListItemIcon>
            <ListItemText
              primary="Home"
              sx={{ opacity: open ? 1 : 0, color: "#ebebeb" }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <AssessmentOutlinedIcon
                sx={{ color: "#ebebeb" }}
                fontSize="medium"
              />
            </ListItemIcon>
            <ListItemText
              primary="Analysis"
              sx={{ opacity: open ? 1 : 0, color: "#ebebeb" }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <AssignmentTurnedInOutlinedIcon
                sx={{ color: "#ebebeb" }}
                fontSize="medium"
              />
            </ListItemIcon>
            <ListItemText
              primary="Checklist"
              sx={{ opacity: open ? 1 : 0, color: "#ebebeb" }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <AccountBalanceWalletOutlinedIcon
                sx={{ color: "#ebebeb" }}
                fontSize="medium"
              />
            </ListItemIcon>
            <ListItemText
              primary="Balance"
              sx={{ opacity: open ? 1 : 0, color: "#ebebeb" }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <ShoppingBagTickIcon fontSize="medium" />
            </ListItemIcon>
            <ListItemText
              primary="Cart"
              sx={{ opacity: open ? 1 : 0, color: "#ebebeb" }}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <IconButton>
        <LogoutIcon sx={{ color: "#ebebeb" }} fontSize="medium" />
      </IconButton>
    </Box>
  );
}

export default DrawerContent;
