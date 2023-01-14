import "../styles/Footer.css";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import kamaleon from "../../assets/kmaleon.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerTopBox">
        <img alt="kamaleon" className="kamaleon" src={kamaleon} />
        <h3>Siguenos en nuestras redes:</h3>

        <div className="topIcons">
          <div className="boxUser">
            Kevin Mantilla:
            <a href={"https://www.facebook.com"}>
              <AiFillFacebook size={30} color="white" />
            </a>
            <a
              href={
                "https://www.linkedin.com/in/kevin-alexander-mantilla-3238a5213/"
              }
            >
              <AiFillLinkedin size={30} color="white" />
            </a>
            <a href={"https://github.com/khebinSd"}>
              <AiFillGithub size={30} color="white" />
            </a>
            <a href={"https://www.instagram.com"}>
              <AiFillInstagram size={30} color="white" />
            </a>
          </div>

          <div className="boxUser">
            David Lozada:
            <a href={"https://www.facebook.com"}>
              <AiFillFacebook size={30} color="white" />
            </a>
            <a href={"https://www.linkedin.com/in/david-lozada471/"}>
              <AiFillLinkedin size={30} color="white" />
            </a>
            <a href={"https://github.com/DashCode47"}>
              <AiFillGithub size={30} color="white" />
            </a>
            <a href={"https://www.instagram.com"}>
              <AiFillInstagram size={30} color="white" />
            </a>
          </div>
        </div>
      </div>

      <div className="footerBotBox">
        <div>
          <h4>FantasyTeam</h4>
          <span>Tus equipos favoritos en un solo lugar</span>
        </div>

        <div className="contactContainer">
          <h4>Contacto:</h4>
          <div className="contactRow">
            <BsFillHouseDoorFill size={22} color="white" />
            <span>Quito,UIO,EC</span>
          </div>
          <div className="contactRow">
            <GrMail size={22} color="white" />
            <a href="mailto:davsh47@hotmail.com">
              <span>mantillagka@mail.com</span>
            </a>
          </div>
          <div className="contactRow">
            <GrMail size={22} color="white" />
            <a href="mailto:davsh47@hotmail.com">
              <span>davsh47@hotmail.com</span>
            </a>
          </div>
        </div>
        <div className="contactContainer">
          <h4>Links de utilidad:</h4>

          <Link to={"/fantasy-teams"} className="contactRow">
            <span>-Fantasy Team</span>
          </Link>

          <Link to={"/search-players"} className="contactRow">
            <span>-Jugadores</span>
          </Link>

          <Link to={"/search-teams"} className="contactRow">
            <span>-Equipos</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
