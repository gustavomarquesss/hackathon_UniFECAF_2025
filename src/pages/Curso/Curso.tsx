import { useState } from "react";
import { FaBell, FaComments, FaEnvelope } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo-unifecaf.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import TrailContentModal from "../../components/TrailContentModal";
import conteudosJava from "../../data/conteudoJava";

export default function Curso() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [conteudos, setConteudos] = useState(conteudosJava);

  const progresso = 0;
  const diasRestantes = 45;

  return (
    <div className="bg-prussian-blue text-white min-vh-100 px-4 py-4">
      <div className="w-100 d-flex justify-content-between align-items-center px-5 py-3">
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

      <div style={{ maxWidth: "1260px", margin: "0 auto" }}>
        <div className="d-flex align-items-end gap-2 flex-wrap">
          <h1 className="text-success fw-bold mb-0">
            Continue Sua Trilha de Java
          </h1>
          <h4 className="text-secondary fw-normal mb-1">
            ({diasRestantes} dias restantes)
          </h4>
        </div>

        <div
          className="my-3"
          style={{
            height: "20px",
            backgroundColor: "#ccc",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              width: `${progresso}%`,
              height: "100%",
              backgroundColor: "#28a745",
              borderRadius: "10px",
            }}
          />
        </div>
        <p className="text-end text-success fw-bold">{progresso}%</p>

        <div
          className="p-4 mt-5"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "12px",
            maxWidth: "1280px",
            margin: "0 auto",
          }}
        >
          {conteudos.map((item, index) => (
            <div
              key={index}
              className="bg-white text-dark p-4 rounded-3 mb-4 d-flex justify-content-between align-items-center flex-wrap cursor-pointer"
              style={{
                border: "1.5px solid #1d4d80",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                minHeight: "110px",
                transition: "transform 0.2s ease",
              }}
              onClick={() => {
                const atualizado = [...conteudos];
                if (atualizado[index].status !== "Concluído") {
                  atualizado[index].status = "Em andamento";
                  setConteudos(atualizado);
                }

                setCurrentStep(index);
                setShowModal(true);
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.01)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <div className="pe-3" style={{ flex: "1 1 75%" }}>
                <h5 className="fw-bold mb-2">{item.titulo}</h5>
                <p className="mb-0 text-secondary">{item.resumo}</p>
              </div>
              <div
                className="text-end"
                style={{ width: "80px", height: "80px" }}
              >
                <CircularProgressbar
                  value={
                    item.status === "Concluído"
                      ? 100
                      : item.status === "Em andamento"
                      ? 50
                      : 0
                  }
                  text={
                    item.status === "Concluído"
                      ? "✔"
                      : item.status === "Em andamento"
                      ? "50%"
                      : "Não iniciado"
                  }
                  styles={buildStyles({
                    textSize: "14px",
                    textColor:
                      item.status === "Concluído" ? "#28a745" : "#1d4d80",
                    pathColor:
                      item.status === "Concluído"
                        ? "#28a745"
                        : item.status === "Em andamento"
                        ? "#ffc107"
                        : "#ccc",
                    trailColor: "#eee",
                  })}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <TrailContentModal
        show={showModal}
        onClose={() => setShowModal(false)}
        currentContent={conteudos[currentStep]}
        onComplete={() => {
          const atualizado = [...conteudos];
          atualizado[currentStep].status = "Concluído";
          setConteudos(atualizado);
        }}
      />
    </div>
  );
}
