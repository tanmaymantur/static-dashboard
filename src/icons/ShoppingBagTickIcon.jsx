import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CheckIcon from "@mui/icons-material/Check";
import { Box } from "@mui/material";

const ShoppingBagTickIcon = () => {
  return (
    <Box
      position="relative"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
    >
      <ShoppingBagOutlinedIcon sx={{ color: "#ebebeb" }} fontSize="medium" />
      <CheckIcon
        style={{
          position: "absolute",
          color: "#ebebeb",
          bottom: 2.8, // Adjust this value to position the tick correctly inside the bag
          fontSize: "0.8rem",
        }}
      />
    </Box>
  );
};

export default ShoppingBagTickIcon;
