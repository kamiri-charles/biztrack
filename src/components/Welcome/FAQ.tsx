import React from "react";

const FAQ: React.FC = () => {

  let faq_data = [
    {
      question: "What is BizTrack?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde!",
      answer_open: false,
    },

    {
      question: "What is BizTrack?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde!",
      answer_open: false,
    },

    {
      question: "What is BizTrack?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde!",
      answer_open: false,
    },

    {
      question: "What is BizTrack?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde!",
      answer_open: false,
    },
  ];


  return (
    <div className="section" id="faq">
      <div className="section-title">FAQ</div>

      <div className="questions">
        <div className="q-wrapper">
          {faq_data.map((q, i) => (
            <div className="question" key={i}>
              <span>{q.question}</span>

              <i className="bx bx-caret-down"></i>

              <div className="answer">
                <p>{q.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
