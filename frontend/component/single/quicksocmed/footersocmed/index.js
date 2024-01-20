import React from "react";
import "./footersocmed.css";

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
            <td>linkedin.com/in/muhammadafanaljafar</td>
          </tr>
          <tr>
            <td>Instagram</td>
            <td>AfanAljafar</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>muhammadafanaljafar@Gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
