import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <div>Github followers : {data.name}</div>
      {/* {data ? (
        <>
          <div>Github followers : {data.name}</div>
          <img src={data.avatar_url} alt="Git picture" width={400}></img>
        </>
      ) : (
         
        <div>Loading..</div>
        
      )} */}
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/HammadAliKhanweb3");
  return response.json();
  
};
