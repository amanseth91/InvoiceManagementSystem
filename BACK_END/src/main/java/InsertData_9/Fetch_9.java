package InsertData_9;


import java.io.IOException;
	import java.util.ArrayList;

	import javax.servlet.ServletException;
	import javax.servlet.annotation.WebServlet;
	import javax.servlet.http.HttpServlet;
	import javax.servlet.http.HttpServletRequest;
	import javax.servlet.http.HttpServletResponse;

import com.google.gson.*;
	import Pojo_9.Pojo_91;

	

		/**
		 * Servlet implementation class Fetch
		 */
		@WebServlet("/Fetch")
		public class Fetch_9 extends HttpServlet {
		 private static final long serialVersionUID = 1L;
		       
		    /**
		     * @see HttpServlet#HttpServlet()
		     */
		    public Fetch_9() {
		        super();
		        // TODO Auto-generated constructor stub
		    }

		 /**
		  * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
		  */
		 protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		  // TODO Auto-generated method stub
		  //response.getWriter().append("Served at: ").append(request.getContextPath());
		  
		   Crud_9 fetchdata=new Crud_9();
		   
		    ArrayList<Pojo_91> data = fetchdata.getData();
		    //System.out.println(data);
		     
		     Gson gson = new Gson();
		   String respData = gson.toJson(data);
		   
		   response.getWriter().print(respData);
		 }

		 /**
		  * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
		  */
		 protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		  // TODO Auto-generated method stub
		  //doGet(request, response);
		 }

		}


