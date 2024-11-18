//custom hooks 
import { useFetch } from "../Hooks/useFetch"

//components
import { ImageBox, Search } from "../Components"

//react 
import { useEffect, useState, useRef } from "react"

//react router dom
import { useActionData } from "react-router-dom"

//action 
export const action = async ({ request }) => {
  let formData = await request.formData();
  let search = formData.get("Search")
  return search
}

export default function Home() {

  //useActionData
  const searchParamFromAction = useActionData();
  const [allImages, setAllImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1)

  const prevSearchParam = useRef(searchParamFromAction)

  useEffect(() => {
    if (searchParamFromAction) {
      console.log(searchParamFromAction);
    }
  }, [searchParamFromAction]);

  const { data, isPending, error } = useFetch(`https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_ACCESS_KEY}&query=${searchParamFromAction ?? "all"}&page=${pageNumber}`)

  useEffect(() => {
    if (data) {
      setAllImages((prevImages) => {
        return pageNumber === 1 ? data.results : [...prevImages, ...data.results]
      })
    }
  }, [data])

  useEffect(() => {
    if (searchParamFromAction != prevSearchParam.current) {
      setAllImages([]);
      setPageNumber(1)
      prevSearchParam.current = searchParamFromAction
    }
  }, [searchParamFromAction])


  if (error) {
    return <h1 className="text-center">Error : {error}</h1>
  }

  return (
    <>

      <div className="container py-5">
        <div className="my-5">
          <Search />
        </div>
        {isPending && <h1 className="text-center my-5">Loading</h1>}
        {allImages.length > 0 ? <ImageBox images={allImages} /> : <p>failed is not defind</p>}
        <div className="my-10">
          <button onClick={() => setPageNumber(pageNumber + 1)} className="btn btn-secondary btn-block">Page +1</button>
        </div>
      </div>
    </>
  )
}
