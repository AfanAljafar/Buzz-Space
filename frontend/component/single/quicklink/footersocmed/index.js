import React from "react";
import "./footersocmed.css";
import Link from "next/link";

export default function FooterSocmed() {
  return (
    <div className="socmed-footer">
      <table className="table-socmed">
        <thead>
          <tr>
            <th>
              <h2 className="getintouch">Get In Touch</h2>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>LinkedIn</td>
            <td>
              <Link
                className="linkedin"
                href={"https://www.linkedin.com/in/muhammadafanaljafar/"}
              >
                Muhammad Afan Aljafar
              </Link>
            </td>
          </tr>
          <tr>
            <td>Instagram</td>
            <td>
              <Link
                className="instagram"
                href={"https://www.instagram.com/afanaljafar/"}
              >
                Afan Aljafar
              </Link>
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>muhammadafanaljafar@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
