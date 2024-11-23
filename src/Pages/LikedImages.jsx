//custom hooks 
import { Image } from "../Components"
import { useGlobalContext } from "../Hooks/useGlobalContext"

//masonry
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"


export default function LikedImages() {

  const { likedImages, dispatch } = useGlobalContext()

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
