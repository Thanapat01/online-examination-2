import { useRouter } from "next/router";

export default function Upload() {
  const router = new useRouter();
  //   const { data: session } = useSession();
  //   var AWS = require("aws-sdk");
  async function onSubmitHandler(event) {
    event.preventDefault();
    const form = event.target;
    // console.log(form.file.files[0]);
    const file = form.file.files[0];
    const reader = new FileReader();
    reader.onloadend = function () {
      console.log("RESULT", reader.result);
    };
    reader.readAsDataURL(file);

    // const formData = new FormData();

    // formData.append("file", form.file.files[0]);

    // const response = await fetch(
    //   "https://sr6neyukyh.execute-api.us-east-1.amazonaws.com/v1/thanapatimage/" +
    //     file.name,
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //     method: "Put",
    //     body: JSON.stringify({ file: reader.result }),
    //   }
    // );

    const response2 = await fetch(
      "https://u6d9wqsox6.execute-api.us-east-1.amazonaws.com/default/manageUserTable",
      {
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        method: "Post",
        body: JSON.stringify({
          TableName: "submission-detail",
          Item: {
            id: file.name,
            timestamp: "test",
            reference: "thanapatimage/" + file.name,
          },
        }),
      }
    );

    router.push("/check-answer");

    // const data = await response.json();

    // window.alert(data.msg);

    // if (response.status === 200) {
    //   router.push("/checkAnswer");
    // }
  }

  return (
    <div className="flex justify-center w-full h-screen items-center text-xl">
      <label className="mx-10">Upload</label>
      <div className="flex">
        <form onSubmit={onSubmitHandler}>
          <input type="file" id="file"></input>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
