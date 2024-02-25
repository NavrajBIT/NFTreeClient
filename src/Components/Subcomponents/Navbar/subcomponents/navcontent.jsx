import {AppBar, CssBaseline, Box, Toolbar} from "@mui/material";
import SideDrawer from "./drawer";
import usenavbar from "./usenavbar";
import NavLinks from "./navlinks";

const NavContent = () => {
  const script = usenavbar();

  return (
    <Box
      sx={{
        display: "flex"
      }}>
      <CssBaseline />
      <AppBar
        component='nav'
        sx={{
          zIndex: 10,
          boxShadow: script.scroll ? "4" : "none",
          // background: script.scroll ? "var(--green-100)" : "transparent",
          background: "#1b4242e6",
          position: "fixed",
          top: 0
        }}>
        <Toolbar
          sx={{
            width: "100%",
            maxWidth: "var(--max-width)",
            margin: "auto"
          }}>
          <NavLinks script={script} />
        </Toolbar>
      </AppBar>
      <SideDrawer script={script} />
    </Box>
  );
};

export default NavContent;
