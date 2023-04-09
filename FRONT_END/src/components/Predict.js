import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'

import axios from 'axios'

const columns = [
  { field: 'sl_no', headerName: 'sl_no',width: 200 },
  { field: 'business_code', headerName: 'buisness_code', width: 200 },
  { field: 'cust_number', headerName: 'customer number', width: 200 },
  { field: 'clear_date', headerName: 'clear_date',width: 200 },
  { field: 'buisness_year', headerName: 'buisness year', width: 200 },
  { field: 'doc_id', headerName: 'doc_id', width: 200 },
  { field: 'posting_date', headerName: 'posting_date' , width: 200},
  { field: 'document_create_date', headerName: 'document_create_date', width: 200 },
  { field: 'due_in_date', headerName: 'due_in_date', width: 200 },
  { field: 'invoice_currency', headerName: 'invoice_currency' , width: 200},
  { field: 'document_type', headerName: ' document_type', width: 200 },
  { field: 'posting_id', headerName: 'posting_id', width: 200 },
  { field: 'total_open_amount', headerName: 'total_open_amount' , width: 200},
  { field: 'baseline_create_date', headerName: 'baseline_create_date', width: 200 },
  { field: 'cust_payment_terms', headerName: 'cust_payment_terms', width: 200 },
  { field: 'invoice_id', headerName: 'invoice_id', width: 200 }
]
// const [edit,setEdit]=useState([])

const DataGridd = () => {
    // const serial_no=[];
    // serial_no.push(sl_no);
    // console.log(serial_no);

    // for(i=0;i<sl_no.le)

//   const [predict,setPredict]=useState()
  
//   console.log(predict);
  
  const [display,setDisplay]=useState([])
  useEffect(() => {
      axios.get(`http://localhost:8080/highRadiuss/display`)
      .then(res =>{
        //   console.log(res)
          setDisplay(res.data)
        //   for(i=0;i<res.data[0].length();i++){
        //     console.log(res.data[0][0][1]);

        //   }
        console.log(res.data[7]);
          
      })

      
      .catch(err =>{
          console.log(err)
      })

      // deleteRow(edit){  
      //   axios.delete(`http://localhost:8080/highRadiuss/delete`)
      //     .then(res => {  
      //       console.log(res);  
      //       console.log(res.data);  
        
      //       const invoice = this.state.edit.filter(item => item.sl_no== edit);  
      //       this.setState({ posts });  
      //     })
        
      // };

      // function deleteInvoice(edit){
      //   axios.delete('http://localhost:8080/highRadiuss/delete')
      //   .then(res=>{
      //     console.log(res);
      //     console.log(res.data);

      //     const invoice=this.state.edit.map(item=>item.sl_no)
      //   })
        
      // }
  },[])

  return (
    
    <div style={{ height: 650, width: '100%' }}>
      
      <DataGrid
        rows={display}
        columns={columns}
        pageSize={10}
        checkboxSelection

        

        
        getRowId={(row) => row.sl_no}
        // onSelectionModelChange={predict=>setPredict(predict)

        // }

        

      

        
        




        //onSelectionModelChange={({ selectionModel }) => {
          //const rowIds = selectionModel.map(rowId => parseInt(String(rowId), 10));
          //const rowsToDelete = display.filter(row => rowIds.includes(row.sl_no));
         // setDeletedRows(rowsToDelete);
          //console.log(deletedRows);
       // }}
      />
    </div>
  )
}

export default DataGridd