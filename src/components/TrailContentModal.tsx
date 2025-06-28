import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

interface TrailContentModalProps {
  show: boolean;
  onClose: () => void;
  currentContent: {
    titulo: string;
    subtitulo: string;
    completo: string;
    status: string;
    videoUrl?: string;
    tipo?: string;
    alternativas?: { id: string; texto: string }[];
    respostaCorreta?: string;
  };
  onComplete: () => void;
}

export default function TrailContentModal({
  show,
  onClose,
  currentContent,
  onComplete,
}: TrailContentModalProps) {
  const [respostaSelecionada, setRespostaSelecionada] = useState<string | null>(
    null
  );
  const [respostaCorreta, setRespostaCorreta] = useState<boolean | null>(null);

  const verificarResposta = () => {
    const correta = currentContent.respostaCorreta === respostaSelecionada;
    setRespostaCorreta(correta);
    if (correta) {
      onComplete();
    }
  };
  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      size="lg"
      contentClassName="border-0 shadow-lg rounded-4"
    >
      <Modal.Body className="p-5 position-relative">
        <button
          onClick={onClose}
          className="position-absolute top-0 end-0 m-3 bg-transparent border-0 fs-3"
          aria-label="Fechar"
        >
          ×
        </button>

        <h3
          className="fw-bold mb-1 text-prussian-blue"
          style={{ fontSize: "1.5rem" }}
        >
          {currentContent.titulo}
        </h3>
        <h5
          className="fw-semibold text-secondary mb-4"
          style={{ fontSize: "1rem" }}
        >
          {currentContent.subtitulo}
        </h5>

        {currentContent.tipo === "quiz" ? (
          <>
            <p className="text-dark lh-lg fs-6">{currentContent.completo}</p>
            <form className="mt-3">
              {currentContent.alternativas?.map((alt) => (
                <div key={alt.id} className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="quiz"
                    value={alt.id}
                    checked={respostaSelecionada === alt.id}
                    onChange={() => setRespostaSelecionada(alt.id)}
                    id={`alt-${alt.id}`}
                  />
                  <label className="form-check-label" htmlFor={`alt-${alt.id}`}>
                    {alt.id}) {alt.texto}
                  </label>
                </div>
              ))}
            </form>

            {respostaCorreta !== null && (
              <div
                className={`mt-3 alert ${
                  respostaCorreta ? "alert-success" : "alert-danger"
                }`}
              >
                {respostaCorreta
                  ? "Resposta correta! Você mandou bem!"
                  : "Resposta incorreta. Tente novamente!"}
              </div>
            )}
          </>
        ) : (
          <>
            <p className="text-dark lh-lg fs-6">{currentContent.completo}</p>
            {currentContent.videoUrl && (
              <div className="mb-3" style={{ textAlign: "center" }}>
                <iframe
                  width="100%"
                  height="315"
                  src={currentContent.videoUrl}
                  title="Vídeo explicativo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </>
        )}

        <div className="text-end mt-4">
          {currentContent.tipo === "quiz" ? (
            <Button
              style={{ backgroundColor: "#00B894" }}
              className="text-white fw-semibold border-0 px-5 py-2 rounded"
              onClick={verificarResposta}
              disabled={!respostaSelecionada || respostaCorreta === true}
            >
              Verificar
            </Button>
          ) : (
            <Button
              style={{ backgroundColor: "#00B894" }}
              className="text-white fw-semibold border-0 px-5 py-2 rounded"
              onClick={() => {
                onComplete();
                onClose();

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
              }}
            >
              Concluir
            </Button>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}
