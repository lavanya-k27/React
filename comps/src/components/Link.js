import {useContext} from "react"
import NavigationProvider from "../context/navigationContext"

function Link({to , children}){

  const {navigate} = useContext(NavigationProvider);

  const handleClick = (e)=>{
     e.preventDefault()
     navigate(to)
  }

  return <a onClick={handleClick}>{children}</a>
}

export default Link