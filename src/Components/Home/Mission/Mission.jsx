import "./Mission.css";
import img1 from "../assets/cardimg1.png";
import img2 from "../assets/cardimg2.png";
import img3 from "../assets/cardimg3.png";
import img4 from "../assets/cardimg4.png";
import img5 from "../assets/cardimg5.png";
import GetStarted from "./getStarted";
import { useState } from "react";

const Mission = () => {
  return (
    <div className="missiontotalcontainer">
      <div className="missioncontainer">
        <div className="missionheadingcontainer">
          <div className="missionheading">Our Mission</div>
        </div>
        <div className="missiondescription">
          At BitBhoomi, we're on a mission to redefine sustainability through
          blockchain <br /> transparency and inclusivity. By tokenizing
          ownership, we aim to <br /> democratize the ecosystem and foster
          positive change, thus promoting a healthier planet.
        </div>
      </div>
      <WhyBit />
    </div>
  );
};

export default Mission;

const WhyBit = () => {
  return (
    <div className="whybitcontainer">
      <div className="whybitheading">Why BitBhoomi?</div>
      <div className="crouselMainContainer">
        <CrouselContainer />
        <div>
          <img src="./GlobeImage.png" alt="global" className="globalimage" />
        </div>
      </div>
      <WhyBitCards />
      <GetStarted />
    </div>
  );
};

const CrouselContainer = () => {
  const [selectedcarousel, setSelectedCarousel] = useState(null);
  const items = [
    {
      title: "Embrace a Revolution",
      description:
        "Step into the future of sustainability with BitBhoomi, the world's first blockchain-based marketplace dedicated to environmental impact projects. We're not just a platform; we're a movement, empowering individuals and corporations to contribute to a greener tomorrow.",
      color: "#99ea05",
    },
    {
      title: "Transparency Redefined",
      description:
        "Say goodbye to opacity and hello to a clear, accountable impact. Our blockchain technology ensures that every tree planted, and every project initiated is verifiable and traceable. ",
      color: "#8bcf0f",
    },
    {
      title: "Democratizing Sustainability",
      description:
        "We believe that sustainability is everyone's responsibility. BitBhoomi democratizes the ecosystem by introducing tokenization. Now, both corporate giants and individual enthusiasts can actively engage in impactful projects, making sustainability accessible to all.",
      color: "#669909",
    },
    {
      title: "Tokenizing Magic",
      description:
        "Witness the magic of tokenization as BitBhoomi transforms environmental contributions into digital tokens. Your participation becomes tangible, tradable, and contributory to a global movement for positive change.",
      color: "#446902",
    },
    {
      title: "Explore, Invest, Earn",
      description:
        "Discover a marketplace where transparency meets opportunity. Explore impactful projects, invest in sustainability, and earn through carbon credits and green credits. BitBhoomi is not just a platform; it's your bridge to a sustainable future.",
      color: "#172400",
    },
  ];
  return (
    <div className="missioncarouselcontainer">
      {items.map((item, index) => (
        <Carousel
          content={item}
          key={"missioncarouse-" + index}
          isSelected={selectedcarousel === index}
          onClick={() => {
            setSelectedCarousel((prev) => {
              if (prev === index) return null;
              return index;
            });
          }}
        />
      ))}
    </div>
  );
};

const Carousel = ({ content, isSelected, onClick }) => {
  return (
    <div onClick={onClick}>
      <div
        className="missioncarousel"
        style={{ backgroundColor: content.color }}
      >
        {content.title}
        <CarouselIcon isSelected={isSelected} color={content.color} />
      </div>
      {isSelected && (
        <div
          className="carouseldescription"
          style={{
            animation: isSelected ? "scale-up-top 0.5s" : "scale-down-top 0.5s",
            background: content.color,
          }}
        >
          {content.description}
        </div>
      )}
    </div>
  );
};

const CarouselIcon = ({ isSelected, color }) => (
  <div
    className="missioncarouselicon"
    style={{
      color: color,
    }}
  >
    {isSelected ? "-" : "+"}
  </div>
);

