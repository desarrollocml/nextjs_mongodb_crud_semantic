import { Form, Grid } from "semantic-ui-react";
export default function TaskFormPage() {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Form>
            <Form.Input label="Title" placeholder="Title" />
            <Form.TextArea label="Description" placeholder="Description" />
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
