import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios



export default function useApplicationData() {
  const [state, setState] = useState({
    currentTab: "Inbox",
    calls: [],
  });

  const setTab = (tab) => setState({ ...state, currentTab: tab });

 useEffect(() => {
    // Make the API call using Axios
    axios.get('https://api.example.com/data')
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);



  return { state, setTab };
}



