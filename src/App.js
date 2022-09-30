// import logo from './logo.svg';
import { Outlet } from 'react-router-dom';
import './App.css';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';


function App() {
  return (
    <div className="full-height" >
      <HeaderComponent />

      <Outlet />

      <FooterComponent />

    </div>
  );
}

export default App;
