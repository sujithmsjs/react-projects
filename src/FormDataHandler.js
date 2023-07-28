import { useState } from "react";
import DataTable from "./DataTable";
import MyForm from "./MyForm";

const FormDataHandler = () => {
  const [data, setData] = useState([]);

  const handleAction = (data) => {
    switch (data.action) {
      case "Push":
        setData((prevData) => [...prevData, data]);
        break;
      case "Shift":
        setData((prevData) => [data, ...prevData]);
        break;
      case "Add At":
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <MyForm onAction={handleAction} />
      <DataTable data={data} />
    </div>
  );
};

export default FormDataHandler;
