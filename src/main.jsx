import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
      // Check if user is authenticated
      const user = localStorage.getItem("user");
      if (!user) {
          navigate("/signin");
      }
  }, [navigate]);

  return (
      <div>
          {/* Your home page content */}
          <h1>Welcome to SeaTravels Cebu</h1>
      </div>
  );
};