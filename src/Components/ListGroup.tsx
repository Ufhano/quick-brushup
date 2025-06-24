import { Fragment } from "react";


function ListGroup() {
  let items = ["Johannesburg", "Malawi", "Thohoyandou", "Hayani"];
  let selectedIndex = 0



  return (
    <>
      <h1>List</h1>

      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index? 'list-group-item active' : 'list-group=item'}
            key={item}
            onClick={()=> {selectedIndex= index;}}
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
