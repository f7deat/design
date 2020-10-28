import Header from './layout/header';
import Sidebar from './layout/sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="d-flex">
        <div style={{width: 408}}>
          <Sidebar/>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default App;
