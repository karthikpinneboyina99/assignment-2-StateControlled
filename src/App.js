// Install react-bootstrap and bootstrap using the following command:
// npm install react-bootstrap bootstrap

// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Tab, Form, Button } from 'react-bootstrap';
import './App.css';

const todoItemsData = [
  { title: 'Todo 1', description: 'Complete the assignment', dueDate: '2024-04-08' },
  { title: 'Todo 2', description: 'Prepare for presentation', dueDate: '2024-04-05' },
  { title: 'Todo 3', description: 'Attend meeting', dueDate: '2024-04-03' },
  { title: 'Todo 4', description: 'Buy groceries', dueDate: '2024-04-04' },
];

function getVariant(dueDate) {
  const today = new Date();
  const due = new Date(dueDate);
  const diffInDays = Math.ceil((due - today) / (1000 * 60 * 60 * 24));

  if (diffInDays > 7) return 'primary';
  if (diffInDays <= 7 && diffInDays >= 4) return 'success';
  if (diffInDays < 4 && diffInDays >= 2) return 'warning';
  return 'danger';
}

function App() {
  const [todoItems, setTodoItems] = useState(todoItemsData);
  const [newTitle, setNewTitle] = useState('');
  const [newDueDate, setNewDueDate] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTitle && newDueDate) {
      const newTodo = {
        title: newTitle,
        description: 'New ToDo Item',
        dueDate: newDueDate,
      };
      setTodoItems([...todoItems, newTodo]);
      setNewTitle('');
      setNewDueDate('');
    }
  };

  const handleDescriptionChange = (index, e) => {
    const updatedTodos = [...todoItems];
    updatedTodos[index].description = e.target.innerText;
    setTodoItems(updatedTodos);
  };

  const handleDateChange = (index, e) => {
    const updatedTodos = [...todoItems];
    updatedTodos[index].dueDate = e.target.value;
    setTodoItems(updatedTodos);
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Assignment 2: Karthik Pinneboyina's ToDo List</h1>
      <Row>
        <Col md={4}>
          <Form onSubmit={handleAddTodo} className="p-4 rounded shadow-sm" style={{ backgroundColor: '#28eb7b' }}>
            <Form.Group controlId="formTitle">
              <Form.Label>ToDo Item</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add todo item"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formDate" className="mt-3">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="date"
                value={newDueDate}
                onChange={(e) => setNewDueDate(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3 w-100">
              Add ToDo
            </Button>
          </Form>
        </Col>
        <Col md={8}>
          <Tab.Container id="todo-list" defaultActiveKey={todoItems[0]?.title}>
            <Row>
              <Col sm={4}>
                <ListGroup>
                  {todoItems.map((item, index) => (
                    <ListGroup.Item
                      key={index}
                      action
                      href={`#${item.title}`}
                      eventKey={item.title}
                      variant={getVariant(item.dueDate)}
                      className="mb-2 text-center"
                    >
                      {item.title}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  {todoItems.map((item, index) => (
                    <Tab.Pane key={index} eventKey={item.title}>
                      <h5 className="mb-3">{item.title}</h5>
                      <div
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => handleDescriptionChange(index, e)}
                        className="editable-description p-3 mb-3 rounded shadow-sm"
                        style={{ backgroundColor: '#f8f9fa' }}
                      >
                        {item.description}
                      </div>
                      <Form.Group controlId="formDate" className="mt-3">
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control
                          type="date"
                          value={item.dueDate}
                          onChange={(e) => handleDateChange(index, e)}
                        />
                      </Form.Group>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
