import React, {  useState } from 'react';
import { FormControl, FormLabel,  FormHelperText, Button, Input, VStack } from '@chakra-ui/react'
import {  url } from '../data'
import { ContextInfo } from '../context/context';
import axios from 'axios';
const InputForm = () => {
    const [loading, setLoading] = useState(false);
    const [title, setTitle] =  useState();
    const [description, setDescription] = useState();
    const {setItems} = ContextInfo();
    console.log(`${url}/products`)

    const submitHandler = async () => {
        setLoading(true);
      
        console.log(`${url}/products`)
        try{
            const {data} = await axios.post(`${url}/products`, {title, description});
            console.log(data.data);
            setItems((prevItems)=>[...prevItems, data.data])
          
            setLoading(false);
        }catch(error){
            setLoading(false);
            console.log(error);
        }
    };

  return (
    
        <VStack direction='row' spacing={6} rounded='md' shadow='md' bg='teal' color='white' >
      <FormControl isRequired >
      <FormLabel>Title</FormLabel>
      <Input type='text' onChange={(e)=>setTitle(e.target.value)} />
      <FormHelperText>Add an Item.</FormHelperText>
       </FormControl>
      <FormControl>
      <FormLabel isRequired >Description</FormLabel>
      <Input type='text' onChange={(e)=>setDescription(e.target.value)} />
      <FormHelperText>Description is requried.</FormHelperText>
      </FormControl>
       <Button colorScheme='whiteAlpha' variant='solid' isLoading={loading} onClick={submitHandler}>
       Button
      </Button>
       </VStack>

  )
}

export default InputForm
