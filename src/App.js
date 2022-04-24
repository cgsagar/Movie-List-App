import logo from './logo.svg';
import './App.css';
import MoviesContainer from './components/MoviesContainer';

function App() {
  return (
    <div className='container'>
        <h2 className='row shadow-sm p-2' style={{backgroundColor:'#000000', color: '#fff',textTransform:'uppercase', textShadow: '0px 6px 13px #fff' }}>My Big Movie List</h2>
        <MoviesContainer />

    </div>
  );
}

export default App;
