package InsertData_9;
import Pojo_9.Pojo_91;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import java.util.*;
import java.lang.*;

@WebServlet("/editInvoice")
public class editInvoice extends HttpServlet {
  private static final long serialVersionUID = 1L;
       

  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    // TODO Auto-generated method stub
    try {
    	HashMap<Object, Object> Response = new HashMap <Object, Object> ();
           int sl_no=Integer.parseInt(request.getParameter("sl_no"));
           String invoice_currency=request.getParameter("invoice_currency");
           String cust_payment_terms=request.getParameter("cust_payment_terms");
            
           
     
        Connection con=null;
        Statement st=null;
      

        Class.forName("com.mysql.cj.jdbc.Driver");
		con=DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","root");
        st=con.createStatement();
      String query = "UPDATE winter_internship SET invoice_currency = ?, cust_payment_terms = ? WHERE sl_no = ?";
      
      PreparedStatement ps1 = con.prepareStatement(query);
      ps1.setString(1, invoice_currency);
      ps1.setString(2,cust_payment_terms );
      ps1.setInt(3, sl_no);
      
      
      ps1.executeUpdate();
      if (ps1.executeUpdate() > 0) {
    	  Response.put("update", true);
      }else {
    	  Response.put("update", false);
      }
      
      Gson gson = new Gson() ;
   	  String Responsejson = gson.toJson(Response);
   	  response.getWriter().append (Responsejson);
	   response.setHeader("Access-Control-Allow-Origin", "*");
      
      con.close();
    }
    
    catch(Exception e) {
    	e.printStackTrace();
    }
  }
} 
 
