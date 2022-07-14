import Featured from "../../components/featured/Featured"
import FeaturedProp from "../../components/featuredProp/FeaturedProp"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Nav from "../../components/nav/Nav"
import PropertyList from "../../components/propertyList/PropertyList"
import "./home.css"

const Home = () => {
  return (
    <div>
      <Nav />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProp />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home

/*https://github.com/safak/youtube2022/tree/react-booking-ui/src*/