const WhyBitCards = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--padding-light)",
      }}
    >
      <div className="whybitcardrow1">
        <div
          style={{
            borderRadius: "30px",
            background: "#194B1B",
            padding: "var(--padding-main)",
            display: "flex",
          }}
        >
          <div
            style={{
              border: "2px solid var(--text-bright)",
              borderRadius: "20px",
              padding: "var(--padding-main)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                fontSize: "30px",
                fontFamily: `"DM Serif Display", serif`,
              }}
            >
              Eco-Collaborators Uniting Stakeholders for a Sustainable Tomorrow
            </div>
            <div
              style={{
                fontSize: "20px",
                lineHeight: "36px",
              }}
            >
              BitBhoomi is a hub for diverse stakeholders committed to a greener
              future
            </div>
          </div>
        </div>

        <WhyBitImagecard
          src={img1}
          description={
            "Lead the green revolution! Initiate and coordinate reforestation projects, manage visions, strategies, and project oversight. BitBhoomi offers a comprehensive platform for project owners to showcase, manage, and report on their initiatives with transparency."
          }
          title={"Project Owners"}
          color={"#669909"}
        />
      </div>

      <div className="whybitcardrow2">
        <WhyBitImagecard
          src={img2}
          description={
            "Foster sustainability! Businesses, join BitBhoomi to support CSR initiatives, engage in partnerships, and utilize the platform for your operations. Showcase your commitment to environmental conservation and easily generate sustainability reports."
          }
          title={"Corporates"}
          color={"#99ea05"}
        />
        <WhyBitImagecard
          src={img3}
          description={
            " Invest with impact! Individuals and entities can now invest and support various projects listed on BitBhoom. Investors actively contribute to and benefit from the success of reforestation initiatives."
          }
          title={"Investors"}
          color={"#8bcf0f"}
        />
        <WhyBitImagecard
          src={img4}
          description={
            "Show your commitment! Present and transparently communicate tree plantation campaigns conducted as part of CSR activities. Generate impact reports and strengthen your commitment to a sustainable future."
          }
          title={"CSR Organizations"}
          color={"#172400"}
        />
      </div>
      <div className="whybitcardrow3">
        <WhyBitImagecard
          src={img5}
          description={
            "Make a difference! Individuals and organizations contributing funds or resources to projects on BitBhoomi play a crucial role in driving positive change. Your donations contribute to charitable and developmental purposes, fostering environmental sustainability."
          }
          title={"Donors"}
          color={"#446902"}
        />

        <div
          style={{
            borderRadius: "30px",
            background: "#172400",
            padding: "var(--padding-main)",
            display: "flex",
          }}
        >
          <div
            style={{
              border: "2px solid var(--text-bright)",
              borderRadius: "20px",
              padding: "var(--padding-main)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                fontSize: "20px",
                lineHeight: "36px",
              }}
            >
              Each stakeholder plays a crucial role, and here's how they can
              harness its power.
            </div>
            <div
              style={{
                fontSize: "20px",
                lineHeight: "36px",
              }}
            >
              Become an EcoCollaborator on BitBhoomi and be a part of a global
              community dedicated to creating a sustainable and interconnected
              future!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyBitImagecard = ({ src, title, description, color }) => {
  const [isHovered, setisHovered] = useState(false);
  return (
    <div
      style={{
        position: "relative",
      }}
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
    >
      <div
        style={{ backgroundImage: `url(${src})` }}
        className="whybitcardimage"
      />
      {isHovered && (
        <div
          className="whybitcardimage"
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            background: color,
            padding: "20px",
            display: "flex",
            cursor: "context-menu",
            animation: "scale-up 0.5s",
            // transformOrigin: "bottom",
          }}
        >
          <div
            style={{
              border: "4px solid white",
              padding: "10px",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              textAlign: "center",
              lineHeight: "21px",
            }}
          >
            <div style={{ fontWeight: "700", fontSize: "24px" }}>{title}</div>
            <div style={{ fontSize: "14px" }}>{description}</div>
          </div>
        </div>
      )}
    </div>
  );
};
