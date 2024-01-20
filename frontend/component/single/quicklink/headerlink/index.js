import React from "react";
import "./headerlink.css";
import Link from "next/link";

export default function HeaderLink() {
  return (
    <div className="header-link">
      <table className="table-link">
        <tbody className="link-sect">
          <tr>
            <th>
              <Link className="a" href={"/portofolio-project"}>
                Portofolio Project
              </Link>
            </th>
            <th>
              <Link className="b" href={"/projects-ongoing"}>
                Ongoing Projects
              </Link>
            </th>
            <th>
              <Link className="c" href={"/profile-page"}>
                About Us
              </Link>
            </th>
            <th>
              <Link className="d" href={"/blog"}>
                Blog
              </Link>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
