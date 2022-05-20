import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Chats() {
    const [chats,setChats] = useState(null)
  const fetchChats = async function () {
    const {data} = await axios.get("/api/chats");
    setChats(data)
  };
  console.log(chats)
  useEffect(() => {
    fetchChats();
  }, []);
  return <div>Chats</div>;
}
