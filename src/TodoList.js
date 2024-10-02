import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TodoForm from './TodoForm';
import ListGroupInterface from './ListGroupInterface';

function TodoList() {
  return (
    <Container>
      <Row>
        <Col>Assignment 2: Will's ToDo List</Col>
      </Row>

      <Row>
        <Col> <TodoForm /> </Col>
        <Col> <ListGroupInterface /> </Col>
      </Row>
    </Container>
  );
}

export default TodoList;
