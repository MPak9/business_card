import React from 'react'
import ToastyPreview from '../Resources/ToastyPreview.jpg'
import GUSDA_Preview from '../Resources/GUSDA_Preview.jpg'
import Wrigley_preview from '../Resources/Wrigley_preview.jpg'
import Wrigley_Logo from '../Resources/Wrigley_Logo.png'
import ChristianEclipse_preview from '../Resources/ChristianEclipse_preview.jpg'
import ChristianEclipse_logo from '../Resources/ChristianEclipse_Logo.jpg'

export const projects = [
    {
        id:1,
        title:'Toasty Sandwich',
        subtitle:'ReactJS Website',
        content:`Developed using React JS and CSS, Toasty is a fully responsive website showcasing a fictional brand's story & value proposition of providing healthy sandwiches for busy individuals`,
        author:'',
        img: ToastyPreview,
        link:'https://mpak9.github.io/toasty-sandwhich-website/',
    },
    {
        id:2,
        title:'GUSDA Website',
        subtitle:'SquareSpace Website',
        content:'"She brings a wealth of creativity to her work. Working with her is not just productive but also enjoyable."',
        author:'- David Casas',
        img:GUSDA_Preview,
        link:'http://www.gusda.org',
    },
    {
        id:3,
        title:'Wrigley Consulting & Inspections',
        subtitle:'SquareSpace Website',
        content: `"Very professional with excellent customer service practices. The quality of her work is consistently outstanding, exceeding my expectations every time. I highly recommend her."`,
        author:'- Marie Anne Meza',
        img:Wrigley_Logo,
        link:'https://www.wrigleyconsultancy.com/',
    },



]

export const waitingList = [
    {
        id:4,
        title:'Christian Eclipse',
        subtitle:'Wordpress Website',
        content:'"Testiomony"',
        author:'',
        img: ChristianEclipse_logo,
        link:'',
    },
]