import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Menudiv(info) {
  const [count, setCount] = useState("MIN");
  const Vote = () => {
    if (count === "MAX") {
      alert("Cannot Vote more");
      return;
    }
    if (count >= 9) {
      setCount("MAX");
      return;
    } else {
      if (count === "MIN") {
        setCount(1); // If count was 'MIN', reset to 1
      } else setCount(count + 1); // Updates the 'count' state
    }
  };

  const Unvote = () => {
    if (count === "MIN") {
      alert("Cannot Unvote");
      return;
    } else if (count === "MAX") {
      setCount(9); // If count was 'MAX', reset to 9
    } else {
      if (count == 1) {
        setCount("MIN");
        return;
      }
      setCount(count - 1); // Updates the 'count' state
    }
  };

  return (
    <div className="Menudiv">
      <div className="top">
        <div className="text">
          <h2>{info.category}</h2>
          <h3>{info.name}</h3>
          <p>{info.desc}</p>
        </div>
        <div className="image">
          <img src={info.url} alt={info.name} />
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

function App() {
  const [count, setCount] = useState(0);

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
        />
        <Menudiv
          category="ของหวาน"
          name="บัวลอย"
          desc="บัวลอยเป็นขนมหวานที่ทำจากแป้งข้าวเหนียวปั้นเป็นลูกกลมๆ ต้มในน้ำเดือด เสิร์ฟพร้อมน้ำกะทิและน้ำตาลทราย รสชาติหวานมัน อร่อย."
          url="https://img.wongnai.com/p/1968x0/2018/10/14/dd16216d07eb41fdab90b43ac7c21f6b.jpg"
        />
      </div>
    </>
  );
}

export default App;
