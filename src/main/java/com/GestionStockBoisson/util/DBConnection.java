package com.GestionStockBoisson.util;

import java.sql.*;

public class DBConnection {

    public static Connection getConnection() {

        Connection con = null;

        try {

            Class.forName("com.mysql.cj.jdbc.Driver");

            con = DriverManager.getConnection(
                "jdbc:mysql://127.0.0.1:3306/stock_boissons",
                "root",
                ""
            );

            System.out.println("Connexion réussie");
           
        } catch (Exception e) {
        	System.out.println("========== TSISY CONNEXION LTY EEEE ==========");
            e.printStackTrace();
        }

        return con;
    }
}