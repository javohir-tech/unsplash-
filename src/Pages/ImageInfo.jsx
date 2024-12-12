//custom hooks
import { useFetch } from "../Hooks/useFetch"
import { useGlobalContext } from "../Hooks/useGlobalContext"

//react router dom 
import { useParams } from "react-router-dom"

//react 
import { useEffect, useState } from "react"

//react icons 
import { FaHeart } from "react-icons/fa6";
import { TbDownload } from "react-icons/tb";

//fireStrore
import { useFireStore } from "../Hooks/useFireStore";

export default function ImageInfo() {

  const { id } = useParams()
  const [imageInfo, setImageInfo] = useState([])

  const { data, isPending, error } = useFetch(`https://api.unsplash.com/photos/${id}?client_id=${import.meta.env.VITE_ACCESS_KEY}`)
  useEffect(() => {
    if (data) {
      setImageInfo(data)
      // console.log(data)
    }
  }, [data])

  const { urls, created_at, user, views, links } = imageInfo

  const { addDocuments, deleteDocument } = useFireStore()

  if (isPending) {
    return <h1 className="text-center">Loading...</h1>
  }

  //context
  const { dispatch, likedImages, downloadImages, user: authUser } = useGlobalContext()
  console.log(likedImages)

  const addLikedImages = (img) => {

    const allReadyAdded = likedImages.find((num) => {
      return num.id === img.id
    })

    if (!allReadyAdded) {
      addDocuments("likedImages", { ...img, uid: authUser.uid })
    } else {
      deleteDocument("likedImages", allReadyAdded._id)
    }
  }

  const addDownload = (img) => {
    const allReadyAdded = downloadImages.some((num) => num.id == img.id)
    if (!allReadyAdded) {
      dispatch({ type: "DOWNLOAD", payload: img })
      window.open(links?.download + '&force=true', "_blank")
    } else {
      alert("qoshilgan")
    }
  }

  const allReadyAdded = likedImages.some((num) => num.id === id)

  return (
    <div className="container my-5">
      <div className="grid grid-cols-2 items-center w-full liked-image__content">
        <img src={urls?.regular} alt="" className="w-max-96 max-h-96 mx-auto rounded-md" />
        <div>
          <p>Yaratilgan Sana: {created_at}</p>
          <p>User Name : {user?.name}</p>
          <p>Kutazilgan : {views}</p>
          <div className="flex gap-5 items-center my-3">
            <img src={user?.profile_image?.medium} alt="user image" className="rounded-full" />
            <h1>{user?.username}</h1>
          </div>
          <div className="flex gap-3">
            {
              allReadyAdded ?
                <button onClick={() => addLikedImages(imageInfo)} className="btn btn-secondary px-10 grow border-none" > <FaHeart className="w-6 h-6 text-base-300" /> </button>
                :
                <button onClick={() => addLikedImages(imageInfo)} className="btn btn-primary px-10 grow border-none" > <FaHeart className="w-6 h-6 text-base-300" /> </button>
            }
            <button onClick={() => addDownload(imageInfo)} target="_blank" rel="nofollow" className="btn btn-primary px-10 grow"> <TbDownload className="w-6 h-6 text-base-300" /> </button>
          </div>
        </div>

      </div>
    </div>
  )
}
