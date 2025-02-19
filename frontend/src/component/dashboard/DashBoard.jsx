
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Grid,
  IconButton,
  Button,
} from "@mui/material";
import {
  Dashboard,
  Favorite,
  CalendarToday,
  Settings,
  CheckCircle,
  FitnessCenter,
  DirectionsRun,
  Apple,
} from "@mui/icons-material";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

// Sample Data for Chart
const analyticsData = [
  { name: "Jan", value: 3.6 },
  { name: "Feb", value: 2.5 },
  { name: "Mar", value: 4.2 },
  { name: "Apr", value: 3.8 },
  { name: "May", value: 4.0 },
  { name: "Jun", value: 2.9 },
  { name: "Jul", value: 3.7 },
];

const DashboardComponent = () => {
  return (
    <Box display="flex" bgcolor="#f5f5f5" height="100vh">
      {/* Sidebar */}
      <Box
        width="80px"
        bgcolor="white"
        p={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
        borderRight="2px solid #eee"
      >
        <Avatar sx={{ width: 50, height: 50, mb: 2 }} />
        {[Dashboard, Favorite, CalendarToday, Settings].map((Icon, index) => (
          <IconButton key={index} sx={{ my: 1, color: "#666" }}>
            <Icon fontSize="large" />
          </IconButton>
        ))}
      </Box>

      {/* Main Content */}
      <Box flex={1} p={3}>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" fontWeight="bold">
            Health Records Dashboard
          </Typography>
          <Box display="flex" alignItems="center">
            <Button variant="outlined" startIcon={<CalendarToday />}>
              Sep 02 - Sep 09
            </Button>
            <Avatar sx={{ ml: 2 }} />
          </Box>
        </Box>

        {/* Dashboard Widgets */}
        <Grid container spacing={3} mt={2}>
          {/* Wellness Card */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h6" fontWeight="bold">
                Wellness
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="primary">
                19,365.29 KCAL
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Calories Burned: 265 | Workouts: 8
              </Typography>
            </Paper>
          </Grid>

          {/* Analytics Card with Bar Chart */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h6" fontWeight="bold">
                Analytics
              </Typography>
              <Typography variant="h4" color="primary" fontWeight="bold">
                98.57° <small style={{ fontSize: "14px", color: "green" }}>
                  +0.7%
                </small>
              </Typography>
              <ResponsiveContainer width="100%" height={100}>
                <BarChart data={analyticsData}>
                  <XAxis dataKey="name" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#4CAF50" />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          {/* Progress Tracker */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h6" fontWeight="bold">
                Progress
              </Typography>
              <Box display="flex" alignItems="center" mt={1}>
                <DirectionsRun sx={{ fontSize: 50, color: "green" }} />
                <Typography variant="h3" fontWeight="bold" ml={2}>
                  139
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary">
                Running, Sport, Workout
              </Typography>
            </Paper>
          </Grid>

          {/* Workout Tracker */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h6" fontWeight="bold">
                Workout
              </Typography>
              <Box display="flex" alignItems="center" mt={1}>
                <FitnessCenter sx={{ fontSize: 50, color: "blue" }} />
                <Typography variant="h3" fontWeight="bold" ml={2}>
                  139/160h
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary">
                Time Tracking: +3.5%
              </Typography>
            </Paper>
          </Grid>

          {/* Health Reminder */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h6" fontWeight="bold">
                Take a Deep Breath
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Wait 2 sec and then take a deep breath!
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Start
              </Button>
            </Paper>
          </Grid>

          {/* Nutrition */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h6" fontWeight="bold">
                Nutrition
              </Typography>
              <Box display="flex" alignItems="center" mt={1}>
                <Apple sx={{ fontSize: 40, color: "red" }} />
                <Typography variant="h3" fontWeight="bold" ml={2}>
                  4,596m
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary">
                Apple Juice + Workout
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DashboardComponent;
