import React, { useState } from "react";

export default function Card() {
  const [hover, setHover] = useState(false);

  // Base card styles
  const cardStyle = {
    position: "relative",
    width: "220px",
    height: "320px",
    backgroundColor: "mediumturquoise",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "25px",
    fontWeight: "bold",
    borderRadius: "15px",
    cursor: "pointer",
    overflow: "hidden",
  };

  // Dynamic styles for the "before" and "after" elements
  const dynamicStyle = {
    width: hover ? "100%" : "20%",
    height: hover ? "100%" : "20%",
    position: "absolute",
    transition: "all 0.5s",
    backgroundColor: "lightblue",
  };

  const beforeStyle = {
    ...dynamicStyle,
    top: 0,
    right: 0,
    borderRadius: hover ? "15px" : "0 15px 0 100%",
  };

  const afterStyle = {
    ...dynamicStyle,
    bottom: 0,
    left: 0,
    borderRadius: hover ? "15px" : "0 100% 0 15px",
    content: hover ? '"HELLO"' : '""',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    fontSize: "20px",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={beforeStyle}></div>
      <div style={afterStyle}>{hover && "HELLO"}</div>
      <span>HOVER</span>
    </div>
  );
}


// Booking Card Component
// export default function Card({ name, email }) {
//   return (
//     <div style={cardStyles}>
//       <h3>Booking Summary</h3>
//       <p><strong>Name:</strong> {name}</p>
//       <p><strong>Email:</strong> {email}</p>
//       <p>Your booking has been successfully submitted!</p>
//     </div>
//   );
// }

// // Inline styles for the card
// const cardStyles = {
//   padding: "20px",
//   backgroundColor: "#f4f4f4",
//   borderRadius: "10px",
//   width: "100%",
//   marginTop: "20px",
//   border: "1px solid #ddd",
// };
