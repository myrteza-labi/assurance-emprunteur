import Link from "next/link";



export default function Footer() {
  





  return (
    <footer className="footerMobile">
    <ul className="footerUlMobile">
      <div className="footerLinkAndArrow">
      <Link href="/april">
          <a className="footerLinkContainerMobile">
            April
          </a>
        </Link>
        <span className="material-symbols-outlined footerLinkArrowMobile">
          arrow_right
        </span>
      </div>
      <div className="footerLinkAndArrow">
      <Link href="/allianz">
          <a className="footerLinkContainerMobile">
            Allianz
          </a>
        </Link>        <span className="material-symbols-outlined footerLinkArrowMobile">
          arrow_right
        </span>
      </div>
      <div className="footerLinkAndArrow">
        <li className="footerLinkContainerMobile">footer link</li>
        <span className="material-symbols-outlined footerLinkArrowMobile">
          arrow_right
        </span>
      </div>
      <div className="footerLinkAndArrow">
        <li className="footerLinkContainerMobile">footer link</li>
        <span className="material-symbols-outlined footerLinkArrowMobile">
          arrow_right
        </span>
      </div>
    </ul>
    <div className="socialFooterContainerMobile">
      <div className="socialIconFooterMobile facebookIconFooter"></div>
      <div className="socialIconFooterMobile linkedinIconFooter"></div>
      <div className="socialIconFooterMobile instagramIconFooter"></div>
    </div>
  </footer>
    )
}
