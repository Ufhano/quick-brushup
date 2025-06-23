import { Fragment } from "react";
import  {MouseEvent}from "react";

function ListGroup() {
  let items = ["Johannesburg", "Malawi", "Thohoyandou", "Hayani"];


  const handleClick =(event:MouseEvent) => console.log(event)

  return (
    <>
      <h1>List</h1>

      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={(event) => console.log(event)}
          >
            {" "}
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
