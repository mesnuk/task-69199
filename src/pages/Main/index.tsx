import {Box,} from "@mui/material"
import TodoTabs from "../../components/UI/TodoTabs"

const Main = () => {

  return (
    <Box
      component={'main'}
      sx={{
        height: '100vh',
        width: '100%',
      }}
    >
      <TodoTabs/>

    </Box>
  )
}

export default Main
