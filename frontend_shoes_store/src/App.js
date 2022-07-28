import 'bulma/css/bulma.min.css';
import InputData from './components/inputData';
import Table from './components/table'

function App() {
  return (
    <div style={{ backgroundColor: "#f2f2f2", height: "100vh", width: "100 vw" }}>
      <div className="container">
        <InputData />
        <Table style={{ paddingTop: 12 }} />
      </div>
    </div>
  );
}

export default App;
