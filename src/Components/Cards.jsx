import React from 'react';
import img1 from "/src/assets/Background.png";
import card1 from "H:/React/project1/src/assets/workflow-01.png";
import card2 from "H:/React/project1/src/assets/workflow-02.png";
import card3 from "H:/React/project1/src/assets/workflow-03.png";

export const Cards = () => {
    return (
        <div
            className="p-5 border-bottom border-secondary"
            style={{
                backgroundImage: `url(${img1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="row g-4">
                {[{ img: card3, title: "Built-in Tools" },
                  { img: card2, title: "Scale Instantly" },
                  { img: card1, title: "Tailored Flows" },]
                  .map((card, index) => (
                    <div className="col-12 col-md-6 col-lg-4" key={index}>
                        <div className="card card-color h-100 rounded-5 shadow">
                            <img src={card.img} className="card-img-top w-75 mx-auto pt-4" alt={card.title} />
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">
                                    Streamline the product development flow with a content platform that's aligned across specs and insights.
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
