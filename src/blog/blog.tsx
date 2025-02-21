import "../index.css";
import { useNavigate } from "react-router-dom";

export default function Blog() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center p-20 h-screen">
      <h1 className="text-center text-xl font-semibold text-white mb-5">
        This page is in development, once we're done <br /> we'll announce it on
        our social media!
      </h1>
      <button
        onClick={handleBackClick}
        className="p-2 px-6 bg-primary text-white rounded-lg hover:scale-105 transition-all duration-300"
      >
        Go Back
      </button>
    </div>
  );
}
