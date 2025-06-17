import {useContext} from "react"
import NavigationProvider from "../context/navigationContext"

function useNavigation(){

  return useContext(NavigationProvider)

}

export default useNavigation