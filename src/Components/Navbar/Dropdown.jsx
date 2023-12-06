import { List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import { logout } from "../../api/userApi";
import { Typography, Divider } from "@mui/material";
import Person2Icon from "@mui/icons-material/Person2";
import LogoutIcon from "@mui/icons-material/Logout";

const profileDropdown = [
  { to: "/profile", name: "Profile" },
  { to: "/home", name: "Logout" },
];

const Dropdown = ({ handleMouseLeave, setMobileOpen, dropdown }) => {
  const { setIsLoggedIn } = useAuth();

  // const projectDropdown = isLoggedIn
  //   ? [
  //       { to: "/createProject", name: "Create Project" },
  //       { to: "/projectDetails", name: "Project Details" },
  //     ]
  //   : [
  //       { to: "/ongoingProjects", name: "Ongoing Project" },
  //       { to: "/completedProjects", name: "Completed Project" },
  //     ];
  const projectDropdown = [
    { to: "/createProject", name: "Create Project" },
    { to: "/projectDetails", name: "Project Details" },
  ];

  return (
    <>
      <List
        sx={{
          color: "black",
          padding: "0 10px",
          backgroundColor: "white",
          position: "absolute",
          top: dropdown === "Projects" ? { xs: "2rem", sm: "3rem" } : "2.5rem",
          right: "5px",
          width: "fit-content",
          zIndex: "100",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "4px",
        }}
      >
        <ListItem disablePadding>
          <div style={{ margin: "auto" }}>
            {dropdown === "Projects"
              ? projectDropdown.map((elem, index) => {
                  return (
                    <Link
                      key={index}
                      to={elem.to}
                      onClick={() => {
                        handleMouseLeave();
                        setMobileOpen(false);
                      }}
                      className="dropdownLinks"
                    >
                      {elem.name}
                    </Link>
                  );
                })
              : profileDropdown.map((elem, index) => {
                  return (
                    <Link
                      key={"dropdown-" + index}
                      to={elem.to}
                      onClick={() => {
                        handleMouseLeave();
                        setMobileOpen(false);
                        if (elem.name === "Logout") {
                          logout();
                          setIsLoggedIn(false);
                        }
                      }}
                      className="dropdownLinks"
                    >
                      {elem.name === "Logout" && <LogoutIcon />}
                      {elem.name === "Profile" && <Person2Icon />}
                      <Typography variant="h6" sx={{ my: 2 }}>
                        {elem.name}
                      </Typography>
                      <Divider />
                    </Link>
                  );
                })}
          </div>
        </ListItem>
      </List>
    </>
  );
};

export default Dropdown;
