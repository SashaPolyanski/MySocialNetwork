import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/storeReducer";
import {Provider} from "react-redux";


const rerenderEntireTree = () => {
    //Создали доп фаил для рендера, что бы избежать циклической зависимости
    //Если функции что-то нужно, то мы можем это передать через параметры, что мы здесь и делаем(тот, кто вызывает эту функцию, должен обеспечить ее параметрами(state)
    //Когда вызывается наш addPost, то мы , вместе с этой функцией вызываем рендер и передаем наш стейт
    //Здесь мы ПРИНИМАЕМ стейт, который к нам приходит из store.ts во время вызова функции и отправляем наш стейт дальше по компонентам

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
