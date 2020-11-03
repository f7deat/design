import Page from './components/page';
import Zoom from './components/zoom';
import Content from './contents/content';
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
          <Content/>
          <Zoom/>
          <Page/>
        </div>
      </div>
    </div>
  );
}

export default App;
