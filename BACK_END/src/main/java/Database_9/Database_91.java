package Database_9;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


public class Database_91 {
	public static Connection initializeDatabase_1()
			throws SQLException, ClassNotFoundException
		{
			// Initialize all the information regarding
			// Database Connection
			String dbDriver = "com.mysql.cj.jdbc.Driver";
			String dbURL = "jdbc:mysql:// localhost:3306/grey_goose";
			// Database name to access
		
			String dbUsername = "root";
			String dbPassword = "root";

			Class.forName(dbDriver);
			Connection con = DriverManager.getConnection(dbURL,
														dbUsername,
														dbPassword);
			return con;
		}


	

}
