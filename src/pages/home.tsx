import { Card, CardContent, Typography } from "@mui/material";
import LottieAnimation from "../components/animations/LottieAnimation";

const Home = () => {
  return (
    <Card sx={{ textAlign: "center", marginTop: "16px" }}>
      <CardContent>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Book Management System
        </Typography>
        <LottieAnimation />
      </CardContent>
    </Card>
  );
};

export default Home;
