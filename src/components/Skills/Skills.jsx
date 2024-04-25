import React from "react";
import "./Skills.css"
import Title from "../Title/Title";

const Works = () => {


    const progress = document.querySelectorAll('.progress');
    let count = 0;
    let MAX = 80;

    let run = setInterval(() => {
        count++;
        progress.forEach(element => {
            if (count <= element.dataset.progress) {
                element.parentElement.style.background = `conic-gradient(#f9004d ${count}%, #212428 0)`;
                element.firstElementChild.textContent = `${count}%`;
            };
            if (count == MAX) {
                clearInterval(run);
            };
        });
    }, 20);


    return (
        <div className="container skills">
            <div class="parent-skill">
                <div class="skill">
                    <div class="progress" data-progress="80">
                        <span class="progress-number">{count}%</span>
                    </div>
                </div>
                <span class="title">HTML</span>
            </div>

            <div class="parent-skill">
                <div class="skill">
                    <div class="progress" data-progress="65">
                        <span class="progress-number">{count}%</span>
                    </div>
                </div>
                <span class="title">Javascript</span>
            </div>

            <div class="parent-skill">
                <div class="skill">
                    <div class="progress" data-progress="50">
                        <span class="progress-number">{count}%</span>
                    </div>
                </div>
                <span class="title">React</span>
            </div>
        </div>
    )
}

export default Works