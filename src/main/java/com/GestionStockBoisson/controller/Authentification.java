package com.GestionStockBoisson.controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;

import com.GestionStockBoisson.models.User;
import com.GestionStockBoisson.dao.UserDAO;

/**
 * Servlet implementation class Authentification
 */
@WebServlet({"/login", "/signup"})
public class Authentification extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Authentification() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String path = request.getServletPath();
		request.setAttribute("style", "style4auth.css");
		
		if ("/login".equals(path)) {
			request.getRequestDispatcher("/views/jsp/pages/login.jsp").forward(request, response);
		} else {
			request.getRequestDispatcher("/views/jsp/pages/sign_up.jsp").forward(request, response);
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			
		String path = request.getServletPath();
		String nom = request.getParameter("nom");
		String mdp =  request.getParameter("mdp");		
		
		UserDAO userDao = new UserDAO();
		HttpSession session = request.getSession();
		
		if ("/login".equals(path)) {			
			User user = userDao.login(nom, mdp);
			System.out.println(user);
			if (user != null) {
				session.setAttribute("id", user.getId());
				session.setAttribute("nom", user.getNom());
				response.sendRedirect(request.getContextPath() + "/Dashboard");
				//request.setAttribute("style", "style4dashboard.css");
				//request.setAttribute("js", "dashboard.js");
			} else {
				request.setAttribute("style", "style4auth.css");
				request.getRequestDispatcher("/views/jsp/pages/login.jsp?error=1").forward(request, response);
			}
		} else {
			String email = request.getParameter("email");
			int signup_ok = userDao.sign_up(nom, email, mdp);
			if (signup_ok != 0) {
				System.out.println("Inscription terminée avec succès");	
				response.sendRedirect(request.getContextPath() + "/Dashboard");
			} else {
				System.out.println("Oops! Une erreur s'est produite lors de l'inscription. Veuillez réessayer.");
				request.setAttribute("style", "style4auth.css");
				request.getRequestDispatcher("/views/jsp/pages/sign_up.jsp").forward(request, response);
			}
		}
		
	}

}
