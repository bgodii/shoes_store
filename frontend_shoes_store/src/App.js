import 'bulma/css/bulma.min.css';
import InputData from './components/inputData';
import Table from './components/table'

function App() {
  return (
    <div style={{ marginTop: 10, backgroundColor: "#f2f2f2" }}>
      <div className="container">
        <InputData />
        <Table style={{ paddingTop: 12 }} />
      </div>
    </div>
  );
}

export default App;
