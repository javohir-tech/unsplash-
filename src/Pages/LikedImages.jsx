//custom hooks 
import { Image } from "../Components"
import { useGlobalContext } from "../Hooks/useGlobalContext"

//react router dom 
import { Link } from "react-router-dom"

//masonry
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"


export default function LikedImages() {

  const { likedImages } = useGlobalContext()

  if (likedImages.length == 0) {
    return <div className=" flex flex-col container justify-center text-center h-full my-auto liked-image__content items-center">
      <h1 className="mb-5 font-semibold text-lg">You have no favorite pictures!!!</h1>
      <Link to="/" className="btn btn-primary" >Home</Link>
    </div>
  }

  return (
    <>
      <div className="container py-5">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
        >
          <Masonry gutter="10px">
            {
              likedImages.length > 0 ?
                likedImages.map((likedImage) => {
                  const { id } = likedImage
                  return <Image key={id} image={likedImage} added={likedImages.some((img) => img.id == likedImage.id)} />
                })
                : <p className="text-center">yoqtirgan Rasmlar yo'q</p>
            }
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  )
}
