import React, { useState } from "react";

const characters = [
  "Jonesy",
  "Ragnarok",
  "Peely",
  "Midas",
  "Meowscle",
  "Skye",
  "Bruno",
  "Sparkplug",
  "Chroma",
  "Shenko"
];

const App = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    setSelectedCharacter(characters[randomIndex]);
  };

  return (
    <div>
      <button onClick={handleClick}>Random Fortnite Character</button>
      {selectedCharacter ? (
        <p>Selected character: {selectedCharacter}</p>
      ) : (
        <p>Click the button to select a character</p>
      )}
    </div>
  );
};

export default App;