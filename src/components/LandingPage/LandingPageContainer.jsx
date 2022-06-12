import { useNavigate } from "react-router-dom";

const LandingPageContainer = () => {
  const fnNavigate = useNavigate();
  const aGames = [
    {
      sTitle: "Tic Tac Toe",
      sPath: "tic_tac_toe",
    },
    {
      sTitle: "Paper, Rock, Scissors",
      sPath: "paper_rock_scissors",
    },
    {
      sTitle: "Connect Four",
      sPath: "connect_four",
    },
    {
      sTitle: "Simon Says",
      sPath: "simon_says",
    },
  ];
  return (
    <div className="flex-column container">
      <div className="title-container">
        <h1>Travel Fun</h1>
      </div>

      <div className="flex-row games-container">
        {aGames.map((oGame) => {
          return (
            <div
              className="flex-column flex-center game-card"
              key={oGame.sTitle}
              onClick={() => fnNavigate(oGame.sPath)}
            >
              <h2>{oGame.sTitle}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LandingPageContainer;
