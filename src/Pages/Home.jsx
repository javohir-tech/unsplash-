//custom hooks 
import { ImageBox, Search } from "../Components"
import { useFetch } from "../Hooks/useFetch"
import { UseGlobalContext } from "../Hooks/useGlobalContext"

//react 
import { useEffect, useState } from "react"

//react router dom
import { useActionData } from "react-router-dom"

//masonary
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

//action 
export const action = async ({ request }) => {
  let formData = await request.formData();
  let search = formData.get("Search")
  return search
}

export default function Home() {

  //useActionData
  const dataParamFrom = useActionData()
  console.log(dataParamFrom)

  //context 
  const { images, dispatch } = UseGlobalContext()
  const [pageNumber, setPageNumber] = useState(1)

  const { data, isPending, error } = useFetch(`https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_ACCESS_KEY}&query=${dataParamFrom ? dataParamFrom : "all"}&page=${pageNumber}`)

 
  useEffect(() => {
    if (data) {
      dispatch({ type: "ADD_IMAGES", payload: data.results })
    }
  }, [data])

  if (isPending) {
    return <h1 className="text-center">Loading...</h1>
  }


  return (
    <>
      <div className="my-5">
        <Search />
      </div>
      <div className="container py-5">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry gutter="10px">
            {images.length > 0 ? images.map((image) => {
              const { id, user, urls, links, alt_description } = image
              return <ImageBox key={id} url={urls} alt={alt_description} links={links} image={image} />
            }) : <p>data is undefiend</p>}
          </Masonry>
        </ResponsiveMasonry>
        <button onClick={() => setPageNumber(pageNumber + 1)} className="w-full my-5 py-3 border rounded-md hover:bg-slate-400 transition-all duration-300">New Images</button>
      </div>
    </>
  )
}
