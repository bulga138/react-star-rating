import { useState, useEffect } from "react";

function Dialog() {
  const [open, setOpen] = useState(false);

  const handleDialog = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={`dialog ${open ? "visible" : "hidden"}`}>
        <div className="dialog-content">
          <h2>Quote</h2>
          <p className="quote-text">
            "Success is not final, failure is not fatal: It is the courage to
            continue that counts."
          </p>
          <p className="quote-author">- Winston Churchill</p>
        </div>
      </div>
      <button
        role="button"
        className="open-close-button button-19"
        onClick={() => handleDialog()}
      >
        {!open ? "Open Dialog" : "Close Dialog"}
      </button>
    </>
  );
}

export default Dialog;
