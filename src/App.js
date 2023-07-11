import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";

function App() {
  return (
    <div className="app">

      <Header />

      {/* App body */}
      <div className="app__body">
       < Sidebar />
      < Feed />

      {/* Widgets */}
      </div>

    </div>
  );
}

export default App;
