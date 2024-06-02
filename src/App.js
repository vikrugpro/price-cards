import './App.css';
import Card from './components/Card/card';
import stylefor300 from './components/Card/stylefor300.module.css';
import stylefor450 from './components/Card/stylefor450.module.css';
import stylefor550 from './components/Card/stylefor550.module.css';
import stylefor1000 from './components/Card/stylefor1000.module.css';

function App() {
  return (
      <div className="rates">
          <Card
              style={stylefor300}
              name="Безлимитный 300"
              rate={300}
              speed={10}
              info="Объем включенного трафика не ограничен"
          />
          <Card
              style={stylefor450}
              name="Безлимитный 450"
              rate={450}
              speed={50}
              info="Объем включенного трафика не ограничен"
          />
          <Card
              style={stylefor550}
              name="Безлимитный 550"
              rate={550}
              speed={100}
              info="Объем включенного трафика не ограничен"
          />
          <Card
              style={stylefor1000}
              name="Безлимитный 1000"
              rate={1000}
              speed={200}
              info="Объем включенного трафика не ограничен"
          />
      </div>
  );
}
export default App;

