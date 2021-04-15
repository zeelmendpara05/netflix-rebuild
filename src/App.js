import './App.css';
import React from 'react';
import Row from './component/Row';
import requests from './services/requests';
import Banner from './component/Bannner';
import Nav from './component/Nav'


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl = {requests.fetchTreding}/>
      <Row title="Top Rated" fetchUrl = {requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl = {requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
      <Row title="Romantic Movies" fetchUrl = {requests.fetchRomanceMovies}/>
      <Row title="Documentries" fetchUrl = {requests.fetchDocumentries}/>
    </div>
  );
}

export default App;
