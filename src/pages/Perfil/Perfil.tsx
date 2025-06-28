import Logo from "../../assets/logo-unifecaf.png";
import JavaPrata from "../../assets/javaprata.png";
import { FaEnvelope, FaComments, FaBell } from "react-icons/fa";
import MySql from "../../assets/mysql.png";
import React from "../../assets/react.png";
import GitHub from "../../assets/github.png";
import Python from "../../assets/desabilitado.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Perfil() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    telefone: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  // Simula carregamento de dados (depois troque pelo seu fetch/axios)
  useEffect(() => {
    // Aqui entra sua chamada real à API (futuramente)
    // ex: fetch("http://localhost:3000/api/user")

    setTimeout(() => {
      setFormData({
        email: "paulo.victor@fecaf.com.br",
        telefone: "(11) 91234-5678",
      });
      setIsLoading(false);
    }, 1000); // simula o delay de uma API
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValue = name === "telefone" ? formatPhoneNumber(value) : value;

    setFormData({ ...formData, [name]: newValue });
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = () => {
    // Aqui você fará o PUT ou PATCH para salvar no backend
    console.log("Salvar no backend:", formData);
    setIsEditing(false);
  };

  if (isLoading) return <p className="text-light">Carregando...</p>;

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "");

    if (cleaned.length <= 10) {
      return cleaned.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    }

    return cleaned.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
  };

  return (
    <div className="min-vh-100 bg-prussian-blue d-flex flex-column">
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

      <div className="flex-grow-1 d-flex justify-content-center align-items-top px-4 py-5">
        <div className="text-light w-100" style={{ maxWidth: "960px" }}>
          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="bg-light-blue text-dark fw-bold px-3 py-1 rounded fs-5">
              PV
            </div>
            <h2 className="mb-0">Paulo Victor</h2>
          </div>

          <h1 className="text-light-blue fw-semibold mb-5">Suas Conquistas</h1>

          <div className="d-flex flex-wrap justify-content-center w-100 custom-gap mt-5">
            <div className="text-center">
              <img
                src={JavaPrata}
                alt="Java prata"
                style={{ height: "100px" }}
              />
              <p className="text-light-blue fw-bold mt-2">Java prata</p>
            </div>

            <div className="text-center">
              <img src={MySql} alt="MySql" style={{ height: "100px" }} />
              <p className="text-light-blue fw-bold mt-2">Desabilidato</p>
            </div>

            <div className="text-center">
              <img src={Python} alt="Python" style={{ height: "100px" }} />
              <p className="text-light-blue fw-bold mt-2">Desabilitado</p>
            </div>

            <div className="text-center">
              <img src={React} alt="React" style={{ height: "100px" }} />
              <p className="text-light-blue fw-bold mt-2">Desabilitado</p>
            </div>

            <div className="text-center">
              <img src={GitHub} alt="GitHub" style={{ height: "100px" }} />
              <p className="text-light-blue fw-bold mt-2">Desabilitado</p>
            </div>
          </div>

          <h1 className="text-light-blue fw-semibold mt-5 mb-5">
            Informações pessoais
          </h1>

          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="bg-light-blue text-dark fw-bold px-3 py-1 rounded fs-5">
              PV
            </div>
            <h2 className="mb-0">Paulo Victor</h2>
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              disabled={!isEditing}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Telefone de contato</label>
            <input
              type="text"
              name="telefone"
              value={formData.telefone}
              disabled={!isEditing}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="text-end">
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-jade text-white fw-semibold px-5 py-2 rounded border-0"
                style={{ outline: "none" }}
              >
                Editar
              </button>
            ) : (
              <div className="d-flex justify-content-end gap-3">
                <button
                  onClick={handleSave}
                  className="bg-jade text-white fw-semibold border-0 px-5 py-2 rounded"
                  style={{ outline: "none", boxShadow: "none" }}
                >
                  Salvar alterações
                </button>
                <button
                  onClick={handleCancel}
                  className="text-white fw-semibold px-5 py-2 rounded border border-white bg-transparent"
                  style={{ outline: "none" }}
                >
                  Cancelar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
