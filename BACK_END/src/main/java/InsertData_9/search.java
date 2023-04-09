package InsertData_9;
import Pojo_9.Pojo_91;


import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
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

//@WebServlet("/search")
public class search extends HttpServlet {
  private static final long serialVersionUID = 1L;
       

  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    // TODO Auto-generated method stub
    try {
    	HashMap<Object, Object> Response = new HashMap <Object, Object> ();
        ArrayList<Pojo_91> pojos = new ArrayList<Pojo_91>(); 
           
        String search = request.getParameter("search");

        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection con=null;
        Statement st=null;
		con=DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","root");
        st=con.createStatement();
      String query = "Select * from winter_internship WHERE '?' in (buisness_year, cust_number, invoice_id, doc_id )";
      
      PreparedStatement ps1 = con.prepareStatement(query);
      ps1.setString(1, search);
      ResultSet rs= ps1.executeQuery();
      
      while(rs.next()) {
    	  Pojo_91 pojoe=new Pojo_91();
    	  pojoe.setSl_no(rs.getInt("sl_no"));
    	  pojoe.setBusiness_code(rs.getString("business_code"));
    	  pojoe.setCust_number(rs.getInt("cust_number"));
    	  pojoe.setClear_date(rs.getString("clear_date"));
    	  pojoe.setBuisness_year(rs.getInt("buisness_year"));
    	  pojoe.setDoc_id(rs.getString("doc_id"));
    	  pojoe.setPosting_date(rs.getString("posting_date"));
    	  pojoe.setDocument_create_date(rs.getString("document_create_date"));
    	  pojoe.setDue_in_date(rs.getString("due_in_date"));
    	  pojoe.setInvoice_currency(rs.getString("invoice_currency"));
    	  pojoe.setDocument_type(rs.getString("document_type"));
    	  pojoe.setPosting_id(rs.getInt("posting_id"));
    	  pojoe.setTotal_open_amount(rs.getDouble("total_open_amount"));
    	  pojoe.setBaseline_create_date(rs.getString("baseline_create_date"));
    	  pojoe.setCust_payment_terms(rs.getString("cust_payment_terms"));
    	  pojoe.setInvoice_id(rs.getInt("invoice_id"));
    	  pojos.add(pojoe);
      }
      
      Response.put("Search", pojos);
      
      Gson gson = new Gson() ;
   	  String Responsejson = gson.toJson(Response);
   	  response.getWriter().append (Responsejson);
	   
      
      con.close();
    }
    
    catch(Exception e) {
    	e.printStackTrace();
    }
  }
}