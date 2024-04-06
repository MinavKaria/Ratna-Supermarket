import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

async function countWordOccurrences(array, word) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      count++;
    }
  }
  return count;
}

function Layout() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [openedLocation, setOpenedLocation] = useState([]);
  const [easter, setEaster] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setOpenedLocation([...openedLocation, location.pathname]);
      const countOpenedLocation = await countWordOccurrences(
        openedLocation,
        location.pathname
      );
      if (openedLocation.includes(location.pathname)) {
        if (countOpenedLocation == 7) {
          setEaster(true);
          setLoading(true);
        } else {
          setLoading(true);
       
        }
      } else {
        setLoading(true);
      }

      const timeoutId = setTimeout(() => {
        setLoading(false);
        setEaster(false);
      }, 500);

      return () => {
        clearTimeout(timeoutId);
      };
    }

    fetchData();
  }, [location]);

  const excludedPathsNavbar = [];
  const excludedPathsFooter = ["/sign",'/categories/:categoryName'];

  const isExcludedPathNavbar = excludedPathsNavbar.includes(location.pathname);
 
  const isExcludedPathFooter = excludedPathsFooter.some((path) =>
    path.includes(":categoryName") ? location.pathname.startsWith("/categories/") : path === location.pathname
  );


  return loading ? (
    easter ? (
      <div>Boo this is an easterEgg</div>
    ) : (
      <Preloader />
    )
  ) : (
    <div>
      {!isExcludedPathNavbar && <Navbar />}
      <Outlet />
      {!isExcludedPathFooter && <Footer />}
    </div>
  );
}

export default Layout;
