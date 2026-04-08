import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const OAuthCallback = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const error = searchParams.get("error");
  const errorDescription = searchParams.get("error_description");

  useEffect(() => {
    if (code) {
      console.log("OAuth code received:", code);
      // You can send this code to your edge function for token exchange
      fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/meta-callback?code=${encodeURIComponent(code)}`,
        { method: "GET" }
      )
        .then((res) => res.text())
        .then((data) => console.log("Token exchange response:", data))
        .catch((err) => console.error("Token exchange error:", err));
    }
  }, [code]);

  if (error) {
    return (
      <div style={{ fontFamily: "sans-serif", textAlign: "center", padding: "50px" }}>
        <h1>Error de autenticación</h1>
        <p>{errorDescription || error}</p>
      </div>
    );
  }

  if (code) {
    return (
      <div style={{ fontFamily: "sans-serif", textAlign: "center", padding: "50px" }}>
        <h1>✅ Autorización exitosa</h1>
        <p>La cuenta de Meta ha sido conectada correctamente.</p>
        <p>Puedes cerrar esta ventana.</p>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", padding: "50px" }}>
      <h1>LinoTech SpA</h1>
      <p>Meta OAuth Callback Endpoint</p>
      <p>Este endpoint está activo y listo para recibir redirecciones de Meta.</p>
    </div>
  );
};

export default OAuthCallback;
