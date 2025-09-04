import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Application Trends" subtitle="Monthly trends in applications, interviews, and hires" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;