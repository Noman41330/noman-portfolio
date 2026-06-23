import Sidebar from "../Sidebar/Sidebar";
import { Download } from "lucide-react";

export default function Layout({ children }) {
  return (
    
    <main>
            <a
        href="/Noman_resume.pdf"
        download
        className="download-cv-btn"
      >
        <Download size={18} />
        Download My Resume
      </a>
      <Sidebar />
      {children}
    </main>
  );
}