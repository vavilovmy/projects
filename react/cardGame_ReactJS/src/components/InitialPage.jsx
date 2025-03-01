import React from "react";
import AppRoute from '../settings.js';
import { getImages } from "../data.js";

function InitialPage({onPage, onImages, onGameMode}) {
   return (
     <section className="rules container">
       <h2>Добро пожаловать!</h2>
<p>Memory — игра для тренировки визуальной памяти</p>
<div className="rules-panel">
 <h3>Правила игры</h3>
 <ul className="rules-list">
   <li>В наборе есть множество карточек – по две штуки с одним и тем же рисунком.</li>
   <li>Нужно разложить карточки «рубашкой» вверх на столе, а затем переворачивать по две.</li>
   <li>Если они совпадают – игрок забирает их и получает ещё один ход.</li>
 </ul>
</div>
<button onClick={() => {onPage(AppRoute.Game), onImages(getImages('cats')), onGameMode('cats')}} className="ico-button ico-button-cats" type="button">Котики</button>
<button onClick={() => {onPage(AppRoute.Game), onImages(getImages('flowers')), onGameMode('flowers')}} className="ico-button ico-button-flowers" type="button">Цветочки</button>
<button onClick={() => {onPage(AppRoute.Game), onImages(getImages('cars')), onGameMode('cars')}} className="ico-button ico-button-cars" type="button">Машины</button>
     </section>
   );
 }

 export default InitialPage;