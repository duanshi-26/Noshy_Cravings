import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import { Outlet } from 'react-router-dom';
import appStore from './utils/appStore';
import { Provider } from 'react-redux';

function App() {
  return (
    // store ko use kara rhe hai using Provider
   <Provider store = {appStore}>
    <div className="App">
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
    </Provider>
  );
}

export default App;