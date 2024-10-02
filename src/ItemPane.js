import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

function ItemPane() {
    return (
        <Tab.Container id="item-pane">

            <Row>
                {/** Tab headers */}
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>

                {/** Tab contents */}
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">First tab content here</Tab.Pane>
                        <Tab.Pane eventKey="second">First tab content here</Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>

        </Tab.Container>
    );
}

export default ItemPane;