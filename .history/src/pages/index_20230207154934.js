import { useEffect, useState } from "react"

export default function Home() {
  const [hellow, setHellow] = useState([])

  useEffect(()=>{
    const fetchHellow = async() =>{
      const responce = await fetch("./api/hello")
      const data = await responce.json()
      setHellow(data)
    }
    fetchHellow()
  },[])
  console.log(hellow);
  return (
    <>
      
    </>
  )
}
