import { useState, useEffect } from "react";

const usenavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [isMouseEnterProfile, setIsMouseEnterProfile] = useState(false);

  const drawerWidth = 240;
  const navItems = ["Home", "Projects", "Wallet"];

  const scrolling = () => {
    window.scrollY >= 2 ? setScroll(true) : setScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrolling);

    return () => {
      window.removeEventListener("scroll", scrolling);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
    if (isMouseEnter) setIsMouseEnter(false);
  };

  const handleMouseEnter = () => setIsMouseEnter(true);

  const handleMouseLeave = () => {
    setIsMouseEnter(false);
    setMobileOpen(false);
  };

  const handleMouseEnterProfile = () => setIsMouseEnterProfile(true);

  const handleMouseLeaveProfile = () => {
    setIsMouseEnterProfile(false);
    setMobileOpen(false);
  };

  const handleSidebarClick = (event) => {
    const clickedElement = event.target;
    if (!clickedElement.classList.contains("projectLink")) {
      setIsMouseEnter(false);
    }
  };
  return {
    mobileOpen,
    setMobileOpen,
    scroll,
    setScroll,
    isMouseEnter,
    setIsMouseEnter,
    isMouseEnterProfile,
    setIsMouseEnterProfile,
    drawerWidth,
    navItems,
    handleDrawerToggle,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseEnterProfile,
    handleMouseLeaveProfile,
    handleSidebarClick,
  };
};

export default usenavbar;
