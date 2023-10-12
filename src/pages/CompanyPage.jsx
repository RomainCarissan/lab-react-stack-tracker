import * as React from "react";
import { useParams, Link } from "react-router-dom";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();
  const companyMatch = companies.find(
    (company) => company.slug === companySlug
  );
  return (
    <div>
      <h1>Company Profile</h1>
      <div
        className="company-page-list"
        style={{
          gap: "2rem",
          margin: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <a href={`https://${companyMatch.website}`} className="company-name">
          {companyMatch.name}
        </a>
        <img
          src={companyMatch.logo}
          alt={`${companyMatch.name} logo`}
          className="company-image"
          style={{ height: "10rem" }}
        />
        <p className="company-description">{companyMatch.description}</p>
      </div>

      <div
        className="tech-stack-list"
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        {companyMatch.techStack.map((tech) => (
          <Link
            to={`/tech/${tech.slug}?company=${companyMatch.slug}`}
            key={tech.slug}
            className="tech-card"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              margin: 10,
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <img
              src={tech.image}
              alt={`${tech.name} logo`}
              className="tech-image"
              style={{ maxHeight: "10rem", maxWidth: "10rem" }}
            />
            {tech.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CompanyPage;
