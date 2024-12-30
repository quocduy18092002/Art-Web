import React, { useEffect } from "react";
import { fetchObjectIDs } from "../util/fetchArtWork";

const HomePage = ({
  query,
  setArtistIds,
  setError,
}: {
  query: string;
  setArtistIds: React.Dispatch<React.SetStateAction<string[]>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  useEffect(() => {
    const loadObjectIDs = async () => {
      try {
        const ids = await fetchObjectIDs(query);
        setArtistIds(ids);
      } catch {
        setError("Không thể tải danh sách các tác phẩm.");
      }
    };

    loadObjectIDs();
  }, [query, setArtistIds, setError]);

  return <div className="pt-10 uppercase text-center font-bold md:text-2xl text-xl">
    Collection of {query }</div>;
};

export default HomePage;
