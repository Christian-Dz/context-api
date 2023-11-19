import { useContext } from "react";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { Loader } from './Loader';
import { Message } from './Message';
import { CrudContext } from './CrudContext';

export const CrudApi = () => {
  const {loading, error, db} = useContext(CrudContext)
  return (
    <div>
        <h2>CRUD API Con CONTEXT API</h2>
        <CrudForm/>
        {loading && <Loader/>}
        {error && <Message 
        msg={`Error ${error.status} : ${error.statusText}`} 
        bgColor="#dc3545"/>}
        {db && <CrudTable/>}
    </div>
  )
}
