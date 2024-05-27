import BookForm from "./components/BookForm/BookForm"
import BookList from "./components/BookList/BookList"
import Filter from "./components/Filter/Filter"
import Error from "./components/Error/Error";

import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Book Libarary App</h1>
      </header>
			<main className="app-main">
				<div className="app-left-column">
					<BookForm/> 
				</div>
				<div className="app-right-column">
					<Filter/>
					<BookList/>
				</div>
			</main>
			<Error/>
    </div>
  );
}

export default App;
