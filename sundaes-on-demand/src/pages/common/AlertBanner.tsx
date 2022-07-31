import Alert from "react-bootstrap/Alert";

interface IProp {
  message?: string;
  variant?: string;
}
const AlertBanner: React.FC<IProp> = ({ message, variant }) => {
  const alertMessage =
    message || "An unexpected error occurred . Please try again later.";
  const alertVariant = variant || "danger";

  return (
    <Alert variant={alertVariant} style={{ backgroundColor: "red" }}>
      {alertMessage}
    </Alert>
  );
};

export default AlertBanner;
