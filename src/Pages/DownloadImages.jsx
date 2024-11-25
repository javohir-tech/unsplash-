//custom hooks
import { Image } from '../Components'
import { useGlobalContext } from '../Hooks/useGlobalContext'

//mesonary 
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"


export default function DownloadImages() {

  const { downloadImages } = useGlobalContext()

  if (downloadImages.length == 0) {
    return (
      <h1>rasm yo'q</h1>
    )
  }

  return (
    <div className='container my-5'>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
      >
        <Masonry gutter="10px">
          {downloadImages.map((image) => {
            return <Image key={image.id} image={image} />
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  )
}
