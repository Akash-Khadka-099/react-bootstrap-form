import { useRef, useState } from "react";
import { Table, Button, FormControl } from "react-bootstrap";
function TableData() {
  const [noOfRows, setNoOfRows] = useState(1);
  const [tableData, setTableData] = useState({
    tableText : "",
  })
  

  const currentRef = useRef([]);

  const handleChange = (e) =>{
   setTableData({
     ...tableData,
    [e.target.name] : e.target.value
   })

  }
  return (
    <>
      <Table className="m-3 ">
        <thead className="text-center"> 
          <tr>
            <th>SN</th>
            <th>Text</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(noOfRows)].map((items, index) => {
            return (
              <tr
                ref={(trRef) => (currentRef.current[index] = trRef)}
                key={index}
              >
                <td>{index + 1}</td>

                <td>
                  <FormControl type="text" name="tableText" onChange={handleChange} />    
                </td>
                <td className="d-flex justify-content-center">
                  <Button
                    id={index}
                    value={index}
                    onClick={() => currentRef.current[index].remove()}
                    variant="danger"
                  >
                    delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className=" my-4 d-flex justify-content-center">
        <Button variant="success" onClick={() => setNoOfRows(noOfRows + 1)}>
          Add Row
        </Button>
      </div>
    </>
  );
}

export default TableData;
