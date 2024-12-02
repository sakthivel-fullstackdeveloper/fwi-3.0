import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { UserDetailsApi } from "../services/Api";
import { logout, isAuthenticated } from "../services/Auth";
import './dashboard.css';
 // Import the FileProtectionTool component

export default function DashboardPage() {
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: "", email: "", localId: "" });

    useEffect(() => {
        if (isAuthenticated()) {
            UserDetailsApi().then((response) => {
                setUser({
                    name: response.data.users[0].displayName,
                    email: response.data.users[0].email,
                    localId: response.data.users[0].localId,
                });
            });
        }
    }, []);

    const logoutUser = () => {
        logout();
        navigate("/login");
    };

    if (!isAuthenticated()) {
        // Redirect user to login if not authenticated
        return <Navigate to="/login" />;
    }

    return (
        <div className="dashboard">
            <NavBar logoutUser={logoutUser} />
        </div>
    );
}
