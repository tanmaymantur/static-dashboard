import React from "react";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import remySharp from "./avtarImg.jpg";
import "./ReviewList.css";

const reviews = [
  {
    name: "Jenny Wilson",
    avatar: remySharp,
    rating: 4,
    reviewText:
      "The Food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was very good. They were very conscientious about gluten allergies.",
  },
  {
    name: "Dianne Russell",
    // avatar: remySharp,
    rating: 5,
    reviewText:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect Service",
  },
  {
    name: "Devon Lane",
    // avatar: remySharp,
    rating: 4,
    reviewText:
      "Normally wings are wings, but thiers are lean and meaty and tender and creamy. The taste of sauce combination is awesome compared to other diners sauce",
  },
];

const Review = ({ name, avatar, rating, reviewText }) => (
  <div
    style={{
      marginTop: "5px",
      paddingBottom: "8px",
      borderBottom: "0.5px solid grey",
    }}
  >
    <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Avatar
          alt={name}
          src={avatar}
          sx={{
            width: { sm: "25px", xs: "30px" },
            height: { sm: "25px", xs: "30px" },
          }}
        />
        <span style={{ fontSize: "smaller", color: "white" }}>{name}</span>
      </div>
      <Rating
        name="read-only"
        value={rating}
        readOnly
        sx={{ fontSize: "medium" }}
        emptyIcon={
          <StarIcon
            style={{ opacity: 0.55, color: "white" }}
            fontSize="inherit"
          />
        }
      />
      <span style={{ color: "rgb(177 177 177)", fontSize: "x-small" }}>
        {reviewText}
      </span>
    </div>
  </div>
);

const ReviewList = () => (
  <div
    className="scroll-container"
    style={{ maxHeight: "inherit", overflowY: "auto" }}
  >
    {reviews.map((review, index) => (
      <Review
        key={index}
        name={review.name}
        avatar={review.avatar}
        rating={review.rating}
        reviewText={review.reviewText}
      />
    ))}
  </div>
);

export default ReviewList;
