import aki from "../images/exec photos/Aki (VP Culture).JPG";
import bianca from "../images/exec photos/Bianca (VP Finance).JPG"
import cherry from "../images/exec photos/Cherry (Photographer).JPG"
import christy from "../images/exec photos/Christy (Video Editor).JPG"
import damla from "../images/exec photos/Damla (Culture).JPG"
import erika from "../images/exec photos/Erika (Culture_Media).JPG"
import kevin from "../images/exec photos/Kevin (Culture).JPG"
import mayumi from "../images/exec photos/Mayumi (VP Culture).JPG"
import megumi from "../images/exec photos/Megumi (External).JPG"
import pauline from "../images/exec photos/Pauline (External).JPG"
import philip from "../images/exec photos/Philip_ (Webmaster).JPG"
import rie from "../images/exec photos/Rie (Culture).JPG"
import rica from "../images/exec photos/Rica (Media).JPG"
import sachie from "../images/exec photos/Sachie (Prez).JPG"
import sally from "../images/exec photos/Sally (FYR).JPG"
import shodai from "../images/exec photos/Shodai (VP FInance).JPG"
import yumika from "../images/exec photos/Yumika (VP External).JPG"
import zoe from "../images/exec photos/Zoe (VP Media).JPG"

const execs = {
    "data": [
        {
            "id": 1,
            "Image": sachie,
            "FirstName": "Sachie",
            "LastName": "Arashida",
            "Title": "President",
            "Program": "Economics & Sociology",
            "Year": "U3",
            "FavoriteFood" : "Karaage",
            "Pet": "Dog",
            "Instagram": "@a.sachiramen"
        },
        {
            "id": 2,
            "Image": aki,
            "FirstName": "Aki",
            "LastName": "Fujinawa",
            "Title": "VP Culture",
            "Program": "Mechanical Engineering",
            "Year": "U3",
            "FavoriteFood" : "あん肝",
            "Pet": "Dog",
            "Instagram": "@akiii0623"
        },
        {
            "id": 3,
            "Image": bianca,
            "FirstName": "Bianca",
            "LastName": "Sakamoto",
            "Title": "VP Finance", 
        },
        {
            "id": 4,
            "Image": cherry,
            "FirstName": "Cherry",
            "LastName": "Lei",
            "Title": "Photographer",
            "Program": "History",
            "Year": "U3",
            "FavoriteFood" : "Chazuke & Onigiri",
            "Pet": "Dog",
            "Instagram": "@chierii_chan"
        },
        {
            "id": 5,
            "Image": christy,
            "FirstName": "Christy",
            "LastName": "Shao",
            "Title": "Video Editor",
            "Program": "Cognitive Science",
            "Year": "U3",
            "FavoriteFood" : "Japanese Eel, Pork Cutlet",
            "Pet": "Cat",
            "Instagram": "@Christy._.z"
        },{
            "id": 6,
            "Image": damla,
            "FirstName": "Damla",
            "LastName": "Kuralay",
            "Title": "Culture",
            "Program": "Linguistics",
            "Year": "U2",
            "FavoriteFood" : "Takoyaki",
            "Pet": "Dog",
            "Instagram": "@damlakuralay"
        },{
            "id": 7,
            "Image": erika,
            "FirstName": "Erika",
            "LastName": "Inukai",
            "Title": "Media & Culture",
            "Program": "Environmental Biology",
            "Year": "U2",
            "FavoriteFood": "Seaweed & Natto",
            "Pet": "Dog",
            "Instagram": "@erikai_juc"
        },{
            "id": 8,
            "Image": kevin,
            "FirstName": "Kevin",
            "LastName": "Pan",
            "Title": "Culture",
            "Program": "Pharmacology",
            "Year": "U3",
            "FavoriteFood": "Ramen",
            "Pet": "Cat",
            "Instagram": "@kevinpan862"
        },
        {
            "id": 9,
            "Image": mayumi,
            "FirstName": "Mayumi",
            "LastName": "Moore",
            "Title": "VP Culture",
            "Program": "Nutrition",
            "Year": "U2",
            "FavoriteFood" : "Natto",
            "Pet": "Dog",
            "Instagram": "@amandyyumi"
        },
        {
            "id": 10,
            "Image": megumi,
            "FirstName": "Megumi",
            "LastName": "Ohara",
            "Title": "External",
            "Program": "Political Science",
            "Year": "U1",
            "FavoriteFood" : "Kaisendon",
            "Pet": "Cat",
            "Instagram": "@megumi.o"
        },
        {
            "id": 11,
            "Image": pauline,
            "FirstName": "Pauline",
            "LastName": "Alliot",
            "Title": "External",
        },
        {
            "id": 12,
            "Image": philip,
            "FirstName": "Philip",
            "LastName": "Tam",
            "Title": "Webmaster",
            "Program": "Computer Science",
            "Year": "U3",
            "FavoriteFood": "Gyudon",
            "Pet": "Dog",
            "Instagram": "flepal"
        },
        {
            "id": 13,
            "Image": rica,
            "FirstName": "Rica",
            "LastName": "Kiyoshima",
            "Title": "Media",
        },
        {
            "id": 14,
            "Image": rie,
            "FirstName": "Rie",
            "LastName": "Saute",
            "Title": "Culture",
            "Program": "Sociology",
            "Year": "U1",
            "FavoriteFood" : "Katsudon & Mochi",
            "Pet": "Dog",
            "Instagram": "@rie.c.s"
        },
        {
            "id": 15,
            "Image": sally,
            "FirstName": "Sally",
            "LastName": "Nakazawa",
            "Title": "First Year Rep.",
            "Program": "Cognitive Science",
            "Year": "U1",
            "FavoriteFood" : "Sashimi & Yakiniku",
            "Pet": "Cat",
            "Instagram": "@sallyyy.n"
        },
        {
            "id": 16,
            "Image": shodai,
            "FirstName": "Shodai",
            "LastName": "Inose",
            "Title": "VP Finance",
            "Program": "Statistics",
            "Year": "U3",
            "FavoriteFood" : "Sushi & マカロニグラタン",
            "Pet": "Dog",
        },
        {
            "id": 17,
            "Image": yumika,
            "FirstName": "Yumika",
            "LastName": "Shiba",
            "Title": "VP External",
            "Program": "Computer Science & Biology",
            "Year": "U2",
            "FavoriteFood" : "Sushi",
            "Pet": "Dog",
        },
        {
            "id": 18,
            "Image": zoe,
            "FirstName": "Zoe",
            "LastName": "Countess",
            "Title": "VP Media",
            "Program": "Linguistic",
            "Year": "U4",
            "FavoriteFood" : "Mochi",
            "Pet": "Dog",
            "Instagram": "@zduch"
        },
    ]
}

export default execs;