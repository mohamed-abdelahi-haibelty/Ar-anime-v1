//App
  //Search
 //Trending component
      // Trending Lists
         // Trending Card
 //Lists component 
    // cardlists
        // card
 // Sidebar
 //Bookmarked Component
 // cardInfo 
 // bookMarkIcon

import Search from "./components/Search/Search"
import Sidebar from "./components/Sidebar/Sidebar"
import Main from "./components/Main"
import TrendingLists from "./components/Trending/TrendingLists"

function App() {

  return (
    <div className="md:m-6 lg:m-8">
      <Sidebar/>
      <Main>
        <Search/>
        <TrendingLists/>
      </Main>
    </div>
  )
}


export default App
