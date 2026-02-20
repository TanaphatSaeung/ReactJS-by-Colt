import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initPlayer = (numPlayer) =>
  new Array(numPlayer).fill(0).map((p) => ({ id: uuidv4(), score: p }));

export default function ScoreKeeper({ numPlayer, target = 5 }) {
  const [player, setPlayer] = useState(initPlayer(numPlayer));
  // --- update score ---
  const addScore = (id) => {
    setPlayer((prevPlayer) =>
      prevPlayer.map((p) =>
        p.id === id ? { ...p, id: p.id, score: p.score + 1 } : p,
      ),
    );
  };
  // --- reset score ---
  const resetScore = () => {
    setPlayer((prev) => {
      return prev.map((p) => ({ ...p, score: 0 }));
    });
  };
  // --- find score equal to target ---
  const isWin = player.some((p) => p.score === target);

  return (
    <div>
      <ul>
        {player.map((p, i) => {
          return (
            <li className="scoreList" key={p.id} style={{ listStyle: "none" }}>
              Player{i + 1}: {p.score}{" "}
              <button
                onClick={() => addScore(p.id)}
                style={{ marginLeft: "10px" }}
                disabled={isWin}
              >
                +1
              </button>
              {p.score === target && "WINNER" }
            </li>
          );
        })}
      </ul>
      <button onClick={resetScore}>Reset</button>
    </div>
  );
}
