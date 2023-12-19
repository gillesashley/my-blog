import {
  Container,
  Grid,
  Typography,
  Link,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#3f51b5",
        padding: "2rem",
        marginTop: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h5"
              color="textPrimary"
              style={{ marginBottom: "2rem" }}
            >
              Your Logo or Site Name
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Your tagline or a brief description of your site.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" color="textPrimary">
                  Quick Links
                </Typography>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1rem",
                  }}
                >
                  <li>
                    <Link
                      href="#"
                      color="textPrimary"
                      variant="body2"
                      underline="hover"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      color="textPrimary"
                      variant="body2"
                      underline="hover"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      color="textPrimary"
                      variant="body2"
                      underline="hover"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" color="textPrimary">
                  Connect
                </Typography>
                <Box style={{ display: "flex", gap: "2rem" }}>
                  <IconButton color="inherit">
                    <FacebookIcon />
                  </IconButton>
                  <IconButton color="inherit">
                    <TwitterIcon />
                  </IconButton>
                  <IconButton color="inherit">
                    <InstagramIcon />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider style={{ margin: "1.5rem 0" }} />
        <Typography variant="body2" color="textSecondary" align="center">
          Copyright © {new Date().getFullYear()} Your Company Name
        </Typography>
      </Container>
    </footer>
  );
}
