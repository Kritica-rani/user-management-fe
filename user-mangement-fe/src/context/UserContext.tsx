import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { User } from "../types/types";
import { getUserValidationRules } from "../helper/UserFormValidation";
import { FormProvider, useForm } from "react-hook-form";
import { del, get, post } from "../services/api";
import { number } from "yup";

const defaultValues = {
  name: "",
  age: 0,
  email: "",
};
interface UserContextType {
  users: User[];
  fetchUsers: () => void;
  createUser: (userData: User) => void;
  deleteUserInfo: (userId: number) => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}
interface UserProviderProps {
  children: ReactNode;
}
const UserContext = createContext<UserContextType | undefined>(undefined);

// Custom hook to use UserContext
export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [open, setOpen] = useState(false);
  const validationSchema = yupResolver(getUserValidationRules());
  const methods = useForm({
    mode: "onSubmit",
    defaultValues,
    resolver: validationSchema,
  });
  useEffect(() => {
    fetchUsers();
  }, []);
  // Fetch users from the API
  const fetchUsers = async () => {
    try {
      const response = await get<User[]>("/users/");
      setUsers(response);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Create a new user
  const createUser = async (userData: User) => {
    try {
      const usersData = await post<User[]>("/users/", userData);
      fetchUsers();
      toast.success("User added!");
    } catch (error: any) {
      console.log("error", error);
      if (error.response && error.response.status === 400) {
        toast.error(
          error.response.data.detail ||
            "Something went wrong,Please check your form"
        );
        return;
      }
      toast.error("Something went wrong while adding users!");
    }
  };
  const deleteUserInfo = async (userId: number) => {
    try {
      if (userId) {
        const deletedUser = await del(`/users/${userId}`);
        fetchUsers();
        // Show success toast
        toast.success("User deleted successfully");
      }
    } catch (err: any) {
      if (err.response && err.response.status === 404) {
        toast.error(err.response.data.detail || "User not found");
      } else {
        // Handle other errors
        toast.error("Failed to delete user");
        console.error("Delete user error:", err);
      }
    }
  };
  const resetForm = () => {
    methods.reset();
  };
  const formContextValue = {
    ...methods,
  };
  const extendedContextValue = {
    users,
    open,
    setOpen,
    fetchUsers: () => fetchUsers(),
    createUser: (userData: User) => createUser(userData),
    resetForm: () => resetForm(),
    deleteUserInfo: (userId: number) => deleteUserInfo(userId),
  };
  return (
    <UserContext.Provider value={extendedContextValue}>
      <FormProvider {...formContextValue}>{children}</FormProvider>
    </UserContext.Provider>
  );
};
