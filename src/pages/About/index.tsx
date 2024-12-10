import {
  Button,
  Card,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const About = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email:"",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let valid = true;

    if (!name) {
      setErrors((prev) => ({ ...prev, name: "Name is required." }));
      valid = false;
    }

    if (!phone) {
      setErrors((prev) => ({ ...prev, phone: "Contact number is required." }));
      valid = false;
    }

    if (!email) {
      // console.log({ name, phone, email, message });
      setErrors((prev)=>({
        ...prev,email:"Email required"
      }));
      valid = false;
    }
  };

  return (
    <div>
      <Paper
        sx={{
          maxHeight: 500,
          marginTop: 25,
          marginLeft: { xs: 2, md: 20 },
          marginRight: { xs: 2, md: 18 },
          padding: 2,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ marginTop: 4 }}>
            <Typography variant="h5" gutterBottom>
              Send me a Message
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your name"
                    variant="standard"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setErrors((prev) => ({ ...prev, name: "" }));
                    }}
                    error={!!errors.name}
                    helperText={errors.name}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your phone"
                    variant="standard"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      setErrors((prev) => ({ ...prev, phone: "" }));
                    }}
                    error={!!errors.phone}
                    helperText={errors.phone}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Your email"
                    variant="standard"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrors((prev) => ({ ...prev, email: "" }));
                    }}
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    variant="standard"
                    multiline
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ marginLeft: "10px" }}
                  >
                    Send
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>

          <Grid item xs={12} md={5} sx={{ marginTop: 4 , marginBottom:10 }}>
            <Card
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "#394b59",
                padding: 2,
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" marginTop={5} style={{ color: "white" }}>
                Contact Information
              </Typography>
              <Typography marginTop={5} style={{ color: "white" }}>
                📞 +94 761709287
              </Typography>
              <Typography marginTop={5} style={{ color: "white" }}>
                ✉️ lionishapremajeyanthan2000@gmail.com
              </Typography>
              <Typography marginTop={5} style={{ color: "white" }}>
                📍 vattappali, mullaitivu, Sri Lanka
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default About;
