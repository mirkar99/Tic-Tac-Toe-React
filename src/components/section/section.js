import React, { useState } from 'react'
import './section-style.scss'

function Section() {
    const [showPlayerTurn, setPlayerTurn] = useState('Player X');
    const changePlayerTurn = function () {
        if (showPlayerTurn === 'Player X') {
            return setPlayerTurn('Player O');
        }
        setPlayerTurn('Player X');
    }
    const changeValue = function (e) {
        if (e.target.innerText === '') {
            if (showPlayerTurn === 'Player X') {
                e.target.innerText = 'X';
            }
            if (showPlayerTurn === 'Player O') {
                e.target.innerText = 'O';
            }
            changePlayerTurn();
            checkResult();

        }
    }
    const toDraw = function () {
        const buttons = [...document.querySelectorAll('.section__element')];
        const buttonsInnerText = buttons.map(el => el.innerText);
        if (buttonsInnerText.includes('') === false) {
            console.log('Draw');
            gameEnd('Draw');
        }
    }
    const toWin = function (a, b, c) {
        const buttons = [...document.querySelectorAll('.section__element')];
        const buttonsInnerText = buttons.map(el => el.innerText);
        if (buttonsInnerText[a] === 'X' || buttonsInnerText[a] === 'O') {
            if (buttonsInnerText[a] === buttonsInnerText[b] && buttonsInnerText[b] === buttonsInnerText[c]) {
                console.log('Win')
                if (buttonsInnerText[a] === 'X') {
                    return gameEnd('Player X is the Winner');
                }
                gameEnd('Player O is the Winner');
            }
        }
    }
    const gameEnd = function (message) {
        const buttons = [...document.querySelectorAll('.section__element')];
        setTimeout(() => {
            document.querySelector('.result-info').classList.remove('hidden');
            document.querySelector('.result-info').innerText = message;
            buttons.forEach(el => el.innerText = '')
            setTimeout(() => {
                document.querySelector('.result-info').classList.add('hidden');
                setPlayerTurn('Player X');
                changeToNav();
            }, 1500)
        }, 150)
    }
    const checkResult = function () {
        toDraw();
        toWin(0, 1, 2);
        toWin(3, 4, 5);
        toWin(6, 7, 8);
        toWin(0, 3, 6);
        toWin(1, 4, 7);
        toWin(2, 5, 8);
        toWin(0, 4, 8);
        toWin(2, 4, 6);
    }
    const changeToNav = function () {
        document.querySelector('.section').classList.add('hidden');
        document.querySelector('.nav').classList.remove('hidden');
    }

    return (
        <section className='section hidden'>
            <h1 className='section__header'>Now</h1>
            <h2 className='section__text'>{showPlayerTurn}</h2>
            <div className='section__block'>
                <div className='section__element' onClick={changeValue}></div>
                <div className='section__vertical-line'></div>
                <div className='section__element' onClick={changeValue}></div>
                <div className='section__vertical-line'></div>
                <div className='section__element' onClick={changeValue}></div>
            </div>
            <hr className='section__horizontal-line' />
            <div className='section__block'>
                <div className='section__element' onClick={changeValue}></div>
                <div className='section__vertical-line'></div>
                <div className='section__element' onClick={changeValue}></div>
                <div className='section__vertical-line'></div>
                <div className='section__element' onClick={changeValue}></div>
            </div>
            <hr className='section__horizontal-line' />
            <div className='section__block'>
                <div className='section__element' onClick={changeValue}></div>
                <div className='section__vertical-line'></div>
                <div className='section__element' onClick={changeValue}></div>
                <div className='section__vertical-line'></div>
                <div className='section__element' onClick={changeValue}></div>
            </div>
        </section>
    )
}
export default Section