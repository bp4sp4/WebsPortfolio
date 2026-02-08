"use client";

import { footerInfo } from "@/data/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_bottom">
        <div className="footer_copyright">{footerInfo.copyright}</div>
        <div className="footer_credit">{footerInfo.credit}</div>
      </div>
    </footer>
  );
}
