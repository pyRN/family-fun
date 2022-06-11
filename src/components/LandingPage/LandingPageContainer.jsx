import { useNavigate } from "react-router-dom";

const LandingPageContainer = () => {
  const aGames = [
    {
      sTitle: "Tic Tac Toe",
      sPath: "tic_tac_toe",
      oImage: "https://via.placeholder.com/50",
    },
    {
      sTitle: "Paper, Rock, Scissors",
      sPath: "paper_rock_scissors",
      oImage: "https://via.placeholder.com/50",
    },
    {
      sTitle: "Connect Four",
      sPath: "connect_four",
      oImage: "https://via.placeholder.com/50",
    },
    {
      sTitle: "Simon Says",
      sPath: "simon_says",
      oImage: "https://via.placeholder.com/50",
    },
  ];
  return (
    <div className="container bg-primary">
      <h1 className="text-secondary">Travel Fun</h1>
      <div className="m-1">
        {aGames.map((oGame) => {
          return (
            <div className="card" w-25>
              <img
                src={oGame.oImage}
                className="card-img-top img-fluid"
                alt={oGame.sTitle}
              />
              <div className="card-body">
                <h5 className="card-title">{oGame.sTitle}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LandingPageContainer;
