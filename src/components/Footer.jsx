import { useNavigate } from "react-router-dom";

const Footer = () => {
  const fnNavigate = useNavigate();
  return (
    <div>
      <button className="btn back-btn" onClick={() => fnNavigate("/")}>
        Back
      </button>
    </div>
  );
};

export default Footer;
