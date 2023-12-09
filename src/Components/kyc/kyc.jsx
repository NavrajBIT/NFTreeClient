import Kyc from "./Kyc/Kyc";
import { Grid } from "@mui/material";

import "./Profile.css";

const KYCPage = () => {
  return (
    <Grid
      container
      sx={{
        marginTop: "4rem",
      }}
    >
      <div className="profileContent">
        <Kyc />
      </div>
    </Grid>
  );
};

export default KYCPage;
