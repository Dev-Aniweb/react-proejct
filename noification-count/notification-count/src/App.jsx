import { useState } from "react";

function App() {
  const [notificationCount, setNotificationCount] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Notification Example</h2>

      <NotificationButton setCount={setNotificationCount} />
      <NotificationBadge count={notificationCount} />
    </div>
  );
}

function NotificationButton({ setCount }) {
  return (
    <button
      onClick={() => setCount(c => c + 1)}
      style={{ marginRight: "10px" }}
    >
      Add Notification
    </button>
  );
}

function NotificationBadge({ count }) {
  return (
    <span>
      🔔 Notifications: <strong>{count}</strong>
    </span>
  );
}

export default App;
