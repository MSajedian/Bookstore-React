import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';


function App() {
  return (
    <div className="App">
      <MyNav fixed="bottom" />

      <MyFooter/>
    </div>
  );
}

export default App;
