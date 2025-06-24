import ListGroup from "./Components/ListGroup";

function App(){

  const handleSelectionItem =(item:string)=>{
    console.log(item);
  }
  let items = ["Johannesburg", "Malawi", "Thohoyandou", "Hayani"];
  return <div>
    <ListGroup items ={items}heading="Cities" onSelectionItem={handleSelectionItem}/>
    
  </div>


}
export default App;