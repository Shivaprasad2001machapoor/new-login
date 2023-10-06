import Header from '../Header'
import './index.css'
import LogoutButton from '../LogoutButton'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <h1 className="heading">Home Route</h1>
    </div>
    <LogoutButton />
  </>
)

export default Home
