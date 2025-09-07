import { useState } from "react";
import "./App.css";

//child component
function Menudiv({ category, name, desc, url, onVoteChange }) {
  const [count, setCount] = useState("MIN");

  const Vote = () => {
    if (count === "MAX") {
      alert("Cannot Vote more");
      return;
    }
    if (count >= 9) {
      setCount("MAX");
      onVoteChange(name, "MAX"); // callback to parent
      return;
    } else {
      const newCount = count === "MIN" ? 1 : count + 1;
      setCount(newCount);
      onVoteChange(name, newCount); // callback to parent
    }
  };

  const Unvote = () => {
    if (count === "MIN") {
      alert("Cannot Unvote");
      return;
    } else if (count === "MAX") {
      setCount(9);
      onVoteChange(name, 9); // callback to parent
    } else {
      const newCount = count === 1 ? "MIN" : count - 1;
      setCount(newCount);
      onVoteChange(name, newCount); // callback to parent
    }
  };

  return (
    <div className="Menudiv">
      <div className="top">
        <div className="text">
          <h2>{category}</h2>
          <h3>{name}</h3>
          <p>{desc}</p>
        </div>
        <div className="image">
          <img src={url} alt={name} />
        </div>
      </div>
      <div className="bottom">
        <button onClick={Vote}>Click to Vote</button>
        <h2>{count}</h2>
        <button onClick={Unvote}>Click to Unvote</button>
      </div>
    </div>
  );
}


//parent component
function App() {
  const [votes, setVotes] = useState({});

  const handleVoteChange = (foodName, newCount) => {
    setVotes((prev) => ({
      ...prev,
      [foodName]: newCount,
    }));
  };

  return (
    <>
      <div className="title">
        <h1>โหวตอาหาร</h1>
      </div>
      <div className="menulist">
        <Menudiv
          category="ของคาว"
          name="ข้าวผัด"
          desc="ข้าวผัดคืออาหารจานเดียวที่นำข้าวสุกมาผัดกับเนื้อสัตว์ ผัก และเครื่องปรุง รสหอมอร่อย ทำง่าย กินได้ทุกวัย."
          url="https://img.wongnai.com/p/1600x0/2019/12/19/d5537700a7274ac09964b6a51dd0a9f6.jpg"
          onVoteChange={handleVoteChange}
        />
        <Menudiv
          category="ของหวาน"
          name="บัวลอย"
          desc="บัวลอยเป็นขนมหวานที่ทำจากแป้งข้าวเหนียวปั้นเป็นลูกกลมๆ ต้มในน้ำเดือด เสิร์ฟพร้อมน้ำกะทิและน้ำตาลทราย รสชาติหวานมัน อร่อย."
          url="https://img.wongnai.com/p/1968x0/2018/10/14/dd16216d07eb41fdab90b43ac7c21f6b.jpg"
          onVoteChange={handleVoteChange}
        />
      </div>
    </>
  );
}

export default App;
