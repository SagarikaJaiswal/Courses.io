import { Typography } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

function LandingPage() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <center>
        <div style={{ margin: "auto" }}>
          <Typography
            variant="h1"
            style={{ fontFamily: "-moz-initial", margin: "20px" }}
          >
            Welcome to Courses.io
          </Typography>
          <Typography variant="h1" className=" italic font-mono m-10">
            Learn without limits.
          </Typography>
          <div className="font-normal m-2">
            <p>
              Start, switch, or advance your career with more than 5,800
              courses,
              <br />
              Professional Certificates, and degrees from world-class
              universities
              <br />
              and companies.
            </p>
          </div>
        </div>
      </center>
      <Footer />
    </div>
  );
}

export default LandingPage;
