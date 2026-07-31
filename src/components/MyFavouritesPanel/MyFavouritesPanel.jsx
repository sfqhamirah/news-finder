import { Box, Typography, Button, List, ListItem, ListItemText } from "@mui/material";
import { useNewsContext } from "../../context/Context";
import "./MyFavouritesPanel.css";

function MyFavouritesPanel() {
    const {myFavourites, clearMyFavourites} = useNewsContext();

    // Open article in new browser tab
    const handleOpenArticle = (url) => {
        window.open(url, "_blank", "noopener,noreferrer"); //website to open, open in new tabs
        //noopener- prevent website from control apps
        //noreferrer- prevent sending information where user come from
    }

    return (
        <div>
            <Box className="favourites-panel">
                <Box className="favourites-header">
                    <Typography variant="subtitle1">
                        My Favourites: {myFavourites.length}
                    </Typography>
                    <Button
                        variant="contained"
                        size="small"
                        className="clear-button"
                        onClick={clearMyFavourites}
                    >
                        Clear
                    </Button>
                </Box>

                <List>
                    {myFavourites.map((article, index) =>
                    <ListItem
                        key={index}
                        className="favourite-item"
                        onClick={() => handleOpenArticle(article.url)}
                    >
                        <ListItemText primary={article.title} />
                    </ListItem>)}
                </List>
            </Box>
        </div>
    )
}

export default MyFavouritesPanel;