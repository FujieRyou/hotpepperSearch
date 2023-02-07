import { useEffect, useState } from "react"
import "../styles/style.css"

export default function Home() {
  const [hellow, setHellow] = useState([])

  useEffect(()=>{
    const fetchHellow = async() =>{
      const responce = await fetch("./api/hello")
      const data = await responce.json()
      setHellow(data.hotGurume.results.shop)
    }
    fetchHellow()
  },[])
  console.log(hellow);
  return (
    <>
      {
        hellow.map((e,i)=>{
          return(
            <>
            <div>
              <p>こ</p>
            </div>
            </>
          )
        })
      }
    </>
  )
}
