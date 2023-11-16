import "./App.css";
import React, { useState } from "react";
const App = () => {
  const [screen, setScreen] = useState("");

  //클릭한 버튼 보여지게하기
  const onBtnClick = (currentValue) => {
    setScreen((prevValue) => prevValue + currentValue);
  };

  //'C' 기능 -> 초기화
  const handleClear = () => {
    setScreen("");
  };

  //'=' 기능
  //eval 보안문제 --> new Function대체
  const handleEqual = () => {
    try {
      const result = new Function(`return ${screen}`)();
      setScreen(result.toString());
    } catch (error) {
      setScreen("Error");
    }
  };

  return (
    <section className="calculator">
      <div>
        {/* readOnly는 입력필드 읽기 전용으로 사용지기 해당 값을 변경하지 못하도록 */}
        <input type="text" value={screen} className="screen" readOnly />
      </div>
      <div className="buttons">
        <button
          type="button"
          className="btn btn-purple"
          onClick={() => onBtnClick("*")}
        >
          x
        </button>
        <button
          type="button"
          className="btn btn-purple"
          onClick={() => onBtnClick("/")}
        >
          /
        </button>
        <button
          type="button"
          className="btn btn-purple"
          onClick={() => onBtnClick("-")}
        >
          -
        </button>
        <button
          type="button"
          className="btn btn-purple"
          onClick={() => onBtnClick("+")}
        >
          +
        </button>
        <button
          type="button"
          className="btn btn-grey"
          onClick={() => onBtnClick(".")}
        >
          .
        </button>
        <button
          type="button"
          className="btn btn-grey"
          onClick={() => onBtnClick("9")}
        >
          9
        </button>
        <button
          type="button"
          className="btn btn-grey"
          onClick={() => onBtnClick("8")}
        >
          8
        </button>
        <button
          type="button"
          className="btn btn-grey"
          onClick={() => onBtnClick("7")}
        >
          7
        </button>
        <button
          type="button"
          className="btn btn-grey"
          onClick={() => onBtnClick("6")}
        >
          6
        </button>
        <button
          type="button"
          className="btn btn-grey"
          onClick={() => onBtnClick("5")}
        >
          5
        </button>
        <button
          type="button"
          className="btn btn-grey"
          onClick={() => onBtnClick("4")}
        >
          4
        </button>
        <button
          type="button"
          className="btn btn-grey"
          onClick={() => onBtnClick("3")}
        >
          3
        </button>
        <button
          type="button"
          className="btn btn-grey"
          onClick={() => onBtnClick("2")}
        >
          2
        </button>
        <button
          type="button"
          className="btn btn-grey"
          onClick={() => onBtnClick("1")}
        >
          1
        </button>
        <button
          type="button"
          className="btn btn-grey"
          onClick={() => onBtnClick("0")}
        >
          0
        </button>
        <button
          type="button"
          className="btn-equal btn-purple"
          onClick={handleEqual}
        >
          =
        </button>
        <button
          type="button"
          className="btn-clear btn-purple"
          onClick={handleClear}
        >
          C
        </button>
      </div>
    </section>
  );
};

export default App;
