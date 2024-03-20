import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Login from "./login/Login";
import Register from "./register/Register";

const App = () => {

    return (
        <Container fixed sx={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Container>
    )
}

export default App;