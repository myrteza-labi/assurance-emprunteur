import Link from "next/link";

function Logo() {
  return (
    <div className="logoContainer logoContainerNavbar">
      <Link href="/">
        <a>
          <img
            className="logo navbarLogo"
            src="/logo-assurance-emprunteur.webp"
            alt="assurances pret logo"
          />
        </a>
      </Link>
    </div>
  );
}

export default Logo;
