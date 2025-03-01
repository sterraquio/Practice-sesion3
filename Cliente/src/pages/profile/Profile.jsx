import { useNavigate } from "react-router";
import useAuthStore from "../../stores/use-auth-store";
import { useCallback, useEffect } from "react";

const Profile = () => {
  const { userLooged } = useAuthStore();
  const navigate = useNavigate();
  const {logout} = useAuthStore();

  const handleLogout = useCallback(() => {
    logout()
    .then(() => navigate("/"))
    .catch(() => navigate("/"));
  },[logout, navigate]);

  useEffect(()=> {
    if (!userLooged) return;
    const fetchData = async () => {
      const {displayName, email} = userLooged;
      const data = {displayName, email};
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}users`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",},
            body: JSON.stringify(data),
          }
        );
        if (!response.ok){
          throw new Error(`Error ${response.status}:${response.statusText}`);
        }
        return await response.json();
      } catch (error) {
        console.error("Error creating user: ", error);
        throw error;
      }
    };
    fetchData();

  }, [userLooged]);

  return (
    <>
      <h2>Perfil de usuario</h2>
      <p>¡Bien...Venido {userLooged?.displayName}</p>
      <button
      type="button"
      title="Cerrar sesión"
      onClick={handleLogout}
      > 
        Cerrar sesión
        </button>
    </>
  );
};

export default Profile;
