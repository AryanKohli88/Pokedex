import React from "react";

function TopBar() {
  const year = new Date().getFullYear();
  return (
   <topbar class="topDiv">
    <h1>PokeDex</h1>
   </topbar>
  );
}

export default TopBar;