import { Fragment } from "react";

function ListGroup() {
  let items = ["Johannesburg", "Malawi", "Thohoyandou", "Hayani"];
  items=[]


  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}> {item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
