import React, { useState } from "react";
import "./styles.css";

var foodDictionary = {
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🥪": "Sandwich",
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
"🍍": "Pineapple",
"🥭": "Mango",
"🍎": "Red Apple",
"🍏": "Green Apple",
"🍐": "Pear",
"🍑": "Peach",
"🍒": "Cherries",
"🍓": "Strawberry",
"🥝": "Kiwi Fruit",
"🍅": "Tomato",
"🥥": "Coconut",
"🥑": "Avocado",
"🍆": "Eggplant",
"🥔": "Potato",
"🥕": "Carrot",
"🌽": "Ear of Corn",
"🌶": "Hot Pepper"
};

var headingText = "Food Interpreter";

var charactor = Object.keys(foodDictionary);

var color = "blue";
export default function App() {
  // const [likeCounter, setLikeCounter] = useState(0);
  const [userInput, setUserInput] = useState(" ");
  // const [inputCharctor, setInputCharctor] = useState(" ");

  //function onClickHandler() {
  // var newlikeCounter = likeCounter + 1;
  // setLikeCounter(newlikeCounter);
  // }
  function onChangeHandler(event) {
    var inputCharactor = event.target.value;
    var meaning = foodDictionary[inputCharactor];
    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }
    setUserInput(meaning);
  }

  function onClickHandler(item) {
    var meaning = foodDictionary[item];
    setUserInput(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: color }}>{headingText}</h1>
      <input onChange={onChangeHandler} />
      <div style={{ fontFamily: "cursive", fontSize: "1.5rem" }}>
        {userInput}
      </div>
      {/*<button onClick={onClickHandler}>Like Me</button>
      {likeCounter}*/}
      <h3 style={{ fontFamily: "cursive" }}>Food we Know</h3>
      {charactor.map(function (item) {
        return (
          <span
            onClick={() => onClickHandler(item)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={item}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
