import React from "react";
import FormInput from "./Components/form/formInput";
import List from "./Components/list/list";
import Footer from "./Components/bottomSide/footer";
import { DataProvider } from "./Components/dataProvider/dataProvider";
import '../src/App.css'

function App() {
  return (
    <>
      <div className="container">
        <DataProvider >
          <div className="App">
            <h1>To Do List</h1>
            <FormInput />
            <List />
            <Footer />
          </div>
        </DataProvider>
      </div>
    </>
  );
}

export default App;
