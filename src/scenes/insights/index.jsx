import { useState } from "react";
import { Box, Typography, useTheme, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import { mockApplicants, mockCompanies, aggregateApplicantsByStatus, aggregateCompaniesByIndustry } from "../../data/mockData";

const Insights = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [statusFilter, setStatusFilter] = useState("all");
  const [industryFilter, setIndustryFilter] = useState("all");

  const filteredApplicants = statusFilter === "all" 
    ? mockApplicants 
    : mockApplicants.filter(a => a.status === statusFilter);

  const filteredCompanies = industryFilter === "all" 
    ? mockCompanies 
    : mockCompanies.filter(c => c.industry === industryFilter);

  const applicantStatuses = ["all", ...Array.from(new Set(mockApplicants.map(a => a.status)))];
  const industries = ["all", ...Array.from(new Set(mockCompanies.map(c => c.industry)))];

  return (
    <Box m="20px">
      <Header title="INSIGHTS" subtitle="Analytics and trends for your pipeline" />
      
      {/* Filters */}
      <Box display="flex" gap="20px" mb="20px">
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Filter by Status</InputLabel>
          <Select
            value={statusFilter}
            label="Filter by Status"
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            {applicantStatuses.map((status) => (
              <MenuItem key={status} value={status}>
                {status === "all" ? "All Statuses" : status}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Filter by Industry</InputLabel>
          <Select
            value={industryFilter}
            label="Filter by Industry"
            onChange={(e) => setIndustryFilter(e.target.value)}
          >
            {industries.map((industry) => (
              <MenuItem key={industry} value={industry}>
                {industry === "all" ? "All Industries" : industry}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Charts Grid */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="400px"
        gap="20px"
      >
        {/* Applicants by Status Chart */}
        <Box
          gridColumn="span 6"
          backgroundColor={colors.primary[400]}
          p="20px"
          borderRadius="10px"
        >
          <Typography variant="h5" fontWeight="600" mb="20px">
            Applicants by Status
          </Typography>
          <Box height="320px">
            <BarChart />
          </Box>
        </Box>

        {/* Companies by Industry Chart */}
        <Box
          gridColumn="span 6"
          backgroundColor={colors.primary[400]}
          p="20px"
          borderRadius="10px"
        >
          <Typography variant="h5" fontWeight="600" mb="20px">
            Companies by Industry
          </Typography>
          <Box height="320px">
            <PieChart />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Insights; 