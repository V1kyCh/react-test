import './App.css';
import  {ArticleList} from './components/ArticlesList/ArticleList'
import { articlesData } from './data/data';

const isOpen = false

function App() {
  return (
    <div className="App">
      <p>hi</p>
      {articlesData.length > 0 && <ArticleList data={articlesData}/>}
      {/* {isOpen === true && <div>modal</div>} */}
      {isOpen ? <div>modal</div>: <p>модальне вікно закрите</p>}
    </div>
  );
}

export default App;