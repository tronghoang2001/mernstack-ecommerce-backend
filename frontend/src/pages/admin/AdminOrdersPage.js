import { Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";

const AdminOrdersPage = () => {
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent />
      </Col>
      <Col md={10}>
        <h1>Orders</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr style={{ backgroundColor: "#ffc107" }}>
              <th>#</th>
              <th>User</th>
              <th>Date</th>
              <th>Total</th>
              <th>Delivered</th>
              <th>Payment method</th>
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
                <td>Paypal</td>
                <td>
                  <Link to="/admin/orders">Go to order</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default AdminOrdersPage;
