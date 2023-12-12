import { AppBar, CssBaseline, Box, Toolbar } from "@mui/material";
import SideDrawer from "./drawer";
import usenavbar from "./usenavbar";
import NavLinks from "./navlinks";
import NavbarPlaceholder from "./navbarPlaceholder";

const NavContent = () => {
  const script = usenavbar();

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          zIndex: 10,
          boxShadow: script.scroll ? "4" : "none",
          background: "var(--green-15)",
          position: "fixed",
          top: 0,
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            maxWidth: "var(--max-width)",
            margin: "auto",
          }}
        >
          <NavLinks script={script} />
        </Toolbar>
      </AppBar>
      <SideDrawer script={script} />
      <NavbarPlaceholder />
    </Box>
  );
};

export default NavContent;
