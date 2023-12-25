import axios from "axios";
import { url } from "../data";
import { useDisclosure } from "@chakra-ui/react";

const { createContext, useState, useContext } = require("react");

const Context = createContext();

const ContextProvider = ({children}) =>{
  
  const [items, setItems] = useState([]);

  const fetchData = async () =>{
    try{
       const {data} = await axios.get(`${url}/products`);
       console.log(data.result);
       setItems(data.result);
      
    }catch(error){
        console.log(error)
    }
  }
    return(
        <Context.Provider value={{ fetchData, items ,setItems}}>
            {children}
        </Context.Provider>
    )
}


export const ContextInfo = () =>{
    return useContext(Context);
}


export default ContextProvider