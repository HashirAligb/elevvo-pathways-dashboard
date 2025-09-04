import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockRecentApplications, mockApplicants, mockCompanies } from "../../data/mockData";
import Groups2Icon from "@mui/icons-material/Groups2";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BusinessIcon from "@mui/icons-material/Business";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventIcon from "@mui/icons-material/Event";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import ApplicationsChart from "../../components/ApplicationsChart";
import StatBox from "../../components/StatBox";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Elevvo Dashboard" subtitle="Talent and partners overview" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <EventIcon sx={{ mr: "10px" }} />
            Schedule Interview
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox title={String(mockApplicants.length)} subtitle="Total Applicants" progress="0.75" increase="" icon={<Groups2Icon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />} />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox title={String(mockApplicants.filter(a=>a.status==='Hired').length)} subtitle="Applicants Hired" progress="0.5" increase="" icon={<CheckCircleIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />} />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox title={String(mockCompanies.length)} subtitle="Active Companies" progress="0.3" increase="" icon={<BusinessIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />} />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox title={String(mockCompanies.reduce((s,c)=>s+c.openRoles,0))} subtitle="Open Roles" progress="0.8" increase="" icon={<WorkOutlineIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />} />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                Applicants by Status
              </Typography>
              <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>
                Interviews Scheduled
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <EventIcon sx={{ fontSize: "26px", color: colors.greenAccent[500] }} />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Applications
            </Typography>
          </Box>
          {mockRecentApplications.map((application, i) => (
            <Box
              key={`${application.id}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {application.name}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {application.date}
                </Typography>
              </Box>
              <Box
                backgroundColor={
                  application.status === "Hired"
                    ? colors.greenAccent[500]
                    : application.status === "Interviewing"
                    ? colors.blueAccent[500]
                    : application.status === "Rejected"
                    ? colors.redAccent[500]
                    : colors.grey[500]
                }
                p="5px 10px"
                borderRadius="4px"
                color={colors.grey[100]}
              >
                {application.status}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Companies by Industry
          </Typography>
          <Box height="250px" mt="20px">
            <PieChart />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Applications This Month
          </Typography>
          <Box height="250px" mt="-20px">
            <ApplicationsChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography variant="h5" fontWeight="600" sx={{ marginBottom: "15px" }}>
            Companies by Industry
          </Typography>
          <Box height="200px">
            <PieChart />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;