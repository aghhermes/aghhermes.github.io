import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div>
          <div className="footerTitle">AGH Hermes</div>
        </div>

        <div className="socials">
          {/* Podmień linki na właściwe */}
          <a href="https://github.com/aghhermes" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.instagram.com/agh_hermes/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://www.facebook.com/profile.php?id=61579947956744" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}