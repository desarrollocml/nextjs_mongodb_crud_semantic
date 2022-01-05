import { Button, Form, Grid } from "semantic-ui-react";
import { useState } from "react";
export default function TaskFormPage() {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
  });

  const [errors, setErrors]=useState({});

  const validate = ()=>{
      const errors = {};
      if(!newTask.title) errors.title = "Title is required";
      if(!newTask.description) errors.description = "Description is required";
      return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = validate()
    if(Object.keys(errors).length) setErrors(errors)
    console.log("submiting");
  };

  const handleChange = (e) =>
    setNewTask({ ...newTask, [e.target.name]: e.target.value });

  return (
    <Grid
      centered
      verticalAlign="middle"
      columns="3"
      style={{ height: "80vh" }}
    >
      <Grid.Row>
        <Grid.Column>
          <h1>Create Task</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Input
              label="Title"
              placeholder="Title"
              name="title"
              onChange={handleChange} 
              error={{content:'ddddd'}}
            />
            <Form.TextArea
              label="Description"
              placeholder="Description"
              name="description"
              onChange={handleChange}
            />
            <Button primary>Save</Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
