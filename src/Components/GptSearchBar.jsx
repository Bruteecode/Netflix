import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import lang from '../Utils/LanguageConstants';
import { API_Options, Groq_Key } from '../Utils/Constants';
import { addGptMovies } from '../Utils/GptSlice';

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  //Search movie in TMDB
  const SearchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_Options);

    const json = await data.json();
    return json.results;
  }
  async function handleGptSearchClick() {
    const query = searchText.current.value;

    const gptQuery =
      `Act as a Movie Recommendation System and suggest some movies from the query: ${query}. ` +
      `Only give me names of 5 movies, comma separated like this: Gadar, Qismat, Golmaal Again, De Dana Dan, Sita Ramam`;

    try {
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${Groq_Key}`,
        },
        body: JSON.stringify({
          model: "llama3-8b-8192",
          messages: [
            {
              role: "user",
              content: gptQuery,
            },
          ],
          temperature: 0.7,
          max_tokens: 100,
        }),
      });

      const data = await res.json();
      const output = data?.choices?.[0]?.message?.content.split(",");

      if (!output) {
        console.warn("No movie list returned.");
        return;
      }
      console.log(output)
      //for each movie i will search in TMDB

      const PromiseArray = output.map((movie) => SearchMovieTMDB(movie));
      const tmdbResults = await Promise.all(PromiseArray);
      console.log("🎬 Recommended Movies:", tmdbResults);
      dispatch(addGptMovies({ movieNames: output, movieResults: tmdbResults }));
    } catch (err) {
      console.error("❌ Groq API error:", err);
    }
  }


  return (
    <div className="pt-[30%] md:pt-[10%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
          ref={searchText}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-800 text-white rounded-lg transition-all duration-300 ease-in-out hover:bg-red-600"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
