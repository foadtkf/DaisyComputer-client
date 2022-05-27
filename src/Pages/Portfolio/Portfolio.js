import React from "react";
import img from "./IMG_20211219_000034.jpg";
import laptopdokan from "./LaptopDokan.bd.png"
import mrphotoman from "./MrPhotoman.png"
import lthouse from "./LTHouse.png"
import { Link } from 'react-router-dom';
const Portfolio = () => {
    const frameworks=['Bootstrap','Tailwind CSS','Swing','ReactJS',"NodeJS"]
    const languages=["C/C++","Java","Python","Javascript"]
    const tools =["Firebase","Git","Heeroku","Netlify"]
    const db = ["MongoDB","MySQL"]
    const projects =[
        {
            id:1,
            name:'LaptopDokan.bd',
            website: 'https://laptopdokanbd.netlify.app/',
            img:"./LaptopDokan.bd.png"
        },
        {
            id:2,
            name:'MrPhotoMan',
            website: 'https://mr-photoman.web.app/',
            img:'mrphotoman'
        },
        {
            id:3,
            name:'LTHouse',
            website: 'https://laptop-dokan.web.app/',
            img:'lthouse'
        }
    ]
  // Create My Portfolio route. In this route, you will have your name, email address, educational background, list of technologies or skills you have as a web developer. Add links of three of your projects (live website links). Adding descriptions or screenshots of your projects are optional.
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <img src={img} className="-mt-20 w-80 rounded-md" alt="" />
        <div>
          <section className="bg-gradient-to-r from-violet-900 to-white text-primary-content rounded-lg p-2">
          <h1 class="text-5xl font-bold">MD. Fakhrul Islam Fuad</h1>
          <p className="text-xl">email: fakhrulif@gmail.com</p>
          <h5 className="text-3xl">
            <strong>
              Bangladesh Army University of Science & Technology, Saidpur.
            </strong>
          </h5>
          <h5 className="text-2xl">
            <strong>Bachelor of Computer Science and Engineering</strong>
          </h5>
          <h5 className="text-2xl">Jan 2019 – Dec 2022</h5>
          </section>
          <div class="collapse rounded-lg my-2">
  <input type="checkbox" class="peer" /> 
  <div class="collapse-title bg-gradient-to-r from-violet-900 to-white  text-secondary-content peer-checked:bg-gradient-to-r from-cyan-500 to-blue-500 peer-checked:text-secondary-content text-xl">
    Programming Languages
  </div>
  <div class="peer-checked:pt-2 collapse-content bg-transparent text-primary-content peer-checked:bg-gradient-to-r from-cyan-500 to-white peer-checked:text-secondary-content"> 
  <div class="grid grid-cols-4 gap-4">
          {
              languages.map(skill=><div className="btn">{skill}</div>)
          }
          </div>
  </div>
</div>
<div class="collapse rounded-lg my-2">
  <input type="checkbox" class="peer" /> 
  <div class="collapse-title bg-gradient-to-r from-violet-900 to-white  text-secondary-content peer-checked:bg-gradient-to-r from-cyan-500 to-blue-500 peer-checked:text-secondary-content text-xl">
    Frameworks & Libraries
  </div>
  <div class="peer-checked:pt-2 collapse-content bg-transparent text-primary-content peer-checked:bg-gradient-to-r from-cyan-500 to-white peer-checked:text-secondary-content"> 
  <div class="grid grid-cols-4 gap-4">
          {
              frameworks.map(skill=><div className="btn">{skill}</div>)
          }
          </div>
  </div>
</div>
<div class="collapse rounded-lg my-2">
  <input type="checkbox" class="peer" /> 
  <div class="collapse-title bg-gradient-to-r from-violet-900 to-white  text-secondary-content peer-checked:bg-gradient-to-r from-cyan-500 to-blue-500 peer-checked:text-secondary-content text-xl">
    Tools
  </div>
  <div class="peer-checked:pt-2 collapse-content bg-transparent text-primary-content peer-checked:bg-gradient-to-r from-cyan-500 to-white peer-checked:text-secondary-content"> 
  <div class="grid grid-cols-4 gap-4">
          {
              tools.map(skill=><div className="btn">{skill}</div>)
          }
          </div>
  </div>
</div>
<div class="collapse rounded-lg my-2">
  <input type="checkbox" class="peer" /> 
  <div class="collapse-title bg-gradient-to-r from-violet-900 to-white  text-secondary-content peer-checked:bg-gradient-to-r from-cyan-500 to-blue-500 peer-checked:text-secondary-content text-xl">
    Database
  </div>
  <div class="peer-checked:pt-2 collapse-content bg-transparent text-primary-content peer-checked:bg-gradient-to-r from-cyan-500 to-white peer-checked:text-secondary-content"> 
  <div class="grid grid-cols-4 gap-4">
          {
              db.map(skill=><div className="btn">{skill}</div>)
          }
          </div>
  </div>
</div>
<div class="collapse rounded-lg my-2">
  <input type="checkbox" class="peer" /> 
  <div class="collapse-title bg-gradient-to-r from-violet-900 to-white  text-secondary-content peer-checked:bg-gradient-to-r from-cyan-500 to-blue-500 peer-checked:text-secondary-content text-xl">
    My Projects
  </div>
  <div class="peer-checked:pt-2 collapse-content bg-transparent text-primary-content peer-checked:bg-gradient-to-r from-cyan-500 to-white peer-checked:text-secondary-content"> 
  <div class="grid grid-cols-2 gap-4">
          <div class="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={laptopdokan} alt="websiteImage" /></figure>
  <div class="card-body">
    <h2 class="text-3xl">{projects[0].name}</h2>
    <div class="card-actions justify-center my-auto">
    <a href={projects[0].website} className="text-xl btn btn-lg btn-primary" >
            Visit {projects[0].name}
          </a>
    </div>
  </div>
</div>
<div class="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={mrphotoman} alt="websiteImage" /></figure>
  <div class="card-body">
    <h2 class="text-3xl">{projects[1].name}</h2>
    <div class="card-actions justify-center my-auto">
    <a href={projects[1].website} className="text-xl btn btn-lg btn-primary" >
            Visit {projects[1].name}
          </a>
    </div>
  </div>
</div>
<div class="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={lthouse} alt="websiteImage" /></figure>
  <div class="card-body">
    <h2 class="text-3xl">{projects[2].name}</h2>
    <div class="card-actions justify-center my-auto">
    <a href={projects[2].website} className="text-xl btn btn-lg btn-primary" >
            Visit {projects[2].name}
          </a>
    </div>
  </div>
</div>
          
          </div>
  </div>
</div>
          {/* <div className="border-4 roudned-md p-4">
          <h5 className="text-2xl">Technologies and Skills</h5>
          <div class="grid grid-rows-2 grid-flow-col gap-4">
          {
              skills.map(skill=><div>{skill}</div>)
          }
          </div>
</div> */}
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
