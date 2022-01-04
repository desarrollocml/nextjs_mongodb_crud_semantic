//import styles from "../styles/Home.module.css";
import { Button, Card, CardContent, CardHeader, Container, Grid } from "semantic-ui-react";
export default function Home({ tasks }) {
 // console.log(tasks);
  return (
    <Container>
      <Card.Group itemsPerRow={4}>
        {
          tasks.map((task)=>(
            <Card key={task._id}>
              <Card.Content>
                <Card.Header>{task.title}</Card.Header>
              </Card.Content>
            </Card>
          ))
       
        }
         </Card.Group>
    </Container>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/tasks");
  const tasks = await res.json();

  //console.log(tasks);
  return {
    props: { tasks },
  };
}
