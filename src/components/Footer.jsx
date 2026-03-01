import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div>
          <div className="footerTitle">AGH Hermes</div>
        </div>

        <div className="socials">
          {}
          <a href="https://www.facebook.com/profile.php?id=61579947956744" target="_blank" rel="noreferrer">
            <img class="smLogo" src="/fb_logo.png" /> Facebook
          </a>
          <a href="https://www.instagram.com/agh_hermes/" target="_blank" rel="noreferrer">
            <img class="smLogo" src="/ig_logo.png" /> Instagram
          </a>
          <a href="https://www.youtube.com/@AGH_Hermes" target="_blank" rel="noreferrer">
            <img class="smLogo" src="/yt_logo.png" /> Youtube
          </a>
        </div>
      </div>
    </footer>
  );
}