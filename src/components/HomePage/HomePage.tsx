import Banner from "./Banner";
import NewArrivals from "./NewArrivals";
import TopBrands from "./TopBrands";
import TopSelling from "./TopSelling";


const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <TopBrands />
      <NewArrivals />
      <TopSelling />
    </div>
  )
}

export default HomePage;