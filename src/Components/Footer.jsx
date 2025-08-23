import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer mt-36">
      <div className="footer__inner">
        <div className="footer__brand">
          <a className="footer__logo " href="#" aria-label="Home">
            <img src="/logo.png" className="size-16" alt="" />
            <span>NYX Events</span>
          </a>
          <p className="footer__tagline text-left">Clean UI, clear results.</p>
        </div>

        <nav className="footer__links" aria-label="Footer navigation">
          <div>
            <h4>Product</h4>
            <ul>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#changelog">Changelog</a>
              </li>
              <li>
                <a href="#docs">Docs</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#press">Press</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#help">Help Center</a>
              </li>
              <li>
                <a href="#guides">Guides</a>
              </li>
              <li>
                <a href="#status">Status</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="footer__cta">
          <h4 className="text-left">Stay in the loop</h4>
          <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          <div className="footer__social" aria-label="Social media">
            <a href="#" aria-label="Twitter" title="Twitter">
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                role="img"
                aria-hidden="true"
              >
                <path
                  d="M21 5.5c-.7.3-1.4.5-2.1.6.8-.5 1.3-1.2 1.6-2-.8.5-1.7.9-2.6 1.1A3.6 3.6 0 0016.2 4c-2 0-3.6 1.7-3.6 3.6 0 .3 0 .6.1.8-3-.1-5.7-1.6-7.5-3.9-.3.5-.4 1-.4 1.6 0 1.2.6 2.3 1.6 3-.6 0-1.1-.2-1.6-.4v.1c0 1.8 1.3 3.3 3 3.6-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.4 1.8 2.5 3.3 2.5A7.3 7.3 0 013 18.5 10.3 10.3 0 008.6 20c6.2 0 9.7-5.1 9.7-9.6v-.4c.6-.4 1.2-1 1.7-1.5z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="#" aria-label="GitHub" title="GitHub">
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                role="img"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.9 9.6.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 2 .7 2 1.6.3 2.8-.4 3.3-.9-.9-.1-1.7-.5-2.1-1.2-.5-.7-.5-1.6-.2-2.3.2-.1.5-.2.8-.2 1.1 0 1.8.9 1.8 2v2.6c0 .3.2.6.7.5 4-.9 6.9-4.6 6.9-9.1C22 6.6 17.5 2 12 2z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" title="LinkedIn">
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                role="img"
                aria-hidden="true"
              >
                <path
                  d="M6.94 7.5a1.94 1.94 0 110-3.88 1.94 1.94 0 010 3.88zM4.97 9h3.94v10H4.97V9zm6.07 0h3.78v1.36h.06c.53-1 .82-1.36 2.23-1.36 2.38 0 2.89 1.24 2.89 3.57V19H16.1v-5.1c0-1.22-.02-2.79-1.7-2.79-1.7 0-1.96 1.33-1.96 2.7V19H11.04V9z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <small>© {year} Acme Corp. All rights reserved.</small>
        <ul className="footer__policies">
          <li>
            <a href="#privacy">Privacy</a>
          </li>
          <li>
            <a href="#terms">Terms</a>
          </li>
          <li>
            <a href="#cookies">Cookies</a>
          </li>
        </ul>
      </div>

      <style>{`
        :root {
          --bg: #0b0e14;
          --card: #111625;
          --muted: #8b94a7;
          --text: #eef2f7;
          --ring: #3b82f6;
          --accent: #7c5cff;
        }
        .footer { background: var(--bg); color: var(--text); }
        .footer a { color: inherit; text-decoration: none; }
        .footer a:hover { text-decoration: underline; }

        .footer__inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 48px 20px;
          display: grid;
          grid-template-columns: 1.2fr 2fr 1.2fr;
          gap: 28px;
        }

        .footer__brand { display: flex; flex-direction: column; gap: 10px; }
        .footer__logo { display: inline-flex; gap: 10px; align-items: center; font-weight: 700; font-size: 18px; }
        .footer__tagline { color: var(--muted); line-height: 1.4; margin: 0; }

        .footer__links { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }
        .footer__links h4 { font-size: 14px; letter-spacing: .02em; text-transform: uppercase; color: var(--muted); margin: 0 0 10px; }
        .footer__links ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 8px; }
        .footer__links a { opacity: .9; }

        .footer__cta h4 { margin: 0 0 12px; font-size: 16px; }
        .footer__form { display: flex; gap: 8px; }
        .footer__form input {
          flex: 1;
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid #20283a;
          background: var(--card);
          color: var(--text);
          outline: none;
        }
        .footer__form input:focus { border-color: var(--ring); box-shadow: 0 0 0 3px rgba(59,130,246,0.2); }
        .footer__form button {
          padding: 10px 14px;
          border-radius: 10px;
          border: 1px solid #20283a;
          background: linear-gradient(135deg, var(--accent), #4f46e5);
          color: #fff;
          font-weight: 600;
          cursor: pointer;
        }
        .footer__form button:hover { filter: brightness(1.05); }

        .footer__social { display: flex; gap: 12px; margin-top: 14px; }
        .footer__social a { display: inline-flex; padding: 8px; border-radius: 10px; background: #101522; border: 1px solid #20283a; }
        .footer__social a:hover { background: #121a2a; }

        .footer__bottom { border-top: 1px solid #1b2234; padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; max-width: 1100px; margin: 0 auto; color: var(--muted); }
        .footer__policies { list-style: none; display: flex; gap: 16px; margin: 0; padding: 0; }

        /* Responsive */
        @media (max-width: 900px) {
          .footer__inner { grid-template-columns: 1fr; }
          .footer__links { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        @media (max-width: 560px) {
          .footer__links { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .footer__bottom { flex-direction: column; gap: 12px; text-align: center; }
        }

        /* Accessibility helper */
        .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
      `}</style>
    </footer>
  );
}
