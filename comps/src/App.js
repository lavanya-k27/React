import Accordion from "./components/Accordion"

function App(){

  const items = [
    {

      id:1,
      label: "Concise & Organized Structure",
      content:"Accordion sections help break down information into digestible chunks, preventing overwhelming walls of text. Users can quickly scan titles and expand only the sections they need, improving readability."
    },
    { 
      id:2,
       label: "User-Friendly Interactivity",
      content:"A well-designed accordion enhances navigation by allowing users to control what they view. This minimizes clutter, keeps pages visually clean, and improves user experience, especially on mobile devices."
    },
    {
      id:3,
       label: "Space Optimization",
      content:"If you're working with limited screen real estate, an accordion is a great way to display more content without making the layout feel overcrowded. This is perfect for FAQs, product details, or step-by-step guides."
    }
  ]

 return <div>
  <Accordion items={items}/>
 </div>
  
}
export default App;
