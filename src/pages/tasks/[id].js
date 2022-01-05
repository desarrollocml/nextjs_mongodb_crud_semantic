import Error from "next/error";
import { Button, Grid, Confirm } from "semantic-ui-react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function TaskDetail({ task, error }) {
  const [confirm, setConfirm] = useState(false);
  const { query, push } = useRouter();

  const open = () => setConfirm(true);
  const close = () => setConfirm(false);

  const deleteTask = async () => {
    const { id } = query;
    try {
      await fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    await deleteTask();
    push("/");
    close();
  };

  if (error && error.statusCode)
    return <Error statusCode={error.statusCode} title={error.statusText} />;
  return (
    <Grid
      centered
      verticalAlign="middle"
      columns="3"
      style={{ height: "80vh" }}
    >
      <Grid.Row>
        <Grid.Column textAlign="center">
          <h1>{task.title}</h1>
          <p>{task.description}</p>
          <Button color="red" onClick={open}>
            Delete
          </Button>
          <div></div>
        </Grid.Column>
      </Grid.Row>

      <Confirm
        content={`Are you sure to delete the task ${task._id}`}
        header="Please confirm"
        onConfirm={handleDelete}
        onCancel={close}
        open={confirm}
      />
    </Grid>
  );
}

export async function getServerSideProps({ query: { id } }) {
  const res = await fetch(`http://localhost:3000/api/tasks/${id}`);

  if (res.status === 200) {
    const task = await res.json();
    return {
      props: {
        task,
      },
    };
  }
  return {
    props: {
      error: {
        statusCode: res.status,
        statusText: "Invalid Id",
      },
    },
  };
}
