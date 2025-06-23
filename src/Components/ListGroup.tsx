import { Fragment } from "react";

function ListGroup() {
  let items = ["Johannesburg", "Malawi", "Thohoyandou", "Hayani"];

  return (
    <>
      <h1>List</h1>

      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item, index)}
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
