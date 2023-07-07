import React from "react";

const FAQ: React.FC = () => {

  let [faq_data, setFaqData] = React.useState([
    {
      question: "What is BizTrack?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde!",
      open: false,
    },

    {
      question: "What is BizTrack?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde!",
      open: false,
    },

    {
      question: "What is BizTrack?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde!",
      open: false,
    },

    {
      question: "What is BizTrack?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde!",
      open: false,
    },

    {
      question: "What is BizTrack?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde!",
      open: false,
    },

    {
      question: "What is BizTrack?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde!",
      open: false,
    }
  ]);

  let toggleQuestion = (index: number) => {
    setFaqData(
      faq_data.map((q, i) => {
        if (i === index) {
          q.open = !q.open;
        } else {
          q.open = false;
        }
        return q;
      })
    );
  }


  return (
    <div className="section" id="faq">
      <div className="section-title">Frequently Asked Questions</div>

      <div className="questions">
        <div className="q-wrapper">
          {faq_data.map((q, i) => (
            <div
              className={q.open ? "question open" : "question"}
              key={i}
              onClick={() => toggleQuestion(i)}
            >
              <span>{q.question}</span>

              <i className="bx bx-chevron-down"></i>

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
