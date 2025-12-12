//일기 수정 페이지
import React, { useState } from "react";
import "./App.css";

function DiaryEditPage() {
  const [title, setTitle] = useState("감사한 하루");
  const [content, setContent] = useState(
    "오늘 하루도 무사히 지나가게 하심에 감사합니다."
  );

  return (
    <div className="app">
      <h2 className="main-title">
        일기 <span>수정</span>
      </h2>

      <div className="content">
        <input
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="textarea"
          rows={8}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="buttons">
          <button className="btn btn-primary">수정 저장</button>
          <button className="btn btn-outline">취소</button>
        </div>
      </div>
    </div>
  );
}

export default DiaryEditPage;