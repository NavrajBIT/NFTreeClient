import React from "react";
import {
	Box,
	Grid,
	Typography,
	Card,
	CardMedia,
} from '@mui/material';
import BitSaudiImg from "./assets/mission2.png";
import "./Mission.css";

const Mission = () => {
	return (
		<>
			<div id="mission"></div>
			<Grid container spacing={8} justifyContent="center" className="mission">
				<Grid item xs={12} sm={2} md={1} lg={1} sx={{
					display: { xs: "none", md: "block" }
				}}>
				</Grid>
				<Grid
					item
					xs={12}
					sm={6}
					md={5}
					lg={5}>
					<Typography
						variant="h4"
						gutterBottom
						sx={{
							fontWeight: "bold",
							mb: 4,
							display: { xs: "block", sm: "none" },
							textAlign: "center",
						}}
						className="missionHead">
						The Impact and Mission of NFTree
					</Typography>
					<Card
						sx={{
							boxShadow: "none",
							background: 'transparent'
						}}
						className="missionImgContainer"
					>
						<CardMedia
							component="img"
							sx={{ width: 'unset' }}
							image={BitSaudiImg}
							alt="Image Alt Text"
							className="missionImg"
						/>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={5} lg={5} sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
					<Box
						sx={{
							width: { xs: '100%', xl: '75%' },
							padding: { xs: '0 1rem', sm: '0 2rem' },
							textAlign: "start",
							pr: { xs: 3, md: 0 },
						}}>
						<Typography
							variant="h4"
							gutterBottom
							sx={{
								fontWeight: "bold",
								mb: 4,
								display: { xs: "none", sm: "block" },
								textAlign: "justify",
							}}
							className="missionHead">
							The Impact and Mission of NFTree
						</Typography>
						<Typography
							sx={{
								typography: "body1",
								lineHeight: 1.8,
								textAlign: "justify",
							}}
							gutterBottom
							className="missionPara">
							At NFTree, we aim to pioneer a transformative intersection of technology,
							environmental sustainability, and community engagement and are committed to
							foster positive change, thus promoting a healthier planet.
						</Typography>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					sm={2}
					md={1}
					lg={1}
					sx={{ display: { xs: "none", md: "block" } }}></Grid>
			</Grid>
		</>
	);
};

export default Mission;
