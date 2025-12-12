//목록형 카드 컴포넌트
import React from "react";

function DiaryCard({ title, content, date }) {
  return (
    <div className="diary-preview">
      <div className="preview-title">{title}</div>
      <div className="preview-content">{content}</div>
      <div className="weather-updated">{date}</div>
    </div>
  );
}

export default DiaryCard;