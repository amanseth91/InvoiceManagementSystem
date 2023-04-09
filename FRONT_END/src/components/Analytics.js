import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useState } from 'react';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: "#2d4250",
        border: '1px solid #000',
        borderRadius: '15px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function Analytics() {
  const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    
    const [clear_date, setcleardate] = useState('');
   
    const [due_in_date, setdueindate] = useState('');
    const [baseline_create_date, setbaselinecreatedate] = useState('');
    const [invoice_currency, setinvoicecurrency] = useState('');

    const analytical=()=>{
        console.log(clear_date);
        console.log(due_in_date);
        console.log(baseline_create_date);
        console.log(invoice_currency);

    };
    
    
    
    // const postdata=()=>{
    // //  onClose={handleClose}
    //  console.log(business_code);
    //  console.log(cust_number);
    //  console.log(clear_date);
    //  console.log(buisness_year);
    //  console.log(doc_id);
    //  console.log(posting_date);
    //  console.log(document_create_date);
    //  console.log(due_in_date);
    //  console.log(invoice_currency);
    //  console.log(document_type);
    //  console.log(posting_id);
    //  console.log(total_open_amount);
    //  console.log(baseline_create_date);
    //  console.log(cust_payment_terms);
    //  console.log(invoice_id);
    //  axios.post("http://localhost:8080/highRadiuss/addInvoice",null,{params:
    //  {
    //          business_code,
    //          cust_number,
    //          clear_date,
    //          buisness_year,
    //          doc_id,
    //          posting_date,
    //          document_create_date,
    //          due_in_date,
    //          invoice_currency,
    //          document_type,
    //          posting_id,
    //          total_open_amount,
    //          baseline_create_date,
    //          cust_payment_terms,
    //          invoice_id
    //  }}).then(res => {
    //   if (res.status === 200)
    //     alert('Successfully Inserted')
    //   else
    //     Promise.reject()
    // })
    // .catch(err => alert('Something went wrong'))
    // };
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [value, setValue] = React.useState('');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
    const handleChange_customerNumber = (event) => {
        setValue(event.target.value);
    };

  
    return (
        <div>
            <Button variant="contained" color="secondary" onClick={handleOpen} style={{
                borderRadius: 6,
                padding: "5px",
                border: '1px solid skyblue'
            }}>
                Analytics View
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 style={{color: 'white'}}>Analytics View</h2>
                        <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          maxWidth: 870,
          borderRadius: 3,
          alignContent: 'flex-start',
        }}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;
        
       
        <TextField
        id="date"
        label="Clear Date"
        type="date"
        defaultValue="2022-5-24"
        onChange={(e) => setcleardate(e.target.value)}
        margin='normal'
        style={{width: '23%'}}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />&nbsp;&nbsp;&nbsp;&nbsp;
      
      
        
          <TextField
          id="date"
          label="Due Date"
          type="date"
          margin='normal'
          onChange={(e) => setdueindate(e.target.value)}
          defaultValue="2022-5-24"
          style={{width: '23%'}}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          />
          <TextField
          id="date"
          label="Baseline Create Date"
          type="date"
          margin='normal'
          onChange={(e) => setbaselinecreatedate(e.target.value)}
          defaultValue="2022-5-24"
          style={{width: '23%'}}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          />&nbsp;&nbsp;&nbsp;&nbsp;
          <TextField
            id="filled-multiline-flexible"
            label="Invoice Currency"
            multiline
            maxRows={4}
            // value={value}
            onChange={(e) => setinvoicecurrency(e.target.value)}
            // onChange={handleChange}
            variant="filled"
            margin='normal'
          />&nbsp;&nbsp;&nbsp;&nbsp;
          
          
          
          
          
          
          <Button style={{width: '49%', border: '1px solid #2d4250', backgroundColor: '#2d4250', color: 'white'}} onClick={function(event){ analytical(); handleClose()}}>Analytics View</Button>&nbsp;&nbsp;
          <Button style={{width: '49%', border: '1px solid #2d4250', backgroundColor: '#2d4250', color: 'white'}} onClick={handleClose}>Cancel</Button>  
      </Box>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}