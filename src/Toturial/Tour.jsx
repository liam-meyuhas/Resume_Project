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
        text: `
          <div>
            <h3 style="margin: 0 0 10px 0;">זקוק לעזרה?</h3>
            <p style="margin: 0;">האם תרצה סיור מהיר על איך לעבוד עם המערכת?</p>
          </div>
        `,
        attachTo: { element: ".first-step", on: "bottom" },
        buttons: [
          { text: "סבבה לי", classes: "btn-outline", action: tour.complete },
          { text: "כן", classes: "btn-filled", action: tour.next },
        ],
      },
      {
        id: "step-2",
        text: `
          <div>
            <h3 style="margin: 0 0 10px 0;">ברוך הבא</h3>
            <p style="margin: 0;">ברוך הבא לסיור בכלי עריכת קורות החיים. נעשה את זה צ'יק צ'ק!</p>
          </div>
        `,
        attachTo: { element: ".second-step", on: "bottom" },
        buttons: [{ text: "הבא", classes: "btn-filled", action: tour.next }],
      },
      {
        id: "step-3",
        text: `
          <div>
            <h3 style="margin: 0 0 10px 0;">עריכה</h3>
            <p style="margin: 0;">לכל חלק יש מידע משלו שיוצג בקורות החיים שלך.</p>
          </div>
        `,
        attachTo: { element: ".resume-fields", on: "bottom" },
        buttons: [
          { text: "הקודם", classes: "btn-outline", action: tour.back },
          { text: "הבא", classes: "btn-filled", action: tour.next },
        ],
      },
      {
        id: "step-4",
        text: `
          <div>
            <h3 style="margin: 0 0 10px 0;">שינוי תבנית</h3>
            <p style="margin: 0;">אם תרצה לנסות תבנית שונה – תוכל לשנות אותה כאן.</p>
          </div>
        `,
        attachTo: { element: ".template-button", on: "bottom" },
        buttons: [
          { text: "הקודם", classes: "btn-outline", action: tour.back },
          { text: "הבא", classes: "btn-filled", action: tour.next },
        ],
      },
      {
        id: "step-5",
        text: `
          <div>
            <h3 style="margin: 0 0 10px 0;">תצוגת PDF</h3>
            <p style="margin: 0;">כאן תוכל לראות כיצד קורות החיים שלך נראים לאחר העדכון האחרון.</p>
          </div>
        `,
        attachTo: { element: ".resume-data", on: "bottom" },
        buttons: [
          { text: "הקודם", classes: "btn-outline", action: tour.back },
          { text: "הבא", classes: "btn-filled", action: tour.next },
        ],
      },
      {
        id: "step-6",
        text: `
          <div>
            <h3 style="margin: 0 0 10px 0;">סיום</h3>
            <p style="margin: 0;">לאחר שתסיים ליצור את קורות החיים, תוכל ללחוץ כאן כדי לעבור לעמוד התשלום.</p>
          </div>
        `,
        attachTo: { element: ".download-button", on: "bottom" },
        buttons: [
          { text: "הקודם", classes: "btn-outline", action: tour.back },
          { text: "הבא", classes: "btn-filled", action: tour.next },
        ],
      },
      {
        id: "step-7",
        text: `
          <div>
            <h3 style="margin: 0 0 10px 0;">סיור חדש</h3>
            <p style="margin: 0;">שכחת איך לעשות משהו? פשוט לחץ כאן כדי לבצע שוב את הסיור.</p>
          </div>
        `,
        attachTo: {
          element: ".start-toturial",
          on: "bottom",
          offset: { top: 10 },
        },
        buttons: [
          { text: "סיום", classes: "btn-filled", action: tour.complete },
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
