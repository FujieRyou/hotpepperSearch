// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
export default async function handler(req,res){

  const apiKey = `3f4adeaa9ab4bba4`
  const kyeword = `鍋`

  const responce = await
  fetch(`http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${apiKey}&kyeword=${kyeword}&format=json`)
  const hotGurume = await responce.json()
  res.status(200).json({hotGurume})

}
