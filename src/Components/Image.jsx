//react icons 
import { FaHeart } from "react-icons/fa6";
import { TbDownload } from "react-icons/tb";

//react router dom
import { Link } from "react-router-dom";

//context 
import { useGlobalContext } from "../Hooks/useGlobalContext";

//fireStore
import { useFireStore } from "../Hooks/useFireStore";

function Image({ image, added }) {

  //context
  const { dispatch, likedImages, downloadImages, user: authUser } = useGlobalContext()

  //fireBase
  const { addDocuments, deleteDocument } = useFireStore()

  //data
  const { urls, links, user, alt_description } = image

  //liked 
  const addLikesImages = (img) => {

    const allReadyAdded = likedImages.find((image) => {
      return image.id == img.id
    })

    if (!allReadyAdded) {
      addDocuments("likedImages", { ...img, uid: authUser.uid })
    } else {
      deleteDocument("likedImages", allReadyAdded._id)
    }
  }

  const AddDownloadImage = (picture) => {
    const allReadyDownload = downloadImages.some((img) => img.id == picture.id)

    if (!allReadyDownload) {
      dispatch({ type: "DOWNLOAD", payload: picture })
      window.open(links.download + '&force=true', "_blank")
    } else {
      alert("qoshilgan ")
    }
  }



  return (
    <div className="relative group">
      <Link to={`/imageInfo/${image.id}`} className="absolute w-full h-full top-auto z-10 opacity-0">

      </Link>
      {
        added ?
          <span className="top-4 right-4 image-methods z-20" onClick={() => addLikesImages(image)} style={{ backgroundColor: "#f15151", color: "white" }}>
            <FaHeart className="w-5 h-5" />
          </span>
          :
          <span className="top-4 right-4 image-methods z-20" onClick={() => addLikesImages(image)} >
            <FaHeart className="w-5 h-5" />
          </span>
      }
      <img src={urls.regular} alt={alt_description} className='rounded-md w-full' />
      <span className="absolute bottom-4 left-4 z-20">
        <Link to={`/userpage/${user.id}`} className=" flex gap-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
          <img src={user.profile_image.small} alt="user imag" className="rounded-full" />
          <h3 className="text-slate-100">{user.name}</h3>
        </Link>
      </span>
      <span onClick={() => AddDownloadImage(image)} className="bottom-4 z-20 right-4 image-methods" rel="nofollow">

        <TbDownload className="w-5 h-5" />

      </span>
    </div>
  )
}

export default Image
