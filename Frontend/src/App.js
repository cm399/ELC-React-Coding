import { useState } from "react";
import Home from "./components/Home";
import Menu from "./components/Menu";
import { useDebounce } from "./hooks/useDebounce";
import "./styles/app.scss";

function App() {
  const [showSearchContainer, setShowSearchContainer] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  const { data, isLoading } = useDebounce(searchVal, 1000);

  const handleShowSearchContainer = () => {
    setShowSearchContainer(!showSearchContainer);
  };

  const onSearch = (val) => {
    setSearchVal(val);
  };

  return (
    <div className="App">
      <Menu
        showSearchContainer={showSearchContainer}
        handleShowSearchContainer={handleShowSearchContainer}
        onSearch={onSearch}
      />
      <Home data={data} isLoading={isLoading} />
    </div>
  );
}

export default App;
