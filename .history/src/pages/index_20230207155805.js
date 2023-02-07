import { useEffect, useState } from "react"

export default function Home() {
  const [hellow, setHellow] = useState([])

  useEffect(()=>{
    const fetchHellow = async() =>{
      const responce = await fetch("./api/hello")
      const data = await responce.json()
      setHellow(data.hotGurume.result.shop)
    }
    fetchHellow()
  },[])
  console.log(hellow);
  return (
    <>
      {
        hellow.map((e,i)=>{
            <>
              <p>{e.name}</p>
            </>
        })
      }
    </>
  )
}
