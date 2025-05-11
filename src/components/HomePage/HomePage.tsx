import Banner from "./Banner";
import BrowseByDressStyle from "./BrowseByDressStyle";
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
      <BrowseByDressStyle />
    </div>
  )
}

export default HomePage;