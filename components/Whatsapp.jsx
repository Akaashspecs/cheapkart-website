const WhatsappMessageTab = ({ children, className }) => {
  const openWhatsApp = () => {
    const phoneNumber = "+917347703895"; // Add your number without + or spaces
    const message = "Hello, I want to know more about your services!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button className={`${className}`} onClick={() => openWhatsApp()}>
      {children}
    </button>
  );
};

export default WhatsappMessageTab;
