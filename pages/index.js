import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Component() {
  const { data: session } = useSession();
  const router = useRouter();

  async function onClickHandler(event) {
    const response = await fetch(
      "https://u6d9wqsox6.execute-api.us-east-1.amazonaws.com/default/manageUserTable",
      {
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        method: "Post",
        body: JSON.stringify({
          TableName: "user",
          Item: {
            id: "test",
            name: "test",
          },
        }),
      }
    );

    console.log(response);
  }

  if (session) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="text-xl">Signed in as {session.user.email}</div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-10"
          onClick={() => signOut()}
        >
          Sign out
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-10"
          onClick={() => router.push("/upload")}
        >
          Upload
        </button>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-xl">Not signed in</div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-10"
        onClick={() => signIn()}
      >
        Sign in
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-10"
        onClick={onClickHandler}
      >
        Test
      </button>
    </div>
  );
}
