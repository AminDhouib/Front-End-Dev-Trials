import React from "react";
import { Trans } from "react-i18next";

function Footer() {
  return (
      <footer style={{backgroundColor: '#1a1a1a'}} className=" fixed-bottom text-white mr-auto">
        <div className="container">
          <p className="m-0 text-center">
            <Trans>Website By</Trans>: Amin Dhouib (300025259)
          </p>
        </div>
      </footer>
  );
}

export default Footer;
