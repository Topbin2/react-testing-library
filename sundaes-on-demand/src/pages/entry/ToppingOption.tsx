import { Col } from "react-bootstrap";

interface IProp {
  name: string;
  imagePath: string;
  updateItemCount: (itemName: any, newItemCount: any) => any;
}

const ToppingOption: React.FC<IProp> = ({
  name,
  imagePath,
  updateItemCount,
}) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} topping`}
      />
    </Col>
  );
};

export default ToppingOption;
