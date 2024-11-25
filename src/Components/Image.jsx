//react icons 
import { FaHeart } from "react-icons/fa6";
import { TbDownload } from "react-icons/tb";

//react router dom
import { Link } from "react-router-dom";

//react 
import { useState } from "react";
import { useGlobalContext } from "../Hooks/useGlobalContext";

function Image({ image, added }) {

  //context
  const { dispatch, likedImages, downloadImages } = useGlobalContext()

  //data
  const { urls, links, user, alt_description } = image

  //liked 
  const addLikesImages = (img) => {
    const allReadyAdded = likedImages.some((image) => image.id === img.id)
    if (!allReadyAdded) {
      dispatch({ type: "ADD_LIKED_IMAGE", payload: img })
    } else {
      dispatch({ type: "UNLIKE", payload: image.id })
    }
  }

  const AddDownloadImage = (picture) => {
    const allReadyDownload = downloadImages.some((img) => img.id == picture.id)

    if (!allReadyDownload) {
      dispatch({ type: "DOWNLOAD", payload: picture })
    } else {
      alert("qoshilgan ")
    }
  }



  return (
    <div className="relative group">
      {
        added ?
          <span className="top-4 right-4 image-methods" onClick={() => addLikesImages(image)} style={{ backgroundColor: "#f15151", color: "white" }}>
            <FaHeart className="w-5 h-5" />
          </span>
          :
          <span className="top-4 right-4 image-methods" onClick={() => addLikesImages(image)} >
            <FaHeart className="w-5 h-5" />
          </span>
      }
      <img src={urls.regular} alt={alt_description} className='rounded-md w-full' />
      <span className="absolute bottom-4 left-4 ">
        <Link to={`/userpage/${user.id}`} className="flex gap-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
          <img src={user.profile_image.small} alt="user imag" className="rounded-full" />
          <h3 className="text-slate-100">{user.name}</h3>
        </Link>
      </span>
      <span onClick={() => AddDownloadImage(image)} className="bottom-4  right-4 image-methods">
        <a href={links.download + '&force=true'} download="image.jpg" target="_blank" rel="nofollow">
          <TbDownload className="w-5 h-5" />
        </a>
      </span>
    </div>
  )
}

export default Image
