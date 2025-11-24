import {
  selectMessage,
  setActive,
  displayMessageStatus,
} from "./slices/errorSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
function MessageBox() {
  const dispatch = useDispatch();
  const { type, content } = useSelector(selectMessage);

useEffect(() => {},[displayMessageStatus])

  function closeMessageBox(e) {
    dispatch(setActive(false));
  }
  return (
    <>
      {displayMessageStatus ? (
        <div className="message-box">
          <div className="message">
            <span>{type || "!"}</span>
            <h3>{content || "Something went wrong."}</h3>{" "}
          </div>
          <h4 onClick={closeMessageBox}>x</h4>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
export default MessageBox;
