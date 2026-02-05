import React from "react";
import { useRecoilValue, useSetRecoilState, useResetRecoilState } from "recoil";
import { notificationCountState } from "./notificationState.js";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Notification App</h2>

      <NotificationButton />
      <ResetButton />
      <NotificationBadge />
    </div>
  );
}

// Button to increase notifications
function NotificationButton() {
  const setCount = useSetRecoilState(notificationCountState);

  return (
    <button
      onClick={() => setCount(c => c + 1)}
      style={{ marginRight: "10px", padding: "5px 10px" }}
    >
      Add Notification
    </button>
  );
}

// Button to reset notifications
function ResetButton() {
  const resetCount = useResetRecoilState(notificationCountState);

  return (
    <button
      onClick={resetCount}
      style={{ marginRight: "10px", padding: "5px 10px" }}
    >
      Reset
    </button>
  );
}

// Badge to display notifications
function NotificationBadge() {
  const count = useRecoilValue(notificationCountState);

  return (
    <span style={{ fontSize: "18px" }}>
      🔔 Notifications: <strong>{count}</strong>
    </span>
  );
}

export default App;
