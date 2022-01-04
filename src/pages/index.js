import styles from "../styles/Home.module.css";

export default function Home({tasks}) {
  console.log(tasks);
  return (
    <div className={styles.container}>
      <h1>hola c</h1>
    </div>
  );
}

 export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/tasks");
  const tasks = await res.json();

  console.log(tasks);
  return {
    props: {tasks},
  };
} 
