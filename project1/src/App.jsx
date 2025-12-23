import Header from "./components/Header";
import Mycardard from "./components/Mycardard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
          justifyContent: "center",
          backgroundColor: "#f2f2f2",
        }}
      >
        <Mycardard />
        <Mycardard />
        <Mycardard />
        <Mycardard />
        <Mycardard />
        <Mycardard />
      </div>

      <Footer />
    </>
  );
}

export default App;
