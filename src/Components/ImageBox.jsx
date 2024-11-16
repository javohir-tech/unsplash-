//icons
import { CiHeart } from "react-icons/ci";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { IoMdHeart } from "react-icons/io";

//custom hooks 
import { UseGlobalContext } from "../Hooks/useGlobalContext";

//react toast 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ImageBox({ url, alt, links, image }) {
    // console.log(image)

    const { likedImages, dispatch } = UseGlobalContext()

    const addLikesImages = (likedImage) => {
        const alReadyAdded = likedImages.some((img) => img.id === likedImage.id)

        if (!alReadyAdded) {
            dispatch({ type: "ADD_LIKE_IMAGES", payload: likedImage })
        } else {
            toast.warn("image already is added")
        }
    }

    const alReadyAdded = likedImages.some((img) => img.id === image.id)



    return (
        <div className="relative group">
            <span
                onClick={() => addLikesImages(image)}
                className="right-5 top-5 image-methods"
                style={{color: alReadyAdded ? "red" : ""}}
            >
                {alReadyAdded ? <IoMdHeart className="w-5 h-5"/> : <CiHeart className="w-5 h-5" />}
            </span>
            <img src={url.regular} alt={alt} style={{ display: "block", width: "100%" }} />
            <span className="right-5 bottom-5 image-methods">
                <a download href={links.download + '&force=true'} target="_blank" rel="nofollow"><AiOutlineCloudDownload className="w-5 h-5" /></a>
            </span>
        </div>
    )
}
