import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LuggageIcon from "@mui/icons-material/Luggage";
import Badge from "@mui/material/Badge";
import AddIcon from "@mui/icons-material/Add";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Avatar, IconButton, Rating, Typography } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DoneIcon from "@mui/icons-material/Done";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
import MonetizationOnTwoToneIcon from "@mui/icons-material/MonetizationOnTwoTone";
import TimelineIcon from "@mui/icons-material/Timeline";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import BasicBars from "./BasicBars";
import "./MainContent.css";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import RecentOrders from "./Table";
// import { Avatar } from "@mui/material";
import remySharp from "./avtarImg.jpg";
import StarIcon from "@mui/icons-material/Star";
import ReviewList from "./ReviewList";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MainContent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <p style={{ color: "white", fontWeight: "700", marginTop: "0px" }}>
        Dashboard
      </p>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        <Grid item xs={12} md={8}>
          <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Grid item xs={6} md={3}>
              <div
                style={{
                  height: "120px",
                  padding: "10px",
                  background: "var(--primary-color)",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    background: "#000077",
                    borderRadius: "25%",
                    padding: "5px",
                    width: "fit-content",
                    display: "flex",
                    position: "relative",
                  }}
                >
                  <Badge
                    badgeContent={
                      <AddIcon
                        style={{
                          fontSize: "0.7rem",
                          color: "white",
                          background: "#3b38f6",
                          borderRadius: "50%",
                        }}
                      />
                    }
                    color="primary"
                    overlap="circular"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    sx={{
                      "& .MuiBadge-badge": {
                        backgroundColor: "transparent",
                        height: "1em",
                        width: "1em",
                        fontSize: "1rem",
                      },
                    }}
                  >
                    <ShoppingCartIcon
                      sx={{
                        color: "#6a68ff",
                      }}
                    />
                  </Badge>
                </div>
                <span
                  style={{
                    marginTop: "6px",
                    color: "white",
                    fontSize: "small",
                  }}
                >
                  Total Orders
                </span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "10px",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "1.5rem", flexGrow: 1 }}
                    color="white"
                  >
                    75
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      color: "#00d700",
                      fontSize: "smaller",
                      alignItems: "center",
                    }}
                  >
                    <ArrowDropUpIcon /> 3%
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={6} md={3}>
              <div
                style={{
                  height: "120px",
                  padding: "10px",
                  background: "var(--primary-color)",

                  display: "flex",
                  flexDirection: "column",

                  flexGrow: 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    background: "#004300",
                    borderRadius: "25%",
                    padding: "5px",
                    width: "fit-content",
                    display: "flex",
                    position: "relative",
                  }}
                >
                  <Badge
                    badgeContent={
                      <DoneIcon
                        style={{
                          fontSize: "0.7rem",
                          color: "white",
                          background: "#00c200",
                          borderRadius: "50%",
                        }}
                      />
                    }
                    color="primary"
                    overlap="circular"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    sx={{
                      "& .MuiBadge-badge": {
                        backgroundColor: "transparent",
                        height: "1em",
                        width: "1em",
                        fontSize: "1rem",
                      },
                    }}
                  >
                    <ShoppingBagIcon
                      sx={{
                        color: "#07ff00",
                      }}
                    />
                  </Badge>
                </div>
                <span
                  style={{
                    marginTop: "6px",
                    color: "white",
                    fontSize: "small",
                  }}
                >
                  Total Delivered
                </span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "10px",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "1.5rem", flexGrow: 1 }}
                    color="white"
                  >
                    70
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      color: "#bc4a4a",
                      fontSize: "smaller",
                      alignItems: "center",
                    }}
                  >
                    <ArrowDropDownIcon /> 3%
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={6} md={3}>
              <div
                style={{
                  height: "120px",
                  padding: "10px",
                  background: "var(--primary-color)",

                  display: "flex",
                  flexDirection: "column",

                  flexGrow: 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    background: "#5f0000",
                    borderRadius: "25%",
                    padding: "5px",
                    width: "fit-content",
                    display: "flex",
                    position: "relative",
                  }}
                >
                  <Badge
                    badgeContent={
                      <CloseIcon
                        style={{
                          fontSize: "0.7rem",
                          color: "white",
                          background: "#ca0000",
                          borderRadius: "50%",
                        }}
                      />
                    }
                    color="primary"
                    overlap="circular"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    sx={{
                      "& .MuiBadge-badge": {
                        backgroundColor: "transparent",
                        height: "1em",
                        width: "1em",
                        fontSize: "1rem",
                      },
                    }}
                  >
                    <ShoppingBagIcon
                      sx={{
                        color: "#ff0000",
                      }}
                    />
                  </Badge>
                </div>
                <span
                  style={{
                    marginTop: "6px",
                    color: "white",
                    fontSize: "small",
                  }}
                >
                  Total Cancelled
                </span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "10px",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "1.5rem", flexGrow: 1 }}
                    color="white"
                  >
                    05
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      color: "#00d700",
                      fontSize: "smaller",
                      alignItems: "center",
                    }}
                  >
                    <ArrowDropUpIcon /> 3%
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div
                style={{
                  height: "120px",
                  padding: "10px",
                  background: "var(--primary-color)",

                  display: "flex",
                  flexDirection: "column",

                  flexGrow: 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    background: "#6f005f",
                    borderRadius: "25%",
                    padding: "5px",
                    width: "fit-content",
                    display: "flex",
                    position: "relative",
                  }}
                >
                  <Badge
                    badgeContent={
                      <TimelineIcon
                        style={{
                          fontSize: "0.7rem",
                          color: "white",
                          background: "rgb(201 0 165)",
                          borderRadius: "50%",
                        }}
                      />
                    }
                    color="primary"
                    overlap="circular"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    sx={{
                      "& .MuiBadge-badge": {
                        backgroundColor: "transparent",
                        height: "1em",
                        width: "1em",
                        fontSize: "1rem",
                      },
                    }}
                  >
                    <MonetizationOnTwoToneIcon
                      sx={{
                        color: "#ff00fe",
                        "& .MuiSvgIcon-secondary": { color: "white" },
                      }}
                    />
                  </Badge>
                </div>
                <span
                  style={{
                    marginTop: "6px",
                    color: "white",
                    fontSize: "small",
                  }}
                >
                  Total Revenue
                </span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "10px",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "1.5rem", flexGrow: 1 }}
                    color="white"
                  >
                    $12K
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      color: "#bc4a4a",
                      fontSize: "smaller",
                      alignItems: "center",
                    }}
                  >
                    <ArrowDropDownIcon /> 3%
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
          {/* <Item>xs=8</Item> */}
        </Grid>
        <Grid item xs={12} md={4}>
          <div
            style={{
              height: "120px",
              padding: "15px",
              background: "var(--primary-color)",
              display: "flex",
              flexDirection: "column",

              flexGrow: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                height: "100%",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: "1",
                }}
              >
                <span
                  style={{
                    marginTop: "6px",
                    color: "white",
                    fontSize: "small",
                  }}
                >
                  Net Profit
                </span>
                <Typography
                  sx={{ fontSize: "1.5rem", flexGrow: 1, marginTop: "14px" }}
                  color="white"
                >
                  $6759.25
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    color: "#00d700",
                    fontSize: "smaller",
                    alignItems: "center",
                  }}
                >
                  <ArrowDropUpIcon /> 3%
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2px",
                }}
              >
                <div style={{ width: "85px", height: "85px", color: "white" }}>
                  <CircularProgressbarWithChildren value={70}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ marginTop: "11px" }}>70%</span>
                      <span style={{ fontSize: "xx-small", marginTop: "-1px" }}>
                        Goal
                      </span>
                      <span style={{ fontSize: "xx-small", marginTop: "-3px" }}>
                        Completed
                      </span>
                    </div>
                  </CircularProgressbarWithChildren>
                </div>
                <span style={{ fontSize: "xx-small", color: "white" }}>
                  *The values has been rounded off
                </span>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div
            style={{
              height: "175px",
              padding: "10px",
              background: "var(--primary-color)",
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ color: "white" }}>Activity</span>
              <div className="custom-select">
                <select name="cars" id="cars" className="small-text-select">
                  <option value="volvo">Weekly</option>
                  <option value="saab">Daily</option>
                  <option value="opel">Yearly</option>
                </select>
              </div>
            </div>
            <div style={{ flexGrow: 1 }}>
              <BasicBars />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          {/* <Item>xs=4</Item> */}
          <div
            style={{
              height: "175px",
              padding: "10px",
              background: "var(--primary-color)",
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,

              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginRight: "5px",
                marginLeft: "5px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    width: "fit-content",
                    height: "fit-content",
                    alignItems: "center",
                    padding: "12px",
                    background: "#5f3237",
                    borderRadius: "50%",
                  }}
                >
                  <GpsFixedIcon sx={{ color: "#cb5a27" }} fontSize="small" />
                </span>
                <span
                  style={{
                    color: "white",

                    fontSize: "smaller",
                  }}
                >
                  Goals
                </span>
              </div>
              <IconButton
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "fit-content",
                  height: "fit-content",
                  background: "#47484c",
                  borderRadius: "50%",
                  padding: "1px",
                  color: "white",
                }}
              >
                <KeyboardArrowRightIcon />
              </IconButton>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginRight: "5px",
                marginLeft: "5px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    width: "fit-content",
                    height: "fit-content",
                    alignItems: "center",
                    padding: "12px",
                    background: "#293368",
                    borderRadius: "50%",
                  }}
                >
                  <LunchDiningOutlinedIcon
                    sx={{ color: "white" }}
                    fontSize="small"
                  />
                </span>
                <span
                  style={{
                    color: "white",

                    fontSize: "smaller",
                  }}
                >
                  Popular Dishes
                </span>
              </div>
              <IconButton
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "fit-content",
                  height: "fit-content",
                  background: "#47484c",
                  borderRadius: "50%",
                  padding: "1px",
                  color: "white",
                }}
              >
                <KeyboardArrowRightIcon />
              </IconButton>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginRight: "5px",
                marginLeft: "5px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    width: "fit-content",
                    height: "fit-content",
                    alignItems: "center",
                    padding: "12px",
                    background: "#214a60",
                    borderRadius: "50%",
                  }}
                >
                  <MenuBookIcon sx={{ color: "#238cbc" }} fontSize="small" />
                </span>
                <span
                  style={{
                    color: "white",

                    fontSize: "smaller",
                  }}
                >
                  Menus
                </span>
              </div>
              <IconButton
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "fit-content",
                  height: "fit-content",
                  background: "#47484c",
                  borderRadius: "50%",
                  padding: "1px",
                  color: "white",
                }}
              >
                <KeyboardArrowRightIcon />
              </IconButton>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          {/* <Item>xs=8</Item> */}
          <Box
            sx={{
              height: { xs: "230px", lg: "300px" },
              padding: "10px",
              background: "var(--primary-color)",
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              gap: "10px",
            }}
          >
            <span style={{ color: "white" }}>Recent Orders</span>
            <RecentOrders />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          {/* <Item>xs=4</Item> */}
          <Box
            sx={{
              height: { xs: "230px", lg: "300px" },
              padding: "10px",
              background: "var(--primary-color)",
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              gap: "10px",
            }}
          >
            <span style={{ color: "white" }}>Customer's Feedback</span>
            <ReviewList />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
