// src/api/fetchFunction.js
import axios from 'axios';

export const fetchData = async () => {
    const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjU4NjY4OTNjNjBiYTVjYmYwZTY3MThiZGQ2NzMxMCIsInN1YiI6IjY1Y2JiYTFjOGM0NGI5MDE4MDk0MTc5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pRwXeZxUfIkxE78P1llG_i4SlD3CV6i8dfhHeU9Y1EI",
        },
      };


  try {
    const response = await axios.get('' ,options);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
