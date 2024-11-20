//react icons 
import { FaHeart } from "react-icons/fa6";
import { TbDownload } from "react-icons/tb";

//react router dom
import { Link } from "react-router-dom";

//react 
import { useState } from "react";
import { LikedImages } from "../Pages";

function Image({ image }) {

  //data
  const { urls, links, user, alt_description } = image

  //liked 
  const [likeImages, setLikesImages] = useState([])
  console.log(likeImages)

  return (
    <div className="relative group">
      <span className="top-4 right-4 image-methods" onClick={() => setLikesImages((prevImages) => [...prevImages, image])}>
        <FaHeart className="w-5 h-5" />
      </span>
      <img src={urls.regular} alt={alt_description} className='rounded-md w-full' />
      <span className="absolute bottom-4 left-4 ">
        <Link to={`/userpage/${user.id}`} className="flex gap-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
          <img src={user.profile_image.small} alt="user imag" className="rounded-full" />
          <h3 className="text-slate-100">{user.name}</h3>
        </Link>
      </span>
      <span className="bottom-4  right-4 image-methods">
        <a rel="nofollow" download target="_blank" href={links.download + '&force=true'}><TbDownload className="w-5 h-5" /></a>
      </span>
    </div>
  )
}

export default Image
