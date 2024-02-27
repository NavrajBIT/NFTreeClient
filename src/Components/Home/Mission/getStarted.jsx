import { useEffect, useState } from "react";
import getstartedimg from "../assets/getstarted.png";

const GetStarted = () => {
  const [selection, setSelection] = useState(1);

  useEffect(() => {
    const myinterval = setInterval(() => {
      setSelection((prev) => {
        if (prev === 1) return 2;
        return 1;
      });
    }, 5000);
    return () => clearInterval(myinterval);
  }, []);

  return (
    <div className="getstartedcontainer">
      <div className="getstartedcontentcontainer">
        <div className="getstartedheading">How to Get Started?</div>
        <div className="getstartedimagecontainermobile">
          <img src={getstartedimg} alt="BitBhoomi" />
        </div>
        <Marker selection={selection} />
        {selection === 1 ? <ForContributors /> : <ForDevelopers />}
      </div>
      <div className="getstartedimagecontainer">
        <img src={getstartedimg} alt="BitBhoomi" />
      </div>
    </div>
  );
};

export default GetStarted;

const Marker = ({ selection }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "var(--padding-light)",
        padding: "var(--padding-main) 0",
      }}
    >
      <div
        style={{
          width: "80px",
          height: "5px",
          background: selection === 1 ? "#499807" : "#71E80D",
        }}
      />
      <div
        style={{
          width: "80px",
          height: "5px",
          background: selection === 2 ? "#499807" : "#71E80D",
        }}
      />
    </div>
  );
};

const ForContributors = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--padding-main)",
        transformOrigin: "left",
        animation: "slide-left 0.5s",
      }}
    >
      <div
        style={{
          fontSize: "1.5rem",
          fontFamily: `"DM Serif Display", serif`,
        }}
      >
        FOR CONTRIBUTORS
      </div>
      <div
        style={{
          fontFamily: `"DM Serif Display", serif`,
        }}
      >
        (Donors/Investors)
      </div>
      <div>1. Explore Projects</div>
      <div>2. Select Projects</div>
      <div>3. Participate and Contribute</div>
      <div>4. Get Personalized Dashboard</div>
    </div>
  );
};

const ForDevelopers = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--padding-main)",
        transformOrigin: "left",
        animation: "slide-left 0.5s",
      }}
    >
      <div
        style={{
          fontSize: "1.5rem",
          fontFamily: `"DM Serif Display", serif`,
        }}
      >
        FOR PROJECT DEVELOPERS
      </div>

      <div>1. Register</div>
      <div>2. List Projects</div>
      <div>3. Add Campaign Details</div>
      <div>4. DMRV Dashboard</div>
      <div>5. Generate Impact Reports</div>
    </div>
  );
};
