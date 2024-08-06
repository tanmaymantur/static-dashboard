import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Avatar } from "@mui/material";
import remySharp from "./avtarImg.jpg";
import Rating from "@mui/material/Rating";

const ActionBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: { sm: "210px", xs: "356px" },
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: { sm: "145px", xs: "105px" },
          justifyContent: "space-between",
        }}
      >
        <IconButton
          sx={{
            background: "#808080",
            padding: { xs: "8px", sm: "10px" },
            borderRadius: "100%",
          }}
          size="medium"
          aria-label="show 4 new mails"
          color="inherit"
        >
          <EmailOutlinedIcon sx={{ fontSize: { xs: "1rem", sm: "1.5rem" } }} />
        </IconButton>
        <IconButton
          sx={{
            background: "#808080",
            padding: { xs: "8px", sm: "10px" },
            borderRadius: "100%",
          }}
          size="medium"
          aria-label="show 4 new mails"
          color="inherit"
        >
          <SettingsOutlinedIcon
            sx={{ fontSize: { xs: "1rem", sm: "1.5rem" } }}
          />
        </IconButton>
        <IconButton
          sx={{
            background: "#808080",
            padding: { xs: "8px", sm: "10px" },
            borderRadius: "100%",
          }}
          size="medium"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge
            color="primary"
            variant="dot"
            overlap="circular"
            sx={{
              "& .MuiBadge-dot": {
                backgroundColor: "#3d9efe", // Replace with your desired color
                height: { sm: "12px" }, // Replace with your desired size
                minWidth: { sm: "12px" }, // Ensure the dot is a circle
                borderRadius: "50%",
              },
            }}
          >
            <NotificationsIcon
              sx={{ fontSize: { xs: "1rem", sm: "1.5rem" } }}
            />
          </Badge>
        </IconButton>
      </Box>
      <Avatar
        alt="Remy Sharp"
        src={remySharp}
        sx={{
          width: { sm: "44px", xs: "30px" },
          height: { sm: "44px", xs: "30px" },
          cursor: "pointer",
        }}
      />
    </Box>
  );
};

export default ActionBar;
