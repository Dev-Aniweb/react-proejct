const Mycardard = () => {
  const name = "ANIL KUMAR VERMA";
  const about = "I am a WordPress developer learning React.";
  const para = "Learning JavaScript, DSA, and Node.";
  const para2 =
    "Goal: Complete JS, React, and backend with Node.js.";

  let age = 24;

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        borderRadius: "8px",
        width: "300px",
        backgroundColor: "white",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
      }}
    >
      <img
        src="https://th.bing.com/th/id/OIP.as8xbet3Bn87voKFjKCbzQHaEo?w=270&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
        alt="Example"
        style={{ width: "100%", height: "200px", borderRadius: "8px" }}
      />

      <h2>{name}</h2>
      <p>{about}</p>
      <p>{para}</p>
      <p>{para2}</p>

      <button
        style={{
          padding: "10px",
          backgroundColor: age >= 18 ? "green" : "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {age >= 18 ? "Watch Now" : "Not Available"}
      </button>
    </div>
  );
};

export default Mycardard;
