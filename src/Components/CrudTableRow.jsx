import { useContext } from 'react'
import { CrudContext } from './CrudContext'

export const CrudTableRow = ({el}) => {
  const {setDataToEdit, deleteData} = useContext(CrudContext)
    let {name, constellation, id} = el

  return (
    <tr>
        <td>{name}</td>
        <td>{constellation}</td>
        <td>
           <button onClick={()=>setDataToEdit(el)}>Edit</button> 
           <button onClick={()=>deleteData(id)}>Delete</button> 
        </td>
    </tr>
  )
}
