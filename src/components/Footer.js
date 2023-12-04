const Footer = ({ v }) => {
  return (
    <footer>
      <p>        
        &copy;2023 Hollow Hallway, LLC. All Rights Reserved. <br />
        <a href="https://github.com/remarkwise/hollowhallway" target="_blank">
          <i className="fa fa-fw fa-github"></i> Code
        </a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="https://zcal.co/hollowhallway" target="_blank">
          <i className="fa fa-fw fa-calendar"></i> Connect
        </a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="https://venmo.com/u/remarkwise" target="_blank">
          <i className="fa fa-fw fa-money"></i> Donate
        </a>
      </p>
      <p className="version">Version {v}</p>
    </footer>
  );
};
export default Footer;
