import { createBrowserHistory } from "history";

export const Backbutton = () => {
  const createBrowserHistory = require("history").createBrowserHistory;

  return (
    <button
      onClick={() => {
        const history = createBrowserHistory();
        return history.back();
      }}
      className="back_button"
    >
      <i class="fa-solid fa-arrow-left-long"></i> Back
    </button>
  );
};
export default Backbutton;
