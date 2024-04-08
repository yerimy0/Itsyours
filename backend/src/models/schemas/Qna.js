const { Schema } = require("mongoose");

/**
 * Q&A 스키마
 * 작성자 : 류효종
 * 작성시작일 : 2024-04-08
 */

const QnaSchema = new Schema({
  // Q&A 작성자
  nickname: {
    type: String,
    // required: true,
  },
  // Q&A 제목
  title: {
    type: String,
    required: true,
  },
  // Q&A 내용
  content: {
    type: String,
    required: true,
  },
  // Q&A 등록일자
  regDate: {
    type: Date,
    default: () => Date.now() + 9 * 60 * 60 * 1000,
  },
  // Q&A 답변
  isCompleted: {
    type: Boolean,
  },
});

module.exports = QnaSchema;