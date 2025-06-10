import Accordion from "./components/Accordion"

function App(){

  const items = [
    {

      id:1,
      label: "Can I use React in Project",
      content:"Yes, you can use"
    },
    { 
      id:2,
       label: "Can I use JS in Project",
      content:"Yes, you can use"
    },
    {
      id:3,
       label: "Can I use Angular in Project",
      content:"Yes, you can use"
    }
  ]

 return <div>
  <Accordion items={items}/>
 </div>
  
}
export default App;
