
import { toast } from "react-toastify";
import { useCollection } from "../Hooks/useCollection"
//firebase
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase/useFireBaseConfig'



export default function About() {
  const { data } = useCollection("image")
  // console.log(data);

  const deleteDocDataBase = (id) => {
    deleteDoc(doc(db, "image", `${id}`))
      .then(() => toast.success("Deleted"))
      .catch((error) => toast.warn(error + 'Not Delete'))
      ;
  }

  return (
    <div className="container ">
      {data && data.map((data) => {
        return <div key={data.id} className="border px-3 py-4 my-3">
          <h1 className="font-semibold">{data.title}</h1>
          <p>{data.description}</p>
          <div className="flex gap-4">
            <button className="btn btn-primary mt-3">{data.complatate ? "Complate" : "uncomplateА"}</button>
            <button onClick={() => deleteDocDataBase(data.id)} className="btn btn-secondary mt-3">Delete</button>
          </div>
        </div>
      })}
    </div>
  )
}
