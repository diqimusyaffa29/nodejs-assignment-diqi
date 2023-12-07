import {BrowserRouter, Routes, Route} from "react-router-dom"
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList/>}></Route>
        <Route path="/add" element={<AddUser/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
