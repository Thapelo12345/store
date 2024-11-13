import './App.css'
import Screen from './Landing pages/screen/screen'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import Header from './header/header'
import { ViewAll } from './pages/view-all';
import { MenView } from './pages/men-view';
import { WomenView } from './pages/women-view';
import { Accessories } from './pages/accessories';
import { Footer } from './footer/footer'
import { OrderForm } from './forms/order-form';
import { ConfirmationForm } from './forms/confirmation-form';
import { store } from './status/store';
import { Provider} from 'react-redux';

function App() {

  return (
       <div id='app'>
        <Provider store={store}>
    <Router>
    <Header />
    <OrderForm />
    <ConfirmationForm />
    
    <Routes>
      <Route path = '/' element = {<Screen />} />
      <Route path = 'view-all' element = {<ViewAll />} />  //default value view-all
      <Route path = 'women' element = {<WomenView />} />  //default value women
      <Route path = 'men' element = {<MenView/>} />   /*default value men*/
      <Route path = 'accessories' element = {<Accessories />} />    //default value accessories
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </Router>
    <Footer />
    </Provider>
      </div>
  );
}

export default App;
