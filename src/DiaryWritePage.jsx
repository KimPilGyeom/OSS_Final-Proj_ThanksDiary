//일기 작성 페이지
import React, { useState } from "react";
import "./App.css";

function DiaryWritePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="app">
      <h2 className="main-title">
        오늘의 <span>감사</span>
      </h2>

      <div className="content">
        <input
          className="input"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="textarea"
          placeholder="오늘 감사했던 일을 적어보세요."
          rows={8}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="buttons">
          <button className="btn btn-primary">저장</button>
          <button className="btn btn-outline">취소</button>
        </div>
      </div>
    </div>
  );
}

export default DiaryWritePage;