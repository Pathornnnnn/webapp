import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Menudiv from "./component/Menu";

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
          desc="ข้าวผัดอร่อยมาก"
          url="https://img.wongnai.com/p/1600x0/2019/12/19/d5537700a7274ac09964b6a51dd0a9f6.jpg"
        />
        <Menudiv
          category="ของคาว"
          name="ข้าวมันไก่"
          desc="ข้าวมันไก่อร่อยมาก"
          url="https://img.wongnai.com/p/1600x0/2017/06/22/bbf899f7ab4341dea4aec6330c2afafd.jpg"
        />
      </div>
    </>
  );
}

export default App;
