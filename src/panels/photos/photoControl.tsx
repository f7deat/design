import React from "react"
import { useDispatch } from "react-redux";
import { selectImage } from "../../storages/actions/photoAction";

const images = [
  {
    id: 1,
    src: "https://s1.zerochan.net/Keqing.600.3106192.jpg"
  },
  {
    id: 2,
    src: "https://s1.zerochan.net/Keqing.600.3106142.jpg"
  },
  {
    id: 3,
    src: "https://s1.zerochan.net/Lumine.%28Genshin.Impact%29.600.2930194.jpg"
  },
  {
    id: 4,
    src: "https://s1.zerochan.net/Genshin.Impact.600.3081643.jpg"
  },
  {
    id: 5,
    src: "https://s1.zerochan.net/Lumine.%28Genshin.Impact%29.600.3094846.jpg"
  },
  {
    id: 6,
    src: "https://s1.zerochan.net/Lumine.%28Genshin.Impact%29.600.2981988.jpg"
  },
  {
    id: 7,
    src: "https://s1.zerochan.net/Houkai.3rd.600.2643918.jpg"
  },
  {
    id: 8,
    src: "https://s1.zerochan.net/Fu.Hua.600.2858613.jpg"
  },
  {
    id: 9,
    src: "https://s1.zerochan.net/Houkai.3rd.600.2803381.jpg"
  },
  {
    id: 10,
    src: "https://s1.zerochan.net/Yae.Sakura.%28Houkai.Gakuen%29.600.2125244.jpg"
  }
]

function PhotoControl() {

  const dispatch = useDispatch();
  
  return (
    <div className="card-columns mt-3" style={{columnCount: 2}}>
      {
        images.map((x: any) => {
          return (
            <div key={x.id} className="card cursor-pointer" onClick={() => dispatch(selectImage({id: x.id, src: x.src}))}>
              <img src={x.src} alt={x.id} className="img-fluid"/>
            </div>
          )
        })
      }
    </div>
  )
}

export default PhotoControl