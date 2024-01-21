import React from "react";
import "./footersocmed.css";
import Link from "next/link";
import Image from "next/image";

export default function FooterSocmed() {
  return (
    <div className="socmed-footer">
      <h2 className="getintouch">Get In Touch</h2>
      <table className="table-socmed">
        <tbody>
          <tr>
            <td>
              <Link
                className="linkedin"
                href={"https://www.linkedin.com/in/muhammadafanaljafar/"}
              >
                <Image
                  src="/linkedin.png"
                  width={50}
                  height={50}
                  alt="linkedin"
                />
              </Link>
            </td>
            <td>
              <Link
                className="instagram"
                href={"https://www.instagram.com/afanaljafar/"}
              >
                <Image src="/ig.png" width={50} height={50} alt="instagram" />
              </Link>
            </td>
            <td>
              <Link className="github" href={"https://github.com/AfanAljafar"}>
                <Image src="/gh.png" width={45} height={45} alt="github" />
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
