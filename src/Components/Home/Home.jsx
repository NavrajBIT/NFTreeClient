import React from "react";
import About from "../About/About";
import Mission from "../Mission/Mission";
import {
	Box,
	Grid,
	Typography,
	Button
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import home from "./assets/home.png";
import "./Home.css";

const Home = () => {
	return (
		<>
			<div id="home"></div>
			<Grid
				container
				spacing={2}
				sx={{
					height: { xs: "70vh", sm: "90vh" },
					zIndex: 1,
					display: "flex",
					alignItems: "center",
					background: '#EBF3E8'
				}}
				id="homeContainer">
				<Grid
					item
					xs={12}
					sm={1}
					sx={{ display: { xs: "none", sm: "block" } }}></Grid>
				<Grid
					item
					xs={12}
					sm={5}
					sx={{
						height: "68%",
						backgroundImage: `url(${home})`,
						backgroundPosition: "center",
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						display: { xs: "block", sm: "none" },
					}}
					id="homeImg"></Grid>
				<Grid
					item
					xs={12}
					sm={5}
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<Box
						sx={{
							width: { xs: "90%", sm: "90%", lg: "70%" },
							textAlign: "start",
						}}
						className="homeTextBox">
						<Typography
							variant="h2"
							gutterBottom
							className="homeHead"
							sx={{ fontWeight: "bold" }}>
							NFTree
						</Typography>

						<Typography
							variant="body1"
							className="homeDesc"
							gutterBottom
							sx={{
								textAlign: "justify",
								marginBottom: '2rem'
							}}>
							Welcome to NFTree, the platform that provides a new way to save the environment and reward investors at the same time. With our NFTree, you can exercise your social responsibility without compromising your investment goals, and we can continue planting more trees around the globe.
						</Typography>

						<Button variant="contained" endIcon={<ArrowForwardIcon />} className="filledBtn">
							Get Started
						</Button>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					sm={5}
					sx={{
						height: "80%",
						backgroundImage: `url(${home})`,
						backgroundPosition: "center",
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						display: { xs: "none", sm: "block" },
					}}
					id="homeImgContainer"></Grid>
				<Grid
					item
					xs={12}
					sm={1}
					sx={{ display: { xs: "none", sm: "block" } }}></Grid>
			</Grid>

			<About />
			<Mission />
		</>
	);
};

export default Home;
