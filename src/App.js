import './App.css';
import Weather from "./Weather";

function App() {
  
   return <div className="App">
     <div className="container">
    <Weather />
     <footer>
        This project was coded by <a href="https://www.instagram.com/imissalice/" target="_blank">Alice Gitman </a>  and is {" "}
     <a href="https://github.com/AliceCod3s/react-project-2" target="_blank">
        open-sourced on GitHub
     </a>
     </footer>
     </div>
    </div>;

}

export default App;
