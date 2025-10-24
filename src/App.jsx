import Player from "./components/Player";
import TimeChallange from "./components/TimeChallange";

function App() {
  return (
    <>
      <Player />
      <div id='challenges'>
        <TimeChallange title={"Easy"} targetTime={1} />
        <TimeChallange title={"Not easy"} targetTime={5} />
        <TimeChallange title={"Getting tough"} targetTime={10} />
        <TimeChallange title={"Pros only"} targetTime={15} />
      </div>
    </>
  );
}

export default App;
