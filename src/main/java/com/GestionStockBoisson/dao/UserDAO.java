package com.GestionStockBoisson.dao;

import java.sql.*;
import com.GestionStockBoisson.models.User;
import com.GestionStockBoisson.util.DBConnection;

public class UserDAO {

	public User login(String nom, String mdp) {
		String sql = "SELECT*FROM users WHERE nom=? and mdp=?";
		try (Connection con = DBConnection.getConnection(); PreparedStatement ps = con.prepareStatement(sql)) {
			
			System.out.println("connexion: " + con);
			ps.setString(1, nom);
			ps.setString(2, mdp);

			ResultSet rs = ps.executeQuery();

			if (rs.next()) {
				User user = new User();
				user.setId(rs.getInt("id"));
				user.setNom(rs.getString("nom"));
				con.close();
				return user;
			} else { con.close(); }
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	// ajout de nouvel ustilisateur
	public boolean sign_up(String nom, String email, String mdp) {
		if (check_email(email)) {			
			String sql = "INSERT INTO users (nom, mdp, email) VALUES (?, ?, ?)";
			try (Connection con = DBConnection.getConnection(); PreparedStatement ps = con.prepareStatement(sql)) {	
				
				ps.setString(1, nom);
				ps.setString(2, mdp);
				ps.setString(3, email);
				
				int rowAffected = ps.executeUpdate();
				if (rowAffected > 0) {
					con.close();
					return true;
				} else { con.close(); }
			} catch (Exception e) {
				System.out.println("Exception: " + e);
			}
		}
		return false;
	}

	// vérifier si l'adresse email est déjà utilisée sinon insertion
	public boolean check_email(String email) {
		String sql = "SELECT*FROM users WHERE email=?";
		try (Connection con = DBConnection.getConnection(); PreparedStatement ps = con.prepareStatement(sql)) {

			ps.setString(1, email);

			ResultSet rs = ps.executeQuery();

			if (!rs.next()) {
				System.out.println("Adresse email déjà utilisée.");
				con.close();
				return true;
			} else { con.close(); }
		} catch (Exception e) {
			System.out.println("Exception: " + e);
		}
		return false;
	}

}
