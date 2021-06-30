import './App.css';
import AssemblyLine from './components/AssemblyLine';

function App() {
  return (
    <div className="App">
       <AssemblyLine  stages={[        "Idea",         "Development",         "Testing",        "Deployment"      ]}/>
    </div>
  );
}

export default App;
