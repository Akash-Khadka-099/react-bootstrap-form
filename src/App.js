import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import FormFill from "./components/form/FormFill";
import TableData from "./components/form/TableData";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    class: "",
    universityName: "",
    fatherName: "",
    motherName: "",
    dob: "",
    temAdd: "",
    perAdd: "",
    email: "",
    ecoCondition: "",
    bloodGroup: "",
    image: "",
  });

  const handleOnSubmit = (data) => {
    setFormData(data)
  }

  console.log(formData);
  return (
    <>
      <FormFill submit={handleOnSubmit} />
      <TableData />
    </>
  );
}

export default App;
