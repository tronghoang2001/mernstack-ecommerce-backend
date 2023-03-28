import { Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserOrdersPage = () => {
  return (
    <Row className="m-5">
      <Col md={12}>
        <h1>My Orders</h1>
        <Table striped bordered hover>
          <thead>
            <tr style={{ backgroundColor: "#ffc107" }}>
              <th>#</th>
              <th>User</th>
              <th>Date</th>
              <th>Total</th>
              <th>Delivered</th>
              <th>Order details</th>
            </tr>
          </thead>
          <tbody>
            {[
              "bi bi-check-lg text-success",
              "bi bi-x-lg text-danger",
              "bi bi-check-lg text-success",
            ].map((item, idx) => (
              <tr key={idx}>
                <td>{idx + 1}1</td>
                <td>Hoang Nguyen</td>
                <td>16-01-2023</td>
                <td>$124</td>
                <td>
                  <i className={item}></i>
                </td>
                <td>
                  <Link to="/user/order-details">Go to order</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default UserOrdersPage;
