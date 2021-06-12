import { useEffect, useState } from "react";
import axios from "axios";
export default function useGetData(query, pageNumber) {
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://dummy-wireframe.iecsemanipal.com/social-media/users?apikey=wzo04y8hhu9fqcqrda1ib8",
    }).then((res) => {
      console.log(res.data);
    });
  }, [query, pageNumber]);
  return <div></div>;
}
