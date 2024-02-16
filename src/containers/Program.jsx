import React from "react";
import { Container } from "react-bootstrap";
import BoardMember from "../components/BoardMember";

const Program = () => {
  const committees = [
    {
      displayName: "Organization",
      description:
        "Involves creating a strong foundation for a sustainable revitalization effort, including cultivating partnerships, community involvement, and resources for the district.",
    },
    {
      displayName: "Promotions",
      description:
        "Positions the Red Oak District as the cultural, artistic, and historical center of the community and a hub of economic activity, while creating a positive image that showcases our community's unique characteristics.",
    },
    {
      displayName: "Design",
      description:
        "Supports our community’s transformation by enhancing the physical and visual assets that set the commercial district apart.",
    },
    {
      displayName: "Economic Vitality",
      description:
        "Focuses on capital, incentives, and other economic and financial tools to assist new and existing businesses, catalyze property development, and create a supportive environment for entrepreneurs and innovators that drive local economies.",
    },
  ];
  const boardMembers = [
    { displayName: "Douglas Brown", imageName: "DouglasBrown" },
    { displayName: "Dr. Ronald Tolbert", imageName: "RonaldTolbert" },
    { displayName: "Dr. Sylvia Carter", imageName: "SylviaCarter" },
    { displayName: "Josephine Smart", imageName: "JosephineSmart" },
    { displayName: "Lee Muhammad", imageName: "LeeMuhammad" },
    { displayName: "Sandra Green", imageName: "SandraGreen" },
  ];

  return (
    <Container>
      <h1>Red Oak Main Street Program</h1>
      <p>
        Established in 2020, The Red Oak District Main Street Program is a
        community-driven initiative dedicated to revitalizing and preserving the
        historic downtown area of Red Oak, a neighborhood in the City of South
        Fulton. Through strategic planning, economic development efforts, and
        community engagement, the program aims to enhance the vibrancy and
        economic vitality of the district while celebrating its unique heritage.
        By fostering partnerships between local businesses, residents, and
        stakeholders, the Red Oak District Main Street Program strives to create
        a thriving destination for commerce, culture, and community in the heart
        of Red Oak!
      </p>
      <h2>About the Board</h2>
      <p>
        Our advisory board is made up of local business owners, nonprofit
        leaders, and residents who provide support to the revitalization effort.
      </p>
      <h2>Mission Statement</h2>
      <p>
        Our mission is to revitalize the historic Red Oak District to become a
        vibrant destination by implementing programs that preserve and showcase
        our rich history and creative community so that individuals, families
        and businesses can thrive.
      </p>
      <h2>Main Street Committees</h2>
      {committees.map((committee) => (
        <>
          <h3>{committee.displayName}</h3>
          <p>{committee.description}</p>
        </>
      ))}
      <h2>Main Street Board</h2>
      <div className="row d-flex justify-content-center">
        {boardMembers.map((member) => (
          <div className="col-xl-2 col-lg-3 col-md-4 col-6">
            <BoardMember member={member} />
          </div>
        ))}
      </div>
      <div className="mt-5">To learn more about the power of Main Street:</div>
      <div>
        <a
          href="https://www.mainstreet.org/home"
          target="_blank"
          rel="noreferrer"
        >
          Main Street America
        </a>
      </div>
      <div>
        <a
          href="https://www.georgiadowntownassociation.org/"
          target="_blank"
          rel="noreferrer"
        >
          Georgia Downtown Association
        </a>
      </div>
    </Container>
  );
};

export default Program;
