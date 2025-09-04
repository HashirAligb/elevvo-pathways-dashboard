import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is Elevvo Dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Elevvo Dashboard is a comprehensive recruitment management platform designed to help HR teams 
            track applicants, manage hiring pipelines, and monitor company partnerships. It provides real-time 
            insights into your talent acquisition process and partner company relationships.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I add new applicants?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            New applicants can be added through the Applicants page. Simply navigate to the "Manage Team" 
            section in the sidebar, click the "Add New" button, and fill in the required information including 
            name, email, role, and initial status. The system will automatically assign a unique ID and track 
            their progress through the hiring pipeline.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Can I export applicant data?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes! The Applicants page includes full CSV export functionality. You can export all applicant data 
            or filtered results using the export button in the DataGrid toolbar. This feature is perfect for 
            creating reports, sharing data with stakeholders, or backing up your recruitment information.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I track interview progress?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Interview progress is tracked through our status system. Each applicant moves through four main 
            stages: Applied, Interviewing, Hired, or Rejected. You can update these statuses in real-time 
            from the Applicants page, and the dashboard will automatically reflect these changes in your 
            analytics and progress tracking.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What types of companies can I manage?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Elevvo Dashboard supports companies across all industries. The system automatically categorizes 
            companies by industry (Tech, Finance, Healthcare, Retail, etc.) and tracks open roles, contact 
            information, and partnership status. You can search, filter, and manage company relationships 
            through the Companies page with full search and filtering capabilities.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I generate reports?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Reports can be generated from multiple locations. Use the "Schedule Interview" button on the 
            dashboard for quick actions, or visit the Insights page for comprehensive analytics including 
            Applicants by Status and Companies by Industry charts. All data can be exported in various 
            formats, and the dashboard provides real-time metrics for Total Applicants, Hired Candidates, 
            Active Companies, and Open Roles.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;