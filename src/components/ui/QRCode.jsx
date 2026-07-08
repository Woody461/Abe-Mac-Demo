import QRCode from "react-qr-code";

function QRCodeComponent({
  value = "https://martinwebco.com",
  size = 150,
}) {
  return (
    <div className="flex items-center justify-center rounded-3xl bg-white p-4 shadow-sm">
      <QRCode
        value={value}
        size={size}
        bgColor="#FFFFFF"
        fgColor="#111827"
      />
    </div>
  );
}

export default QRCodeComponent;