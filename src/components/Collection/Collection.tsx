import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import Image from "next/image";
import Link from "next/link";
import { ArtworkDetail, fetchArtworkDetails } from "../util/fetchArtWork";
import Loading from "../Loading/Loading";

const Collection = ({ artistIds }: { artistIds: string[] }) => {
  const [artworkDetails, setArtworkDetails] = useState<ArtworkDetail[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (artistIds.length === 0) return;
    setCurrentPage(1); 
  }, [artistIds]);

  useEffect(() => {
    if (artistIds.length === 0) return;

    const loadArtworkDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const startIdx = (currentPage - 1) * 10;
        const endIdx = startIdx + 10;
        const idsForPage = artistIds.slice(startIdx, endIdx);
        let details = await fetchArtworkDetails(idsForPage);

        details = details.filter(
          (item) => item && item.primaryImageSmall && item.artistDisplayName
        );

        if (details.length < 10) {
          const remainingIds = artistIds.slice(endIdx, endIdx + (10 - details.length));
          const additionalDetails = await fetchArtworkDetails(remainingIds);

          const validAdditionalDetails = additionalDetails.filter(
            (item) => item && item.primaryImageSmall && item.artistDisplayName
          );

          details = [...details, ...validAdditionalDetails];
        }

        setArtworkDetails(details);
      } catch {
        setError("Không thể tải chi tiết các tác phẩm.");
      } finally {
        setLoading(false);
      }
    };

    loadArtworkDetails();
  }, [artistIds, currentPage]);

  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="pt-10 mx-4">
      {loading ? (
      <Loading />
      ) : (
        <>
             <div className="flex flex-wrap gap-4 justify-center">
          {artworkDetails.map((item) => (
            <Link
              href={`/detail/${item.objectID}`}
              key={item.objectID}
              className="flex flex-col justify-between items-center border p-4 rounded-md shadow-lg hover:shadow-xl"
            >
              <Image
                src={item.primaryImageSmall}
                alt={item.artistDisplayName}
                width={300}
                height={300}
                className="rounded-md w-full"
              />
              <h1 className="mt-2 text-lg font-semibold text-center">
                {item.artistDisplayName || "Unknown Artist"}
              </h1>
            </Link>
            
          ))}
        </div>
          <div className="flex justify-center mt-8">
        <Pagination
          current={currentPage}
          total={artistIds.length}
          pageSize={10}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
        />
      </div></>
   
      )}

    
    </div>
  );
};

export default Collection;
