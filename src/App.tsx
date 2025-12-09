import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const bannerArry = [
    {
      imgurl : "https://fourlab.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/ea2d4280cdaf8fa7cd5a64d42e0dfd5a.jpg",
      title : "블랙데이 단돈 만원으로",
      button : "시즌이벤트"
    },
    {
      imgurl : "https://fourlab.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/547b35760374d0039a66a824b61d81d5.jpg",
      title : "회원혜택기간",
      button : "혜택보기"
    },
    {
      imgurl : "https://fourlab.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/9cd39a46d7df0122c84a771c339cc079.jpg",
      title : "신상품 세트 출시",
      button : "신상품보기"
    }
  ]
   
  return (
    <>            
      <div className="card">
        <section style={{ 
          backgroundImage : `url(${bannerArry[count].imgurl})`,
          }} className="h-[100vh] flex justify-center items-center bg-cover relative">
          
          <h2 className='text-[60px]'> {bannerArry[count].title} </h2>

          <div className='absolute w-full bottom-0 start-0 flex gap-4 justify-center mb-[50px]'>
            {
              bannerArry.map((v, i) => (
                    <button className='bg-black text-white rounded-[10px] p-[1rem]' onClick={()=>{
                      setCount(i);
                    }}> {v.button} </button>
              ))
          }
          </div>

        </section>
    
      </div>          
    </>
  )
}

export default App
