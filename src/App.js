import Home from "./Component/Home";
import CustomerProvider from "./Mycontext/context";

function App() {
  
  
  return (
      <CustomerProvider>
        <div className="app">
          <div className="container">
              <Home />
            </div>
          </div>
      </CustomerProvider>    
  );
}

export default App;
