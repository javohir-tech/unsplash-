//custom  hooks 
import { UseGlobalContext } from '../Hooks/useGlobalContext'

//components
import { ImageBox } from '../Components'

//masonary
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

export default function LikedImages() {
  const { likedImages } = UseGlobalContext()
  return (
    <div>
      <div className="container py-5">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry gutter="10px">
            {likedImages.length > 0 ? likedImages.map((image) => {
              const { id, user, urls, links, alt_description } = image
              return <ImageBox key={id} url={urls} alt={alt_description} links={links} image={image} />
            }) : <p>data is undefiend</p>}
          </Masonry>
        </ResponsiveMasonry>

      </div>
    </div>
  )
}
