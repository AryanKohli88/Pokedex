import React, { useState, useEffect } from "react";

function ProfilePic() {
  const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: mouseX, clientY: mouseY } = event;
      // Adjust the box position based on the mouse position
      const offsetX = (mouseX - window.innerWidth / 2) / 10;
      const offsetY = (mouseY - window.innerHeight / 2) / 10;
      setBoxPosition({ x: -offsetX, y: -offsetY });
    };

    // Add event listener for mouse move
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const boxStyle = {
    position: "fixed",
    top: "20%", // 20% margin from the top
    right: "10%",
    width: "10vw",
    height: "20vh",
    border: "2px solid #000",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transform: `translate(${boxPosition.x}px, ${boxPosition.y}px)`, // Move the box in the opposite direction of mouse movement
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <div style={boxStyle}>
      <img src='../../assets/profilepic.jpeg' alt="Profile" style={imgStyle} />
    </div>
  );
}

export default ProfilePic;
