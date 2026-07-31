import axios from "axios";
import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

const NewsContent = createContext();

export const useNewsContext = () => useContext(NewsContent);

export const NewsProvider = ({ children }) => {
    const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
    const BASE_URL = "https://newsapi.org/v2";

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [keyword, setKeyword] = useState("");   
    const [page, setPage] = useState(1);     
    const [myFavourites, setMyFavourites] = useState(() => {
        const stored = localStorage.getItem("my-favourites");
        return stored ? JSON.parse(stored) : [];
    })     

    //Add to favourites
    const addToFavourites = (article) => {
        setMyFavourites((prev) => {
            const alreadySaved = prev.some((a) => a.url === article.url); //check if article same as current favourite listing
            if (alreadySaved) return prev; //avoid duplicate favorites

            const updated = [...prev, article]; //cppy from old array, add new article
            localStorage.setItem("my-favourites", JSON.stringify(updated)); //add to local storage in JSON format
            return updated;
        })
    }

    const clearMyFavourites = () => {
        localStorage.removeItem("my-favourites");
        setMyFavourites([]);
    }

    //Deduct any duplicate article
    const deduperArticles = (articleList) => {
        const seen = new Set(); //set-could not contain duplicate value
        return articleList.filter((article) => {
            const cleanUrl = article.url?.split("?")[0]; //strip query string from url
            const titleKey = article.title?.trim().toLowerCase(); //all same title become lowercase
            const key = titleKey || cleanUrl; // If title exist, use title, if not use url

            // if has same title then return false(dont add)
            if (!key || seen.has(key)) {
                return false;
            }
            seen.add(key);
            return true;
        });
    }

    const fetchNews = async (
        searchKeyword, 
        pageNum = 1, 
        append = false

    ) => {  
        setLoading(true);
        setError(null);

        try {
                const response = await axios.get(
                `${BASE_URL}/everything`,   
                {
                    params: {
                        q: searchKeyword,        
                        searchIn: "title",       
                        sortBy: "publishedAt",   
                        pageSize: 20,            
                        page: pageNum,           
                        language: "en",          
                        apiKey: API_KEY,
                    },
                }
            );

            console.log(response.data.articles);

            //Append new results instead of replacing, when Load More is clicked
            if (append) {
                setArticles((prev) => deduperArticles([...prev, ...response.data.articles]));
            } else {
                setArticles(deduperArticles(response.data.articles));
            }

            setKeyword(searchKeyword);
            setPage(pageNum);
            
        } catch (err) {
            setError("Could not fetch the news, please try again later");
        } finally {
            setLoading(false);
        }
    };

    //Show default news when opening app
    useEffect(() => {
        fetchNews("latest", 1, false);
    },[])

    return (
        <NewsContent.Provider
            value={{
                articles,
                loading,
                error,
                fetchNews,
                keyword,   
                page,
                myFavourites, 
                addToFavourites,
                clearMyFavourites,      
            }}
        >
            {children}
        </NewsContent.Provider>
    );
};