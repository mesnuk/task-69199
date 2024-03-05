import { Box } from "@mui/material";
import TodoTabs from "../../components/UI/TodoTabs";
import TodoTitle from "../../components/UI/TodoTitle";
import TodoCreate from "../../components/UI/TodoCreate";

const Main = () => {
  return (
    <Box
      component={"main"}
      sx={{
        height: "100vh",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "500px",
          margin: "20px auto",
          padding: '0 10px'
        }}
      >
        <TodoTitle />
        <TodoCreate />
        <TodoTabs />
      </Box>
    </Box>
  );
};

export default Main;
