import React from "react";

function Type() {
  return (
    <div className="type">
        {/* Type */}
        {/* <% type.forEach(function (item, index) { %>     
            <button style="background-color: <%= mapTypeToColor(item["type"]["name"]) %>" ><%= item["type"]["name"] %> </button>
        <% })%>   */}
        {/* Button will have bg colour of the type */}
        <button> Type 1</button>
        <button> Type 2</button>
        </div>
  );
}

export default Type;
