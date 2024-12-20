
import { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import { BarLoader } from 'react-spinners'

const ProductCard = () => {
  const [Products, setProducts] = useState([])
  const [page, setpage] = useState(1)
  const dataSize = 4;

  const getProduct = async () => {
    setLoader(true)
    const data = await axios.get('https://fakestoreapi.com/products?limit=20')
    setProducts(data.data)
    setLoader(false)
  }
  useEffect(() => {
    getProduct()
  }, [])

  const startIndex = (page - 1) * dataSize
  const perpagedata = Products.slice(startIndex, startIndex + dataSize)

  const hendelp = () => {
    if (page > 1) setpage(page - 1)
  }

  const hendeln = () => {
    if (page < Math.ceil(Products.length / dataSize)) setpage(page + 1)
  }

  const [loader, setLoader] = useState(false)



  return (
    <>
      {loader ? (
        <div className="flex justify-center items-center h-dvh">
          <BarLoader color='#3ce2c1'/>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
            {perpagedata.map((elem, ind) => (
              <Card key={ind} {...elem} />
            ))}
          </div>

          <div className="container w-full flex justify-between my-5">
            <button
              type="button"
              className="btn btn-primary rounded-md btn-sm"
              disabled={page === 1}
              onClick={hendelp}
            >
              &larr; Previous
            </button>

            <button
              type="button"
              className="btn btn-primary rounded-md btn-sm"
              disabled={page >= Math.ceil(Products.length / dataSize)}
              onClick={hendeln}
            >
              Next &rarr;
            </button>
          </div>
        </>
      )}

    </>
  )
}

export default ProductCard
