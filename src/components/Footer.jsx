import { useNavigate } from "react-router-dom";

const Footer = () => {
  const fnNavigate = useNavigate();
  return (
    <footer>
      <button className="back-btn" onClick={() => fnNavigate("/")}>
        Back
      </button>
    </footer>
  );
};

export default Footer;
