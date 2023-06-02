import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import conf from "../src/assets/conf1.jpeg";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
 
const Home = () => {
  const [RoomCode, setRoomCode] = useState("");
  const navigate = useHistory();

  const submitCode = (e) => {
    e.preventDefault();
    navigate.push(`/room/${RoomCode}`);
  };

  return (
    <div>
      <div style={{ position: "relative", height: "100vh" }}>
        {/* Image */}
        <div style={{ position: "absolute", height: "100%", width: "100%", overflow: "hidden" }}>
          <img src={conf} alt="conference" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
        </div>
        {/* Overlay */}
        <div style={{ position: "absolute", height: "100%", width: "100%", flex: 1, backgroundColor: "rgba(0, 0, 0, 0.6)" }}></div>
        {/* Hero Info */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 10,
            padding: "0 24px",
            maxWidth: "90vw",
            margin: "0 auto",
            height: "100%",
            boxSizing: "border-box",
          }}
        >
          {/* Main */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: 8 }}>
            <Typography variant="h1" style={{ color: "#fff", fontWeight: "bold", paddingTop: 12 }}>
              MAKE AN INTERVIEW
            </Typography>
            <Typography variant="h4" style={{ color: "#fff", marginTop: -2 }}>
              With Khadamni
            </Typography>
          </div>

          {/* Enter Code */}
          <form onSubmit={submitCode} style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "#fff", paddingTop: 12 }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <Typography variant="h2" style={{ fontWeight: "bold", paddingTop: 6 }}>
                Enter Room Code
              </Typography>
              <TextField
                type="text"
                required
                
                placeholder="Enter Room Code"
                value={RoomCode}
                onChange={(e) => setRoomCode(e.target.value)}

                InputProps={{
                  style: {
                    fontSize: "2rem"
                  },
                  pattern: "^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9\\d]{8,}$",
                  title: "Please enter a valid room code with at least one letter and one number"
                 
                
                }}
                style={{ padding: "20px 40px", borderRadius: 40, maxWidth: "40rem", marginTop: 2, backgroundColor: "#fff", color: "#000" }}
              />
            </div>
            <Button
  type="submit"
  variant="contained"
  color="primary"
  
  style={{
    marginTop: 6,
    width: "3rem",
    borderRadius: 15,
    padding: "15px 30px",
    fontSize: "1.2rem",
    textTransform: "none",
    fontSize: "1.5rem"
  }}
>
  Go
</Button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
