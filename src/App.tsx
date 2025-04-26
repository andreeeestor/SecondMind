import Waves from "./components/animations/Waves";
import Header from "./components/layout/Header";
import MainContainer from "./components/layout/MainContainer";

function App() {
  return (
    <>
      <Header />
      <MainContainer>
        <div className="bg-black rounded-3xl shadow-2xl h-96 relative">
          <Waves
            lineColor="#fff"
            backgroundColor="#000"
             waveSpeedX={0.02}
             waveSpeedY={0.01}
             waveAmpX={40}
             waveAmpY={20}
             friction={0.9}
             tension={0.01}
             maxCursorMove={120}
             xGap={12}
             yGap={36}
          />
        </div>
      </MainContainer>
    </>
  );
}

export default App;
