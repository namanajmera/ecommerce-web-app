import Banner from "./Banner";
import BrowseByDressStyle from "./BrowseByDressStyle";
import CustomersReviewSection from "./CustomersReviewSection";
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
      <CustomersReviewSection />
    </div>
  )
}

export default HomePage;