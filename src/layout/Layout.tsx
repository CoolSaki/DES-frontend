import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useStyles } from "./LayoutStyle";
import { Login } from "pages/Login/Login";
import { Register } from "pages/Register/Register";

export default function Layout() {
  const classes = useStyles();

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}
