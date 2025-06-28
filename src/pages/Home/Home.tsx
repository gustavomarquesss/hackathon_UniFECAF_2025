import Logo from "../../assets/logo-unifecaf.png";
import cursojava from "../../assets/cursojava.png";
import cursoreact from "../../assets/cursoreact.jpg";
import cursosql from "../../assets/cursosql.jpg";
import TrailCard from "../../components/TrailCard";
import { FaEnvelope, FaComments, FaBell } from "react-icons/fa";
import SuggestedTrails from "../../components/SuggestedTrails";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-vh-100 bg-prussian-blue d-flex flex-column text-white px-5 py-4">
      <div className="w-100 d-flex justify-content-between align-items-center mb-5">
        <Link to="/home">
          <img
            src={Logo}
            alt="Logo UniFECAF"
            style={{ height: "40px" }}
            className="cursor-pointer"
          />
        </Link>
        <div className="d-flex gap-3 align-items-center">
          <FaEnvelope size={22} color="#a8d0db" className="cursor-pointer" />
          <FaComments size={22} color="#a8d0db" className="cursor-pointer" />
          <FaBell size={22} color="#a8d0db" className="cursor-pointer" />
          <div
            className="bg-light-blue text-dark fw-bold px-3 py-1 rounded cursor-pointer"
            onClick={() => navigate("/perfil")}
          >
            PV
          </div>
        </div>
      </div>

      <h1 className="text-success fw-bold mb-4">Suas trilhas</h1>
      <div className="d-flex flex-wrap justify-content-center">
        <div className="mx-3 my-3">
          <div
            onClick={() => navigate("/curso")}
            className="cursor-pointer"
            style={{ textDecoration: "none" }}
          >
            <TrailCard image={cursojava} title="Java" percentage={0} />
          </div>
        </div>
        <div className="mx-3 my-3">
          <TrailCard image={cursoreact} title="React" percentage={66} />
        </div>
        <div className="mx-3 my-3">
          <TrailCard image={cursosql} title="MySQL" percentage={33} />
        </div>
      </div>

      <h1 className="text-success fw-semibold mt-5 mb-5">
        Trilhas sugeridas com base nas suas escolhas
      </h1>
      <SuggestedTrails />
    </div>
  );
}
