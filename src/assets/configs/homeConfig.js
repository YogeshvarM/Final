import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Yuvashree S</strong>
        </h1>,
    titles: [
        "Data Science Enthusiast",
        "Data Analytics Enthusiast"
    ],
    about: {
        
        start: "Hey ! I'm Yuvashree, a Masters student specializing in AI & Machine Learning through my MTech program.",
        exit: "I'm passionate about data science, I excel in Python, SQL, Power BI, and Machine Learning. With hands-on experience in data analytics projects and internships, I'm eager to create innovative solutions and collaborate."
    },
    workTimeline: [
        {
            id: "work-3",
            title: "Data Science Intern",
            company: "Bosch(BGSW)",
            description: "Led ML-based R&D project for test case prioritization, using multi-output classifiers and diverse algorithms to address industry challenges."+
            "Streamlined the data science pipeline, from data collection to model creation and API deployment, demonstrating comprehensive expertise."+
            "Enhanced software testing efficiency via innovative data extraction, ML techniques, and seamless API integration.",
            date: "Sep'2022-present",
            icon: <DiCodeigniter/>,
            tags: ['Python', 'Machine Learning', 'Data Science', 'MultiOutputClassifier']
        },
        {
            id: "work-2",
            title: "PwC PowerBI in Data Analytics Virtual Case Experience                                                                                                        ",
            company: "The Forage - Virtual",
            description: "Developed Power BI dashboards for call center trends, customer retention, and diversity, utilizing key KPIs to drive data-driven decisions." +
                "Analyzed customer and agent behavior through visualizations, enhancing performance understanding."+
                "Uncovered actionable insights on demographics and gender balance, supporting recommendations for improvement.",

            date: "2023",
            icon: <FaMobileAlt/>,
            tags: ['Data Analytics', 'Power BI', 'Data Visualization']
        },
        {
            id: "work-1",
            title: "MTech",
            company: "VIT University,Vellore.India",
            description: "Studied Masters in AI & ML which helped to get the basic foundation for Data Science and Data Analytics field",
            date: "2021-2023",
            icon: <GiCommercialAirplane/>,
            tags: ["Machine Learning","Python","SQL","Deep Learning"]
        },
        {
            id: "work-0",
            title: "B.E",
            company: "MVJ College of Engineering, Bangalore, India",
            description: "Studied Engineering in Specialisation of Electronics and Communication",
            date: "2016-2020",
            icon: <BsClipboardData/>,
            tags: []
        }
    ]
}


export default homeConfig