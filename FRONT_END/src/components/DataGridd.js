import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import Delete from './Delete'
import axios from 'axios'
// import React, { Component } from 'react'

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
// class check extends React.Component
// {
   const DataGridd = () => {
  
    const [edit,setEdit]=useState([])
    
    console.log(edit);
    
    const [display,setDisplay]=useState([])
    useEffect(() => {
        axios.get(`http://localhost:8080/highradiuss/Fetch?`)
        .then(res =>{
            // console.log(res)
            setDisplay(res.data)
        })
  
        
        .catch(err =>{
            console.log(err)
        })
  
        
    },[])
  
    return (
      
      <div style={{ height: 650, width: '100%' }}>
        
        <DataGrid
          rows={display}
          columns={columns}
          pageSize={10}
          checkboxSelection
  
          
  
          
          getRowId={(row) => row.sl_no}
          onSelectionModelChange={edit=>setEdit(edit)
  
          }
  
        />
      </div>
    )
  }
   
// }


export default DataGridd