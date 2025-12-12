import React from "react";
import "./App.css";

function DiaryViewPage() {
  return (
    <div className="app">
      <h2 className="main-title">
        오늘의 <span>기억</span>
      </h2>

      <div className="content">
        <div className="preview-title">감사한 하루</div>
        <div className="weather-updated">2025-12-10 (수)</div>

        <div className="diary-preview">
          오늘 하루도 무사히 지나가게 하심에 감사합니다.
        </div>

        <div className="buttons">
          <button className="btn btn-primary">수정</button>
          <button className="btn btn-outline">삭제</button>
        </div>
      </div>
    </div>
  );
}

export default DiaryViewPage;