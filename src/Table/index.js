import React, {useState, useEffect} from 'react';
import {DataGrid} from '@material-ui/data-grid';

const columns = [
 {field: 'id', headerName: 'ID'},
 {field: 'title', headerName: 'Frete', width: 300},
 {field: 'body', headerName: 'Peso do(s) Produto', width: 600}
]


const DataTable = () => {
const [tableData, setTableData] = useState([]);

useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((data) => data.json())
    .then((data) => setTableData(data))
})

    return (
        <div style={{height: 270, width: '100%'}}>
            <DataGrid 
            rows={tableData}
            columns={columns}
            pageSize={10}
            checkboxSelection
            />
        </div>
    )
}

export default DataTable;