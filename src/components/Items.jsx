import React, { useEffect } from 'react'
import { ContextInfo } from '../context/context'
import { AbsoluteCenter, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

const Items = () => {

    const {fetchData, items} = ContextInfo();
    console.log(fetchData)
    useEffect(()=>{
      fetchData();
    },[])
    console.log(items,fetchData);
  return (
    <div style={{marginTop:'15rem', padding:'10px'}}>
      <AbsoluteCenter>
<TableContainer  display='block' maxWidth='100%'   whiteSpace='nowrap' overflowX='auto' >
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Title</Th>
        <Th>Description</Th>
      </Tr>
    </Thead>
    <Tbody>
     {items.map(item=>(
      <Tr key={item._id}>
        <Td>{item.title}</Td>
        <Td>{item.description}</Td>
      </Tr>
      ))}
    </Tbody>
  </Table>
</TableContainer>
</AbsoluteCenter>
    </div>
  )
}

export default Items
