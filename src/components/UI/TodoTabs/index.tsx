import {TabContext, TabList, TabPanel} from "@mui/lab"
import {Box, Tab} from "@mui/material"
import {useAppDispatch, useAppSelector} from "../../../hooks/useAppDispatch"
import {changeFilterStatus} from "../../../store/slices/todoSlice.ts"
import {FilterStatus} from "../../../interfaces/general.ts"
import useFilterTodos from "../../../hooks/useFilterTodos.ts"
import {TodoStatus} from "../../../interfaces/enum.ts"

const TodoTabs = () => {
  const dispatch = useAppDispatch()
  const {filteredTodos} = useFilterTodos()

  const filterStatus = useAppSelector(state => state.todo.filterStatus)


  const handleChange = (event: React.SyntheticEvent, newValue: FilterStatus) => {
    dispatch(changeFilterStatus(newValue))
  }

  return <TabContext value={filterStatus}>
    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
      <TabList onChange={handleChange} aria-label="lab API tabs example">
        <Tab label={"All"} value="ALL"/>
        <Tab label={"Completed"} value={TodoStatus.COMPLETED}/>
        <Tab label={"Uncompleted"} value={TodoStatus.UNCOMPLETED}/>
      </TabList>
    </Box>
    <TabPanel value="ALL">
      Item One
    </TabPanel>
    <TabPanel value={TodoStatus.COMPLETED}>
      Item Two
    </TabPanel>
    <TabPanel value={TodoStatus.UNCOMPLETED}>
      Item Three
    </TabPanel>
  </TabContext>
}

export default TodoTabs