import React from 'react';
import styles from './ArrowIcons.module.css';

const arrowLeft1 = "translate(-44.000000, -1830.000000)";
const arrowLeft2 = "translate(50.000000, 1834.000000) scale(-1, 1) translate(-50.000000, -1834.000000) translate(44.000000, 1830.000000)";
const arrowRight1 = "translate(-306.000000, -1830.000000)";
const arrowRight2 = "translate(306.000000, 1830.000000)";

const ArrowIcons = ({ direction }) => {
    return (
        <div className={styles.button}>
            <svg width="12px" height="8px" viewBox="0 0 12 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Задание-верстка-2" transform={direction === "forward" ? arrowRight1 : arrowLeft1} fill="#000000">
                        <g id="arrow-pointing-to-right-copy" transform={direction === "forward" ? arrowRight2 : arrowLeft2}>
                            <path d="M11.8365599,3.61776705 L8.26556313,0.158302917 C8.04768769,-0.0527676389 7.69433755,-0.0527676389 7.47646211,0.158302917 C7.25854203,0.369416715 7.25854203,0.711644205 7.47646211,0.922758004 L10.0949402,3.45945332 L0.557968252,3.45945332 C0.249835864,3.45945332 0,3.70148608 0,4 C0,4.29845986 0.249835864,4.54053587 0.557968252,4.54053587 L10.0949402,4.54053587 L7.47655138,7.07723119 C7.2586313,7.28834498 7.2586313,7.63057247 7.47655138,7.84168627 C7.58546679,7.94715669 7.72830666,8 7.87110189,8 C8.01389713,8 8.15669236,7.94715669 8.2656524,7.84168627 L11.8365599,4.38222214 C12.05448,4.17110834 12.05448,3.82888085 11.8365599,3.61776705 Z" id="Path"></path>
                        </g>
                    </g>
                </g>
            </svg>
        </div>)
}

export default ArrowIcons;