import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaBell, FaComments, FaEnvelope } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo-unifecaf.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Curso() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const progresso = 0;
  const diasRestantes = 45;

  const [conteudos, setConteudos] = useState([
    {
      titulo: "1. O que é Java?",
      resumo: "Java é uma linguagem de programação de alto nível...",
      completo: `Java é uma linguagem de programação de alto nível, orientada a objetos e portátil...
                [texto completo aqui]`,
      status: "Não iniciado",
    },
    {
      titulo: "2. Onde Java é utilizado?",
      resumo: "Java é amplamente utilizado em vários setores...",
      completo: `Java é amplamente utilizado em vários setores, como desenvolvimento web e mobile...
[texto completo aqui]`,
      status: "Não iniciado",
    },
    {
      titulo: "3. Ferramentas importantes no mundo Java",
      resumo:
        "Java é fortemente baseado na programação orientada a objetos (POO)...",
      completo: `Java é fortemente baseado na programação orientada a objetos (POO), utilizando ferramentas como...
[texto completo aqui]`,
      status: "Não iniciado",
    },
  ]);

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

      {/* Modal com conteúdo completo */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
      >
        <Modal.Body className="text-dark p-4 rounded">
          <h4>{conteudos[currentStep].titulo}</h4>
          <h5 className="fw-semibold text-primary">
            {conteudos[currentStep].titulo.split(". ")[1]}
          </h5>
          <p>{conteudos[currentStep].completo}</p>
          <div className="text-end">
            <Button
              className="bg-jade text-white fw-semibold border-0 px-5 py-2 rounded"
              onClick={() => {
                const atualizado = [...conteudos];
                atualizado[currentStep].status = "Concluído";
                setConteudos(atualizado);

                const confetti = document.createElement("div");
                confetti.innerHTML = "🎉 Concluído!";
                Object.assign(confetti.style, {
                  position: "fixed",
                  top: "40%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  background: "#28a745",
                  color: "#fff",
                  padding: "20px 40px",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  fontSize: "24px",
                  zIndex: 9999,
                  animation: "fadeOut 2s forwards",
                });
                document.body.appendChild(confetti);
                setTimeout(() => {
                  document.body.removeChild(confetti);
                }, 2000);

                setShowModal(false);
              }}
            >
              Concluir
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
