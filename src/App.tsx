import "./style.css";
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Watches from "./components/Clock/Watches";
import Notes from "./components/CRUD/Notes";

export default function App() {
  return (
    <>
      <Watches />
      <Notes url="https://j4w33g-7070.csb.app/notes" />
    </>
  );
}
