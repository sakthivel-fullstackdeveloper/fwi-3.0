import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { UserDetailsApi } from "../services/Api";
import { logout, isAuthenticated } from "../services/Auth";
import Contact from '../Contact.jsx';
import Footer from '../Footer.jsx';
import Services from '../Services.jsx';
import Skills from '../Skills.jsx';
import Whyus from '../whyus.jsx';
import Cta from '../Cta.jsx';
import Header2 from "../Header2.jsx";
import FileProtectionTool from "../components/FileProtectionTool.jsx"



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
        <>  
         <Header2 />
         <br/>
         <br />   <br />    <br /> 
         <FileProtectionTool />
         <br/>
         <br />   <br />    <br />
         <main>
         <Whyus />
         <Skills />
         <Services />
         <Cta />
         <Contact />
         </main>
         <Footer />
         <a href="#" class="back-to-top d-flex align-items-center justify-content-center active">
            <i class="bi bi-arrow-up-short"></i>
         </a>
        </>
    );
}
