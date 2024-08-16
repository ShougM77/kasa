import { Link } from "react-router-dom";
import Header from '../components/Layout/Header';
import "./ErrorPage.scss";
import Footer from "../components/Layout/Footer";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="error-container">
          <h1 className="error-title">404</h1>
          <p className="error-msg">Oups! La page que vous demandez n'existe pas.</p>
        </div>
        <div className="back-link">
          <Link 
            to="/" 
            aria-label="Retourner sur la page d'accueil" 
            style={{ color: "#ff6060", textDecoration: "none" }}
          >
            Retourner sur la page d'accueil
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;
