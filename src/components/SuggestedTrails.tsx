import trilhassugeridas from "../assets/trilhassugeridas.png";

export default function SuggestedTrails() {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <div className="text-center mx-4 my-3 cursor-pointer">
        <img
          src={trilhassugeridas}
          alt="Trilha sugerida"
          style={{ width: "280px", height: "160px", borderRadius: "10px" }}
        />
        <p className="text-white fw-bold mt-2" style={{ fontSize: "16px" }}>
          Java Iniciante (Disponível)
        </p>
      </div>

      <div className="text-center mx-4 my-3 cursor-pointer">
        <img
          src={trilhassugeridas}
          alt="Trilha sugerida"
          style={{
            width: "280px",
            height: "160px",
            borderRadius: "10px",
            opacity: 0.5,
          }}
        />
        <p className="text-white fw-bold mt-2" style={{ fontSize: "16px" }}>
          Java Intermediário (Bloqueado)
        </p>
        <p className="text-white" style={{ fontSize: "14px" }}>
          Finalizar java para iniciantes
        </p>
      </div>

      <div className="text-center mx-4 my-3 cursor-pointer">
        <img
          src={trilhassugeridas}
          alt="Trilha sugerida"
          style={{
            width: "280px",
            height: "160px",
            borderRadius: "10px",
            opacity: 0.5,
          }}
        />
        <p className="text-white fw-bold mt-2" style={{ fontSize: "16px" }}>
          Java Avançado (Bloqueado)
        </p>
        <p className="text-white" style={{ fontSize: "14px" }}>
          Finalizar java para iniciantes
        </p>
      </div>
    </div>
  );
}
