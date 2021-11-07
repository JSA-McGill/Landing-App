import jmusic from "../images/j-music.jpg";
import japanese101 from "../images/japanese_101.jpg";
import supersmash_tourny_cover from "../images/smash_tourny_cover.png";
import japanese101_2021 from "../images/Events/Japanese_101.jpg";


const events = {
    upcoming: [
        {
            "id": 1,
                "Image": japanese101_2021,
                "Title": "Japanese 101",
                "Description": "Learn Japanese",
                "Facebook": "https://www.facebook.com/events/438732114269694"
        },
    ],
    past: [
        
        {
            "id": 1,
                "Image": jmusic,
                "Title": "J-Music",
                "Description": "Come and Chill",
                "Facebook": "https://www.facebook.com/events/397815058035142/"
        },
        {
            "id": 2,
            "Image": japanese101,
            "Title": "Japanese 101",
            "Description": "Learn Japanese",
            "Facebook": "https://www.facebook.com/events/2868825473348569/"
        },
        {
            "id": 3,
            "Image": supersmash_tourny_cover,
            "Title": "Smash Tournament",
            "Description": "Play Super Smash Bros Ultimate!",
            "Facebook": "https://www.facebook.com/events/243071700020457/"
        }
    ]
}

export default events;