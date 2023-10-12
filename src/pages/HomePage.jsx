import * as React from "react";
import { Link } from "react-router-dom";
import companisesJSON from "./CompanyPage";
import techologiesJSON from "./TechnologyPage";

function HomePage({ companies }) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div
        className="home-page-list"
        style={{
          marginTop: "10rem",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {companies.map((company) => {
          return (
            <Link
              to={`/company/${company.slug}`}
              key={company.id}
              className="home-page-link"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                margin: 10,
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              {company.name}
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="company-image"
                style={{
                  maxHeight: "10rem",
                  maxWidth: "10rem",
                }}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
