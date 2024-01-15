"use client";

import { useState, useEffect } from "react";
import { ApiClient } from "@/utils/ApiClient";
import Day from "../components/Day"

// <main>
// // export default function Home() {

// //   const apiClient = new ApiClient();

// //   const [range, setRange] = useState([0, 10])


// //   const [quote, setQuote] = useState({
// //     content: "",
// //     author: "",
// //     tags: [],
// //   });

// //   const [authors, setAuthors] = useState([])

// //   const getRandomQuote = async () => {
// //     try {
// //       const response = await apiClient.getQuote();
// //       setQuote(response.data);
// //       console.log(response)
// //     } catch (error) {
// //       console.log(error)
// //     }
// //   };

// //   const getAndUpdateAuthors = async () => {
// //     try {
// //       const response = await apiClient.getAuthors(range[0], range[1]);
// //       setAuthors(response.data.results)
// //     } catch (error) {
// //       console.log(error)
// //     }
// //   }

// //   const getQuoteByAuthor = async (authorId) => {
// //     try {
// //       const response = await apiClient.getQuoteByAuthor(authorId);
// //       if (response.data.results.length > 0) {
// //         const randomQuote = response.data.results[Math.floor(Math.random() * response.data.results.length)]
// //         setQuote(randomQuote)
// //       } else {
// //         setQuote({
// //           content: "No quotes found for this author",
// //           author: "",
// //           tags: [],
// //         })
// //       }
// //     } catch (error) {
// //       console.log(error)
// //     }
// //   }

// //   useEffect(() => {
// //     getAndUpdateAuthors();
// //   }, [range])

// //   useEffect(() => {
// //     getRandomQuote();
// //   }, []);

// //   const handlePreviousClick = () => {
// //     if (range[0] - 10 >= 0) {
// //       setRange([range[0] - 10, range[1] - 10]);
// //     }
// //   }
  
// //   const handleNextClick = () => {
// //     if (range[1] + 10 <= 100) {
// //       setRange([range[0] + 10, range[1] + 10]);
// //     }
// //   }
  

// //   return <main className="p-4">
// //     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handlePreviousClick}>Previous</button>
// //     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleNextClick}>Next</button>
// //     <QuoteCard 
// //       content={quote.content}
// //       author={quote.author}
// //       tags={quote.tags}
// //     />
// //     {
// //       authors?.map((author) => {
// //         return <Day 
// //           day={day.name}
// //           key={day._id}
// //           handleQuoteUpdate={() => getQuoteByAuthor(day._id)}
// //         />
// //       })
// //     }
//   </main>;
// }
