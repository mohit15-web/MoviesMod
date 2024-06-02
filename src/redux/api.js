import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const MovieApi = createApi({
  reducerPath: "movieApi", // Ensure the reducer path is relevant to your service
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    prepareHeaders: (headers) => {
      headers.set("accept", "application/json, text/plain, */*");
      headers.set(
        "authorization",
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzZhOTg5ZGYyYmMxZWRiMzcwN2I0MTA4ZGQ3OTEzNiIsInN1YiI6IjY2NTljMTgxMGUzNTg5YWQ1YzUwOTU4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ubB4Eeh1lYD4bVGE4v7NOppEwaIMsnh3V9GDrRcVlkc"
      ); // Replace with your token or use an environment variable
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (movie) => `discover/${movie}`,
    }),
    getTvshows: builder.query({
      query: (list) => `discover/${list}`,
    }),
    getDetails: builder.query({
      query: (id) => `movie/${id}`,
    }),
    getTrending: builder.query({
      query: (trending) => `movie/${trending}`,
    }),
    getPopular:builder.query({
      query: (popular) => `movie/${popular}`,
    }),
    getUpcoming:builder.query({
      query: (upcoming) => `movie/${upcoming}`,
    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMoviesQuery, useGetTvshowsQuery , useGetDetailsQuery , useGetTrendingQuery,useGetPopularQuery , useGetUpcomingQuery} = MovieApi;
