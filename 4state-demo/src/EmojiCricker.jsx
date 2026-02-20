import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const randomEmoji = () => {
    const random = Math.floor(Math.random() * 100) + 1
    const codePoint = 0x1F600 + random; // fromCodePoint = JS function that converts a unicode ponit numbet to actual character
    return <>{String.fromCodePoint(codePoint)}</>
}

export default function EmojiCricker() {
  const [emojis, setEmojis] = useState([{ id: uuidv4(), emoji: randomEmoji() }]);
  
  const addEmoji = () => setEmojis((prev) => [...prev, { id: uuidv4(), emoji: randomEmoji()}]);
  const deleteEmoji = (id) => setEmojis([...emojis.filter((e) => e.id !== id)]);
  
  const allHearts = () => {
    setEmojis((prev) => (
        prev.map(e=>({...e, emoji: '♥️'}))
    ));
  }
  return (
    <>
      <div>
        {emojis.map((e) => {
          return (
            <span
              onClick={() => deleteEmoji(e.id)}
              key={e.id}
              style={{ fontSize: "4rem" }}
            >
              {e.emoji}
            </span>
          );
        })}
      </div>
      <button onClick={addEmoji}>Add Emoji</button>
      <button onClick={allHearts}>Make them all hearts</button>
    </>
  );
}

// 