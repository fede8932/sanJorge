import React, { useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import * as XLSX from "xlsx";

function ExcelUpload(props) {
  const { state, fnState } = props;
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (e) => {
    fnState({ products: [], loading: true });
    const file = e.target.files[0];
    setSelectedFile(file);
    processExcel(file);
  };

  const processExcel = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      if (jsonData.length === 0) {
        console.error("El archivo está vacío");
        return;
      }

      const headers = jsonData[0];
      const dataArray = [];

      for (let i = 1; i < jsonData.length; i++) {
        const row = jsonData[i];
        const rowData = {};

        for (let j = 0; j < headers.length; j++) {
          rowData[headers[j]] = row[j];
        }

        dataArray.push(rowData);
      }
      fnState({ products: dataArray, loading: false });
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div style={{ width: "45%", display: "flex", alignItems: "center" }}>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Subir listado de productos</Form.Label>
        <Form.Control type="file" accept=".xls" onChange={handleFileChange} />
      </Form.Group>
      {state && selectedFile? (
        <Spinner
          animation="border"
          variant="secondary"
          size="sm"
          style={{ margin: "12px 0px 0px 5px" }}
        />
      ) : null}
    </div>
  );
}

export default ExcelUpload;
