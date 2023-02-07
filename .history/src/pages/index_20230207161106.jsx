import { useEffect, useState } from "react"
// import "../styles/style.css"

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
              <div>
                <input type="text" />
                <button type="button">検索</button>
              </div>
      {
        hellow.map((e,i)=>{
          return(
            <div key={i}>
              <div>
                <img src={e.photo} alt="" />
                <div>
                  <p></p>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}
