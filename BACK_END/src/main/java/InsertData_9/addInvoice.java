package InsertData_9;
//import Pojo_9;

import java.util.*;
import java.io.IOException;
import java.sql.Connection;
import java.sql.*;
import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Database_9.Database_91;

import java.net.*;
import javax.servlet.*;


@WebServlet("/addInvoice")
public class addInvoice extends HttpServlet {
  private static final long serialVersionUID = 1L;
  
    

 
  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    // TODO Auto-generated method stub
    response.getWriter().append("Served at: ").append(request.getContextPath());
    try {
     
      String business_code =  request.getParameter("business_code");
      int cust_number = Integer.parseInt(request.getParameter("cust_number"));
      String clear_date=request.getParameter("clear_date");
      int buisness_year = Integer.parseInt(request.getParameter("buisness_year"));
      
      String doc_id =  request.getParameter("doc_id");
      String posting_date=request.getParameter("posting_date");
      String document_create_date = request.getParameter("document_create_date");
      
      String due_in_date =  request.getParameter("due_in_date");
      String invoice_currency=request.getParameter("invoice_currency");
      String document_type = request.getParameter("document_type");
      
      int posting_id =  Integer.parseInt(request.getParameter("posting_id"));
      double total_open_amount=Double.parseDouble(request.getParameter("total_open_amount"));
      String baseline_create_date = request.getParameter("baseline_create_date");
      String cust_payment_terms =  request.getParameter("cust_payment_terms");
      int invoice_id = Integer.parseInt(request.getParameter("invoice_id"));
      int sl_no=0;
      
      
Connection con=null;
Statement st=null;
PreparedStatement ps=null;

Class.forName("com.mysql.cj.jdbc.Driver");
con=Database_91.initializeDatabase_1();
st=con.createStatement();

// Fetch latest sl_no from database
PreparedStatement ps1 = con.prepareStatement("SELECT sl_no FROM winter_internship ORDER BY sl_no DESC LIMIT 1");
ResultSet rt = ps1.executeQuery();
while(rt.next()) {
	sl_no=rt.getInt("sl_no");
}
/*
// write data into invoice object
List<invoice> in=new ArrayList<invoice>();
in.add(new invoice(sl_no+1,business_code, cust_number, clear_date, buisness_year, doc_id, posting_date, document_create_date, due_in_date, invoice_currency, document_type, posting_id, total_open_amount, baseline_create_date, cust_payment_terms, invoice_id));
*/

 final String INSERT_USERS_SQL = "INSERT INTO winter_internship" + "  (business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id,sl_no) VALUES "+ " (?,?, ?, ?,?, ?, ?,?, ?, ?,?, ?, ?,?, ?, ?);";
     ps = con.prepareStatement(INSERT_USERS_SQL);
      ps.setString(1, business_code);
      ps.setInt(2, cust_number);
      ps.setString(3, clear_date);
      ps.setInt(4, buisness_year);
      ps.setString(5,doc_id);
      ps.setString(6, posting_date);
      ps.setString(7, document_create_date); 
      ps.setString(8,due_in_date);
      ps.setString(9,invoice_currency);
      ps.setString(10,document_type );
      ps.setInt(11,  posting_id);
      ps.setDouble(12, total_open_amount);
      ps.setString(13,baseline_create_date);
      ps.setString(14, cust_payment_terms);
      ps.setInt(15, invoice_id);
      ps.setInt(16, sl_no+1);
      ps.executeUpdate();
      System.out.println(ps);
      con.close();
      

    }
    catch (Exception e) {
      e.printStackTrace();
    }
   
  }

 
 

}