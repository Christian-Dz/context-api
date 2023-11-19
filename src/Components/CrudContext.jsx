import { createContext, useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

export const CrudContext = createContext();

export function CrudProvider({ children }) {

  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/santos";

  // GET
  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      if (!res.err) {
        setDb(res);
        setError(null);
      } else {
        setDb(null);
        setError(res);
      }
      setLoading(false);
    });
  }, [url]);

  // CREATE - POST
  const createData = (data) => {
    data.id = Date.now();
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
    setDb([...db, data]);
  };

  // UPDATE - PUT
  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  // DELETE
  const deleteData = (id) => {
    let isDelete = confirm(`Confirm Delete ID ${id}?`);

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  const data = {
    db,
    setDb,
    dataToEdit,
    setDataToEdit,
    error,
    setError,
    loading,
    setLoading,
    createData,
    updateData,
    deleteData
};

  return (
  <CrudContext.Provider value={data}>
    {children}
    </CrudContext.Provider>
  )
}
