import { useRouteLoading } from "../store/useRouteLoading";
import loading from "../assets/loading.png";
import loadingOk from "../assets/loadingok.png";
import { useEffect, useState } from "react";

export default function RouteTransitionLoader() {
  const { isLoading } = useRouteLoading();
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  useEffect(() => {
    if (isLoading) {
      setState("loading");
      setTimeout(() => setState("done"), 1000);
    } else {
      setState("idle");
    }
  }, [isLoading]);

  if (state === "idle") return null;

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-prussian-blue" style={{ zIndex: 9999 }}>
      <img
        src={state === "loading" ? loading : loadingOk}
        alt="Carregando"
        style={{ width: "100px", transition: "opacity 0.5s ease-in-out" }}
      />
    </div>
  );
}
