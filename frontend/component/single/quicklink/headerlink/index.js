import React from "react";
import "./headerlink.css";
import Link from "next/link";

export default function HeaderLink() {
  return (
    <div className="header-link">
      <table className="table-link">
        <tbody className="link-sect">
          <tr>
            <th>lorem ipsum</th>
            <th>
              <Link className="c" href={"/profile-page"}>
                About Us
              </Link>
            </th>
            <th>lorem ipsum</th>
            <th>lorem ipsum</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
