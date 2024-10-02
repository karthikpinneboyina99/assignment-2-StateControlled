import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ItemPane from './ItemPane';

/** Input form */
function TodoForm() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>ToDo Item</Form.Label>
                <Form.Control type="textarea" placeholder="Add todo item" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Due Date</Form.Label>
                <Form.Control type="date" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Add Todo
            </Button>

            <ItemPane />
        </Form>
    );
}

export default TodoForm;