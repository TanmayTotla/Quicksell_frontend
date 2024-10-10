import './App.css';
import Kanban from './components/Kanban';
import Title from './components/Title';

// Main App component that serves as the entry point of the application
function App() {
  return (
    <div className="App">
      {/* Title Component to display the main title of the application */}
      <Title title="Kanban Board" />
      
      {/* Kanban Component that renders the main functionality of the app */}
      <Kanban />
    </div>
  );
}

export default App;
