import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Component() {
  const { data: session } = useSession();
  const router = useRouter();
  if (session) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="text-xl">Signed in as {session.user.email}</div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-10"
          onClick={() => router.push("api/auth/signout")}
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
        onClick={() => router.push("api/auth/signin")}
      >
        Sign in
      </button>
    </div>
  );
}
