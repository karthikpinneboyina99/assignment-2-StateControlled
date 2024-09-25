import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function TodoForm() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>ToDo Item</Form.Label>
                <Form.Control type="textarea" placeholder="Add todo item" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Due Date</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Add Todo
            </Button>
        </Form>
    );
}

export default TodoForm;