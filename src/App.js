import Card from "./Card";
import './App.css'
let App=()=>{
  let data=[{"Pname":"mobile","Price":18000,"img":"https://th.bing.com/th/id/OIP.lm9_DYeL6PMcBHq_8u3hEAHaHa?pid=ImgDet&w=500&h=500&rs=1"},
  {"Pname":"laptop","Price":22000,"img":"https://th.bing.com/th/id/R.4c97b02fef7ad1b7eda020aa2d09611f?rik=8meqYWp%2fRiAmDw&riu=http%3a%2f%2fstore.hp.com%2fUKStore%2fHtml%2fMerch%2fImages%2fc05475056_1750x1285.jpg&ehk=hFHW0bsoA4Vrq9NqTnBn9ZROJe9jXLuXOG2U%2bb2O7Wk%3d&risl=&pid=ImgRaw&r=0"},
  {"Pname":"bags","Price":5000,"img":"https://th.bing.com/th/id/R.85da207c0384268dbdfe6da5cec74921?rik=evD5ApDHYTNG%2bg&riu=http%3a%2f%2fn3.sdlcdn.com%2fimgs%2fb%2fb%2fd%2fSkybags-Riviera-White-Hard-Luggage-SDL230495400-1-256ff.JPG&ehk=6fkYBMwfkwnDIWdbXK0CkhnQ%2f3S6Ewk4SCKa0LdqHQo%3d&risl=&pid=ImgRaw&r=0"},
  {"Pname":"bicycle","Price":8000,"img":"https://freepngimg.com/thumb/bicycle/23483-6-bicycle-transparent-image.png"},
  {"Pname":"realme buds","Price":3500,"img":"https://s1.kuantokusta.pt/img_upload/produtos_imagemsom/584897_3_realme-bud-air-3-neo-auriculares-bluetooth-azul-rma2113-blu.jpg"},
  {"Pname":"speakers","Price":5000,"img":"https://m.media-amazon.com/images/I/71ccqGPQvHS._AC_SL1500_.jpg"}]
  
  return(
  <div className="con">{data.map((item)=><Card data={item}/>)}

  </div>)
}
export default App;
