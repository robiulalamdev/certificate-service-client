const Footer = () => {
  return (
    <div className="footer__section">
      <div className="container">
        <div className="footer__area">
          <div className="footer-menu">
            <a href="#">COOKIE POLICY</a>
            <a href="#">HOLIDAY CLOSURE SCHEDULE</a>
            <a href="#">PRIVACY POLICY</a>
          </div>

          <div className="footer-menu-info">
            <a className="d-none d-md-block" href="#">
              BK Attorney Services
            </a>
            <a className="d-none d-md-block" href="#">
              LLCCertificateofService.com
            </a>
            <a className="d-none d-md-block" href="#">
              PO Box 4590Pasco WA 99302(509) 412-1356
            </a>
            <a className="d-block d-md-none" href="#">
              BK Attorney Services LLCCertificateofService.com
            </a>
            <a className="d-block d-md-none" href="#">
              PO Box 4590Pasco WA 99302(509) 412-1356
            </a>
          </div>

          <hr className="line" />

          <div className="footer-privacy">
            <div>
              <a href="#">
                (c) 2021. BK Attorney Services, LLC. All Rights Reserved.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
