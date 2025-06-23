import { Fragment } from "react";

function ListGroup() {
    const items =[
        "Johannesburg",
        "Malawi",
        "Thohoyandou",
        "Hayani",

    

    ];

    items.map(item=> <li>{item}</li>)
  return (
    <>
        <h1>List</h1>
        <ul className="list-group">
          
        </ul>
    </>
  );
}

export default ListGroup;
