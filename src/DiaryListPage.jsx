//일기 목록 페이지
import React from "react";
import DiaryCard from "./DiaryCard";
import "./App.css";

function DiaryListPage() {
  // 임시 더미 데이터
  const diaries = [
    {
      id: 1,
      title: "감사한 하루",
      content: "오늘은 날씨가 좋아서 감사했다.",
      date: "2025-12-10",
    },
    {
      id: 2,
      title: "작은 은혜",
      content: "친구와 따뜻한 대화를 나눴다.",
      date: "2025-12-09",
    },
  ];

  return (
    <div className="app">
      <h2 className="main-title">
        나의 <span>감사일기</span>
      </h2>

      <div className="content">
        {diaries.map((diary) => (
          <DiaryCard
            key={diary.id}
            title={diary.title}
            content={diary.content}
            date={diary.date}
          />
        ))}
      </div>
    </div>
  );
}

export default DiaryListPage;