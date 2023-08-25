'use server'

import { GetMostPopularActorApi } from "@/api/Actor";
import { GetMostPopTvShowApi, GetPopMoviesApi, GetTopRatedMoviesApi } from "@/api/Movie";
import { getInfoMovie } from "@/api/NewApi/getInfoMovie";

const fs = require('fs');
// const apiUrl = 'https://api.example.com/data';

// // Fetch data using Fetch API
// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => {
//     // Convert fetched data to a Blob
//     const blobData = new Blob([JSON.stringify(data)], { type: 'application/json' });

//     // Create a downloadable link
//     const downloadLink = document.createElement('a');
//     downloadLink.href = URL.createObjectURL(blobData);
//     downloadLink.download = 'fetchedData.json'; // Specify the filename
//     downloadLink.textContent = 'Download Fetched Data';

//     // Append the link to the DOM
//     document.body.appendChild(downloadLink);
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });


export async function handleGetdApi() {
    try {
        console.log("it run!!!")
        const topRatedData = await GetMostPopTvShowApi()
        // fs.writeFile('./src/data/mostPopTvShows.json', JSON.stringify(topRatedData), (err:any) => {
        //     if (err) {
        //         throw new Error('Something went wrong.')
        //     }
        //     console.log('JSON written to file. Contents:');
        //     console.log(fs.readFileSync('mostPopMovie.json', 'utf-8'))
        // })
        return topRatedData
    } catch (error) {
       console.log("get toprate error: ", error)
       return undefined 
    }
}

export async function handleGetdData(idMovie:string) {
    try {
        const idMovies = idMovie.slice(7, idMovie.length-1)
        const topData = await getInfoMovie(idMovies)
        const data = fs.readFileSync('./data.json');
        const jsonData = JSON.parse(data);
        jsonData.push(topData)

        return topData
    } catch (error) {
       console.log("get data error: ", error)
       return undefined 
    }
}