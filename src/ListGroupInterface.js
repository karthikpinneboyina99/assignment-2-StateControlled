import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import {todos} from './todoItems';

function ListGroupInterface() {

  return (
    <Tab.Container id="list-group-interface">
            <Row>
              <Col sm={4}>
                <ListGroup>
                  {todos.map(
                    todo => (
                      <ListGroup.Item eventKey={todo.title} key={todo.id}>
                        {todo.title}
                      </ListGroup.Item>
                    )
                  )}
                </ListGroup>
              </Col>

              <Col sm={8}>
                <Tab.Content>
                  {todos.map(
                    todo => (
                      <Tab.Pane eventKey={todo.title} key={todo.id}>
                        {todo.description}<br />
                        {todo.dueDate}
                      </Tab.Pane>
                    )
                  )}
                </Tab.Content>
              </Col>
            </Row>
        </Tab.Container>
  );
}

export default ListGroupInterface;
