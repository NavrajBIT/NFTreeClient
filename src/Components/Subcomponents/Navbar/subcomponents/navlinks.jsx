import { useNavigate, Link } from "react-router-dom";
import { Grid, Box } from "@mui/material";
import logo1 from "/logo_white.png";
import ContactLoginItems from "./login";
import MenuIcon from "@mui/icons-material/Menu";

const NavLinks = ({ script }) => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <MenuIcon
        onClick={script.handleDrawerToggle}
        className="navbar"
        sx={{
          display: { sm: "none" },
          filter: "invert(1)",
        }}
      />
      <Grid
        item
        component="div"
        sx={{
          display: { xs: "none", sm: "block" },
        }}
        className="navbarTitle"
      >
        <img
          src={logo1}
          onClick={() => navigate("/")}
          alt=""
          style={{
            height: "3rem",
            margin: "auto",
            marginTop: ".5rem",
            cursor: "pointer",
            paddingLeft: "var(--padding-light)",
          }}
          id="navbarLogo"
        />
      </Grid>
      <Grid
        item
        className="navLinksContainer"
        sx={{
          display: { xs: "none", sm: "flex" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            sx={{
              display: { sm: "none", md: "flex" },
            }}
          >
            <Link to={"/home"} className="navbarLinks">
              Home
            </Link>
          </Grid>

          <Link to={"/projects"} className="navbarLinks">
            Projects
          </Link>

          <Link to={"/wallet"} className="navbarLinks">
            Wallet
          </Link>
        </Box>
      </Grid>
      <ContactLoginItems script={script} />
    </Grid>
  );
};

export default NavLinks;
