import { useEffect, useState } from "react"
// import "../styles/style.css"

export default function Home() {
  const [hellow, setHellow] = useState([])
  const [text, setText] = useState("")
  const [keyword,setKeyword] = useState("鍋")

  useEffect(()=>{
    const params = {
      keyword : keyword
    }
    const query = new URLSearchParams(params)
    const fetchHellow = async() =>{
      const responce = await fetch(`./api/hello?${query}`)
      const data = await responce.json()
      setHellow(data.hotGurume.results.shop)
    }
    fetchHellow()
  },[keyword])

  const format = () =>{
    setKeyword(text)
  }

  
  console.log(hellow);
  return (
    <>
      <div className="contentWrap">
        <div>
            <input type="text" onChange={(e)=>{setText(e.target.value)}}/>
            <button type="button" onClick={format}>検索</button>
        </div>
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
