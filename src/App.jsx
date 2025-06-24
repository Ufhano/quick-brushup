import ListGroup from "./Components/ListGroup";

function App(){
  let items = ["Johannesburg", "Malawi", "Thohoyandou", "Hayani"];
  return <div>
    <ListGroup items ={items}heading="Cities"/>
    
  </div>


}
export default App;