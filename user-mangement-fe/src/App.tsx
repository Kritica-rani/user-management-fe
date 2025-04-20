import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import HeaderCard from "./components/header-card/HeaderCard";
import { UserProvider } from "./context/UserContext";
import AddUserForm from "./user/UserForm";
import { Container } from "@mui/material";
import UserTable from "./user/UserTable";

function App() {
  return (
    <UserProvider>
      <ToastContainer position="top-right" autoClose={3000} />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <HeaderCard>
          <AddUserForm />
          <UserTable />
        </HeaderCard>
      </Container>
    </UserProvider>
  );
}

export default App;
