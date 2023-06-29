import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }) {
  throw new Error("Boooooom");
  await deleteContact(params.id);
  return redirect("/");
}
