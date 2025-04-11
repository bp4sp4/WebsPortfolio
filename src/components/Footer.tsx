"use client";

import { footerInfo } from "@/data/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <div className="footer-copyright">{footerInfo.copyright}</div>
        <div className="footer-credit">{footerInfo.credit}</div>
      </div>
    </footer>
  );
}
