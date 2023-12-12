import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import logo1 from "/logo_colored.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SideDrawer = ({ script }) => {
  const navigate = useNavigate();
  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={script.mobileOpen}
        onClose={script.handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        onClick={script.handleSidebarClick}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: script.drawerWidth,
          },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            zIndex: "20",
          }}
          id="sidebar"
        >
          <Typography variant="h6" sx={{ my: 2 }}>
            <img
              src={logo1}
              alt=""
              onClick={() => {
                script.handleDrawerToggle();
                navigate("/");
              }}
              style={{
                height: "3.5rem",
                marginTop: ".5rem",
              }}
            />
          </Typography>
          <Divider />
          <List>
            {script.navItems.map((item, id) => {
              return (
                <div key={"side-nav-" + id}>
                  <ListItem disablePadding>
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className="navbarLinks otherLinks"
                      onClick={script.handleDrawerToggle}
                      style={{
                        color: "black",
                        width: "100%",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          my: 2,
                          width: "100%",
                          textAlign: "center",
                        }}
                      >
                        {item}
                      </Typography>
                    </Link>
                  </ListItem>
                  <Divider />
                </div>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SideDrawer;
