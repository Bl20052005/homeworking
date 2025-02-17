import { auth } from "@/auth";

async function Home() {
  const session = await auth();

  console.log(session);

  return <div></div>;
}

export default Home;
