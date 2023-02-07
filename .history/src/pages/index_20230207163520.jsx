import { useEffect, useState } from "react"
import Search from "./search"
// import "../styles/style.css"

export default function Home() {
  const [hellow, setHellow] = useState([])
  const [search, setSearch] = useState("")

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
      <div className="contentWrap">
        <Search />
        {
          hellow.map((e,i)=>{
            return(
              <div key={i}>
                <div className="shopFlexWrap">
                  <img src={e.photo.pc.l} alt="" />
                  <div>
                    <h2>{e.name}</h2>
                    <p>{e.budget.average}</p>
                    <p>{e.access}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
