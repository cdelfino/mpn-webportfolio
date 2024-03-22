import MailIcon from "../../../../public/assets/imgs/mailicon.png";

const CornerIcon = () => {
  const iconStyle = {
    position: "fixed",
    bottom: "15%",
    right: "5%",
    width: "93px",
    height: "93px",
    cursor: "pointer",
    zIndex: "100",
  };

  return (
    <div style={iconStyle}>
      <img src={MailIcon} alt="Mail Icon" />
    </div>
  );
};

export default CornerIcon;
