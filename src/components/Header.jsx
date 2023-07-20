import { Button, Typography } from "@mui/material";

const Header = () => {
  return (
    <div
      className="shadow-xl rounded-lg w-screen"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        margin: "5px",
      }}
    >
      <div>
        <Typography className="p-2" variant="h6">
          🎓Courses.io
        </Typography>
      </div>
      <div
        className="p-2 "
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div style={{ marginRight: 5 }}>
          <Button variant="contained">SIGNIN</Button>
        </div>
        <div>
          <Button variant="contained">SIGNUP</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
