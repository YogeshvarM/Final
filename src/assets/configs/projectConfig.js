import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";

import sklearnGenetic from "../images/sklearn_genetic_opt.png"
import graphEmbeddings from "../images/graph_embeddings.png"
import kafkaMl from "../images/kafkaml.png"
import scikitPipes from "../images/scikit_pipes.png"
import portfolio from "../images/portfolio.png"

import React from 'react'

const projectConfig = [
    {
        id: "project-5",
        title: "Telecom Churn Prediction ",
        links: [
            {
                name: "repo",
                url: "https://github.com/yuva-shree-s/Telecom-Churn-Prediction",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/yuva-shree-s/Telecom-Churn-Prediction/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://github.com/yuva-shree-s/Telecom-Churn-Prediction/subscription",
                icon: <AiFillEye/>,
            },
            {
                name: "docs",
                url: "https://medium.com/@syuvashree15/telecom-churn-prediction-with-deep-learning-a-full-stack-data-science-project-in-action-6ac18ea7c9d1",
                icon: <ImBook/>,
            }
        ],
        image:"https://www.element61.be/sites/default/files/img_competences/churn%2520prediction.jpg",
        Point1:"Developed an Artificial Neural Network (ANN) using Keras for telecom customer churn prediction, deploying via Flask RESTful API on AWS Beanstalk.",
        Point2:"Utilized AWS RDS for preprocessing raw input data, connecting churn prediction API and database to Power BI for analytics.",
        Point3:"Developed and implemented a Power BI dashboard to visualize insights for customer success teams, integrating AWS RDS data and monitoring model performance.",
        target: "_blank"
    },
    {
        id: "project-4",
        title: "Zomato Dataset",
        links: [
            {
                name: "repo",
                url: "https://github.com/yuva-shree-s/Zomato-Data-Analysis-Regression-Classification-and-Clustering",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/yuva-shree-s/Zomato-Data-Analysis-Regression-Classification-and-Clustering/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://github.com/yuva-shree-s/Zomato-Data-Analysis-Regression-Classification-and-Clustering/subscription",
                icon: <AiFillEye/>,
            },
            {
                name: "docs",
                url: "https://medium.com/@syuvashree15/unlocking-insights-in-zomato-data-an-analysis-using-regression-classification-and-clustering-472ee3e5c5c5",
                icon: <ImBook/>,
            }
        ],
        image: "https://img.etimg.com/thumb/msid-95349712,width-650,height-488,imgsize-45590,,resizemode-75/zomato.jpg",
        Point1: "Applied regression for rating predictions, assessing models with MAE, MSE, and R-squared.",
        Point2:"Used classification algorithms for two-rating classes, comparing performance using accuracy and F1-score.",
        Point3:"Implemented clustering techniques and created an interactive dashboard for Zomato insights.",
        target: "_blank"
    },
    {
        id: "project-3",
        title: "Sale Analysis",
        links: [
            {
                name: "repo",
                url: "https://github.com/yuva-shree-s/Adventure-Works-Database-Analysis-with-SQL-and-Power-BI",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/yuva-shree-s/Adventure-Works-Database-Analysis-with-SQL-and-Power-BI/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/yuva-shree-s/Adventure-Works-Database-Analysis-with-SQL-and-Power-BI/subscription",
                icon: <AiFillEye/>
            },
            {
                name: "docs",
                url: "https://medium.com/@syuvashree15/sale-analysis-1b264a503b25",
                icon: <ImBook/>,
            }
        ],
        image:"https://assets.website-files.com/60e7f71b22c6d0b9cf329ceb/621e193892e8c41051e34fce_StepsforEffectivelyAnalyzingYourSalesData_20971e108bda1d8795a0c640c000e691_2000.png",
        Point1:"Developed an interactive Power BI dashboard using MySQL to analyze sales, customer, and product data, with filters for salesperson and a budget comparison feature.",
        Point2:"Designed visually engaging charts and graphs to present key insights in sales analysis, customer details, and product details, improving data visibility and user engagement.",
        Point3:"•Streamlined analysis process and enabled better decision making by creating a precise system for analyzing internet sales data.\n",
        target: "_blank"
    },
    
]

export default projectConfig