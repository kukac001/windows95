import { useNavigate } from "react-router-dom";
import windows95 from "../assets/windows95_boot_animation.gif";
import { useEffect } from "react";

const Boot = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/desktop");
        }, 3000);
    }, []);

    return (
        <div>
            <img
                src={windows95}
                alt="Loading windows..."
                className="h-screen w-screen"
            />
        </div>
    );
};
export default Boot;
