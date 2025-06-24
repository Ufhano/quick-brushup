import ListGroup from "./Components/ListGroup";

function App(){
  let items = ["Johannesburg", "Malawi", "Thohoyandou", "Hayani"];
  return <div>
    <ListGroup items ={items}heading="Cities" onSelectionItem={2}/>
    
  </div>


}
export default App;