import Sidebar from "./components/sidebar";
import Main from "./components/main";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(false);

  const nasa_key = import.meta.env.VITE_NASA_KEY;

  const [showModal, setShowModal] = useState(false);

  const handletoggle = () => setShowModal(!showModal);

  useEffect(() => {
    async function fetchApiData() {
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${nasa_key}`;
      try {
        const res = await fetch(url);
        const apidata = await res.json();
        setdata(apidata);
        console.log("APIdata", apidata);
      } catch (error) {
        console.log(error);
      }
    }
    fetchApiData();
  }, []);

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-spinner fa-spin"></i>
        </div>
      )}
      {showModal && <Sidebar handletoggle={handletoggle} data={data} />}
      {data && <Footer handletoggle={handletoggle} data={data} />}
    </>
  );
}

export default App;
