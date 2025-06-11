// index.js
import "./styles.css";
import photo from './jay-wennington-N_Y88TWmGwA-unsplash.jpg'; 
import { greeting } from "./greeting.js";

const image = document.createElement("img");
image.src = photo;

document.body.appendChild(image);
console.log(greeting);
