import React from "react";
import Shepherd from "shepherd.js";
import "shepherd.js/dist/css/shepherd.css";
import "./tour.css";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const Tour = () => {
  const startTour = () => {
    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        cancelIcon: { enabled: true },
        classes: "shadow-md bg-purple-dark dialog-style",
        scrollTo: { behavior: "smooth", block: "nearest" },
        highlightClass: "highlight",
        modalOverlayOpeningPadding: 10,
        modalOverlayOpeningRadius: 5,
      },
      useModalOverlay: true,
    });

    const steps = [
      {
        id: "step-1",
        text: `זקוק לעזרה?
            האם תרצה סיור מהיר על איך לעבוד עם המערכת?`,
        attachTo: { element: ".first-step", on: "bottom" },
        buttons: [
          { text: "כן", action: tour.next },
          { text: "סבבה לי", action: tour.complete },
        ],
      },
      {
        id: "step-2",
        text: `ברוך הבא
        ברוך הבא לסיור בכלי עריכת קורות החיים, נעשה את זה
        ציק צ'ק`,
        attachTo: { element: ".second-step", on: "bottom" },
        buttons: [
          { text: "הקודם", action: tour.back },
          { text: "הבא", action: tour.next },
        ],
      },
      {
        id: "step-3",
        text: `עריכה
        לכל חלק יש מידע משלו שיוצג בקורות החיים עצמם`,
        attachTo: { element: ".resume-fields", on: "bottom" },
        buttons: [
          { text: "הקודם", action: tour.back },
          { text: "הבא", action: tour.next },
        ],
      },
      //   "וכאן האלמנט הרביעי עם המסר החשוב 😉
      {
        id: "step-4",
        text: `שינוי תבנית
        אם תרצה לנסות תבנית שונה תוכל לשנות אותה כאן`,
        attachTo: { element: ".template-button", on: "bottom" },
        buttons: [
          { text: "הקודם", action: tour.back },
          { text: "הבא", action: tour.next },
        ],
      },
      {
        id: "step-5",
        text: `תצוגת PDF
        כאן תוכל לראות כיצד קורות החיים שלך נראים לאחר העדכון האחרון`,
        attachTo: { element: ".resume-data", on: "bottom" },
        buttons: [
          { text: "הקודם", action: tour.back },
          { text: "הבא", action: tour.next },
        ],
      },
      {
        id: "step-6",
        text: `סיום
        לאחר שתסיים ליצור את קורות החיים, תוכל ללחוץ כאן כדי לעבור לעמוד התשלום לקבלת קורות החיים`,
        attachTo: { element: ".download-button", on: "bottom" },
        buttons: [
          { text: "הקודם", action: tour.back },
          { text: "סיום", action: tour.complete },
        ],
      },
      {
        id: "step-7",
        text: `סיור חדש
        שכחת איך לעשות משהו? פשוט לחץ כאן כדי לבצע מחדש את הסיור`,
        attachTo: {
          element: ".start-toturial",
          on: "bottom",
          offset: { top: 10 },
        },
        buttons: [
          { text: "הקודם", action: tour.back },
          { text: "סיום", action: tour.complete },
        ],
      },
    ];

    tour.addSteps(steps);
    tour.start();
  };

  return (
    <button onClick={startTour} className={`start-toturial button`}>
      <QuestionMarkIcon />
    </button>
  );
};

export default Tour;
