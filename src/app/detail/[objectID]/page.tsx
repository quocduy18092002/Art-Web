"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import useArtDetail from "./logic/useArtDetail";
import Loading from "@/components/Loading/Loading";


const ArtDetailPage = () => {
  const param = useParams<{ objectID :string}>();
 

  const { details, isLoading, error } = useArtDetail({ objectID: param?.objectID});

  if (isLoading) return <Loading />;
  if (error) return <p>Error: </p>;

  
  return (
    <>
    <div className="flex md:flex-row flex-col justify-center gap-10 md:py-10 md:px-36 px-8 w-full">
      <div className="flex flex-col items-center md:gap-4 md:w-[50%] ">
        {details?.primaryImageSmall ? (
          <div className=" relative md:w-[500px] md:h-[520px] w-full h-[500px] md:bg-gray-100 md:rounded-lg">
          <Image
          src={details.primaryImageSmall}
          alt={details.title || "Artwork"}
          fill
          className="md:object-none object-contain md:rounded-lg"
        />
          </div> 
      ) : (
        <p>No image available</p>
      )}
      <div className="flex justify-start gap-2 mt-4">
        {details?.additionalImages?.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={details.title || "Artwork"}
            width={100}
            height={100}
            className=""
            unoptimized
          />
        ))}
        </div>
      </div>
        <div className="flex flex-col gap-2 md:w-[50%] ">
        <p className="text-2xl font-semibold"><strong>Artist:</strong> {details?.artistDisplayName || "Unknown Artist"}</p>
        <p className="text-xl font-normal"><strong>Artwork Title:</strong> {details?.title || "Untitled"}</p>
        <p className="text-xl font-normal"><strong>Medium:</strong> {details?.medium || "Unknown Medium"}</p>
        <p className="text-xl font-normal"><strong>Dimensions:</strong> {details?.dimensions || "Unknown Dimensions"}</p>
        <p className="text-xl font-normal"><strong>Department:</strong> {details?.department || "Unknown Department"}</p>
        <p className="text-xl font-normal"><strong>Region:</strong> {details?.region || "Unknown Region"}</p>
        <p className="text-xl font-normal"><strong>Credit Line:</strong> {details?.creditLine || "Unknown Credit Line"}</p>
        </div>
      </div></>
    
  
  );
};

export default ArtDetailPage;
