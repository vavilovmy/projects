import React from "react";
import ResultsPage from "./ResultsPage.jsx";
import GamePage from "./GamePage.jsx";
import InitialPage from "./InitialPage.jsx";
import {getImages, results} from '../data.js';
import AppRoute from '../settings.js'


function App() {
   const [page, setPage] = React.useState(AppRoute.Rules);
   const [result, setResult] = React.useState(0);
   // TODO: добавьте состояние текущего набора карточек YES
   const [images, setImages] = React.useState(getImages('cats'))  
   const [gameMode, setGameMode] = React.useState('cats')
   const showResults = (stepsCount) => {
     setResult(stepsCount);
     setPage(AppRoute.Results);
   };
   const handleReset = () => {
     setPage(AppRoute.Rules);
   };
   const getPage = (route) => {
     switch (route) {
       case AppRoute.Game:
         return <GamePage images={images} onShowResults={showResults} gameMode={gameMode}/>;
       case AppRoute.Results:
         return (
           <ResultsPage
             stepsCount={result}
             onResetGame={handleReset}
             results={results}
           />
         )
         case AppRoute.Rules:
         return (
           <InitialPage onImages={setImages} onPage={setPage} onGameMode={setGameMode}/>
         );  
         
       default:
         return null;
     }
   };
   return getPage(page);
   
 }

 export default App;