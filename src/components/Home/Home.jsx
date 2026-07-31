import "./Home.css";
import { useNewsContext } from "../../context/Context";
import bgImage from "../../images/henrique-ferreira.jpg";
import Header from "../Header/Header";
import MyFavouritesPanel from "../MyFavouritesPanel/MyFavouritesPanel";
import { Box, IconButton, Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import noImage from "../../images/fallback-news.png";

function Home() {

    const { articles, loading, error, myFavourites, addToFavourites, page, keyword, fetchNews } = useNewsContext();

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <Box className="home-page"> 
            <Header />
            <Box className="home-layout">
                <MyFavouritesPanel />
            
            <div className="news-feed">
                {/*Show loading if articles is fetch from api and has zero list */}
                {loading && articles.length === 0 && <p>Loading news...</p>}
                {error && <p>{error}</p>}

                {!loading && ! error && (
                <>
                <div className="news-grid">
                    {
                        articles.map((article, index) => (
                            <div 
                                className="news-card"
                                key={index}
                            >
                                <img
                                    src={article.urlToImage || noImage}
                                    alt={article.title}
                                    className="news-image"
                                    onError={(e) => {
                                        e.target.src = noImage;
                                    }}
                                />
                                <div className="rows-content">
                                    <h1>
                                        {article.title}
                                    </h1>
                                    <p>
                                        {article.description}
                                    </p>
                                    <div className="card-actions">
                                        <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                            Read More
                                        </a>
                                        <IconButton
                                            onClick={() => addToFavourites(article)}
                                            color={myFavourites.some((fav) => fav.url === article.url) ? "error":"default"}
                                        >
                                            {myFavourites.some((fav) => fav.url === article.url) ? (
                                                <FavoriteIcon />
                                            ) : (
                                                <FavoriteBorderIcon />
                                            )}
                                        </IconButton>
                                    </div>  
                                </div> 
                            </div>
                        ))
                    }
                </div>
                <Box className="load-more-wrapper">
                    <Button
                        variant="contained"
                        className="load-more-btn"
                        onClick={() => fetchNews(keyword, page + 1, true)}
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "Load More"}
                    </Button>
                </Box>
                </>
                )}
            </div>
            </Box>
        </Box>
    )

}

export default Home;