import { Button, Form, Grid } from "semantic-ui-react";
export default function TaskFormPage() {

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("submiting")
    }

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
            <Form.Input label="Title" placeholder="Title" />
            <Form.TextArea label="Description" placeholder="Description" />
            <Button primary>
                Save
            </Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
