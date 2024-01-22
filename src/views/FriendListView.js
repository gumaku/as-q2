import React, { useEffect } from "react";
import axios from "axios";
import Contact from "../components/Contact/Contact";
const FriendListView = () => {
  const baseURL = "https://api.json-generator.com/templates/-xdNcNKYtTFG/data";
  const token = "b2atclr0nk1po45amg305meheqf4xrjt9a1bo410";
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const [friendsData, setFriendsData] = React.useState(null);
  useEffect(() => {
    axios.get(baseURL, config).then((response) => {
      setFriendsData(response.data);
    });
  }, []);

  if (friendsData) {
    return (
      <>
        {friendsData.map((x) => {
          return (
            <Contact
              key={x._id}
              location={x.location}
              name={x.name}
              picture={x.picture}
            />
          );
        })}
      </>
    );
  }
};
export default FriendListView;
