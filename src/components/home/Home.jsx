import BoxHome from "./BoxHome"


const Home = () => {
  return (

    <>

 <div className="home">


    <BoxHome title="Your favorites songs" color="white" fontColor="black" link="/your-songs"/>
    <BoxHome title="Top artists" color="rgb(114, 18, 204)" fontColor="white" link="/artists"/>
  
 </div>
 </>
  )
}

export default Home