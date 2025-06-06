import { Box, Card, CardContent, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card sx={{ maxWidth: 400, padding: 2, textAlign: "center" }}>
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom>
            Book Management System
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Home;
