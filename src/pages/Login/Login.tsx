import { useState } from "react";
import { FaEnvelope, FaComments, FaBell } from "react-icons/fa";
import Logo from "../../assets/logo-unifecaf.png";
import "../../styles/global.css";
import { useNavigate } from "react-router-dom";
import loading from "../../assets/loading.png";
import loadingOk from "../../assets/loadingok.png";

export default function Login() {
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [loadingState, setLoadingState] = useState<"idle" | "loading" | "done">(
    "idle"
  );

  const navigate = useNavigate();

  const handleLogin = () => {
    setLoadingState("loading");

    setTimeout(() => {
      setLoadingState("done");

      setTimeout(() => {
        navigate("/home");
      }, 1000);
    }, 1000);
  };

  return (
    <div className="min-vh-100 bg-prussian-blue d-flex flex-column justify-content-between px-4 py-5">
      <div className="d-flex justify-content-between align-items-center">
        <img src={Logo} alt="Logo UniFECAF" style={{ height: "40px" }} />

        <div className="d-flex gap-3 align-items-center">
          <FaEnvelope size={24} color="#a8d0db" />
          <FaComments size={24} color="#a8d0db" />
          <FaBell size={24} color="#a8d0db" />
          <div className="bg-light-blue text-dark fw-bold px-3 py-1 rounded">
            PV
          </div>
        </div>
      </div>

      <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
        {loadingState === "idle" ? (
          <div
            className="w-100 p-5 rounded shadow"
            style={{
              maxWidth: "460px",
              backgroundColor: "rgba(255, 255, 255, 0.02)",
              backdropFilter: "blur(1px)",
            }}
          >
            <h1 className="text-jade fw-bold mb-2 text-center">
              Bem vindo de volta!
            </h1>
            <p className="text-white text-center mb-4 fw-semibold">
              Entre com seu login e sua senha
            </p>

            <div className="mb-3">
              <label className="form-label text-white">Login</label>
              <input
                type="text"
                className="form-control"
                placeholder="Entre com seu login"
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-white">Senha</label>
              <input
                type="password"
                className="form-control"
                placeholder="adicione sua senha"
              />
            </div>

            <div className="d-flex align-items-center mb-3">
              <button
                className={`toggle-btn ${keepLoggedIn ? "active" : ""}`}
                onClick={() => setKeepLoggedIn(!keepLoggedIn)}
              ></button>
              <span className="ms-2 text-white">Manter login</span>
            </div>

            <div className="bg-jade rounded-pill p-2 mb-3">
              <button
                onClick={handleLogin}
                className="btn bg-jade text-white w-100 fw-semibold border-0"
                style={{ borderRadius: "2rem" }}
              >
                Entrar
              </button>
            </div>

            <p className="text-white text-center">
              Não possui uma conta?{" "}
              <span
                className="text-jade fw-semibold"
                style={{ cursor: "pointer" }}
              >
                criar conta
              </span>
            </p>
          </div>
        ) : (
          <img
            src={loadingState === "loading" ? loading : loadingOk}
            alt="Carregando"
            style={{ width: "100px", transition: "opacity 0.5s ease-in-out" }}
          />
        )}
      </div>
    </div>
  );
}
