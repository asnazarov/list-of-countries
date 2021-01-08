import React, {useState} from 'react';
import *as XLSX from 'xlsx';

const App = () => {
  const [items, setItems] = useState([])
  const [valueInp, setValueInp] = useState('')

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, {type: 'buffer'});
        const wsname = wb.SheetNames[0]
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data)
      };

      fileReader.onerror = (error) => {
        reject(error)
      };
    });
    promise.then((d) => {
      setItems(d)
    })
  };

  return (
    <div>
      <input type="file" onChange={(e) => {
        const file = e.target.files[0];
        readExcel(file)
      }}/>
      <ul>
        {
          items.map((obj, index) =>
            <li>
              <input
                onChange={e => setValueInp(e.target.value)}
                onClick={(e) => e.target.value === obj.fruit && setValueInp(obj.fruit)}
                value={obj.fruit}
                type="text"
                key={index}
              />
            </li>
          )
        }
      </ul>

    </div>
  );
}

export default App;
