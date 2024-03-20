import { Container } from "@mui/material";
import Login from "./login/Login";

export default function App() {
    return (
        <Container fixed sx={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Login />
        </Container>
    )
}