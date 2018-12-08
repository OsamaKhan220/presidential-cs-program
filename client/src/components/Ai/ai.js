import React, { Component } from 'react';
import "./AiStyle.css"
import git12 from "./images/git1.png"
import Banner from "../Banner/Banner"
import Quarters from "../Quarter/Quarter"
import Blog from "../Blog/Blog"
import Cover from "../Cover/Cover"

import anaconda from "./images/Anaconda.png"

import pythonlogo from "./images/python-logo.png"

import dataScience from "./images/data-science0-logo-1.png"

import keras from "./images/keras-logo-2018-large-1200.png"

import linux from "./images/linux-logo.png";

import docker from "./images/docker_facebook_share.png";

import chart from "./images/chart.png";

import ms from "./images/ms.png";

import container from "./images/container.png";

import ai from "./images/ai.png";






class AI extends Component {
  
  render() {
    return (
      <div className="Artificial-Intelligence-Page">
        <div className="container-fluid p-0">
          <Banner
          className="Rectangle-67"
          heading1="Artificial Intelligence"
          heading2=""
          tagline1="A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS."
          tagline2="GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF AI."
          courseLine = "A four-quarter AI program in Data Science, Machine Learning, and Deep Learning."
        />


          <Quarters
            Q1 = {
              {className:"Rectangle-68 d1",para:"AI Foundations"}
            }
            Q2={
              {className:"Rectangle-68 d2",para:"Introduction  to Data  Science & Deep  Learning"}
            }
            Q3 = {
              {className:"Rectangle-68 d3",para:"Deploying  AI Solutions"}
            }
            Q4={
              {className:"Rectangle-68 d4",para:"AI In  Practice"}
            }
          />




          <div className="container my-container main-container">
            <div className="box-mega-container">
              <hr />
              <div className="row">
                <div className="col-sm-12">
                <div className="circle-line circle-line-2"></div>
                  <h1 className="sec-head">Detailed Program Structure</h1>
                    <div className="circle-line"></div>

                  <Blog 
                    left = {true}
                    data = {
                      {
                        image:git12,
                        number:"1A",
                        className:"transparent",
                        heading:"Version  Control  with  Git",
                        para:"You won't find a top programmer, web developer, or AI engineer who doesn't use version control. This is true because version control helps developers produce better results and makes collaboration easy. Around the world, in teams both large and small, Git is an essential part of the toolchain. This module covers Git and Github."
                      }
                    }
                  />



                  <Blog 
                    left = {false}
                    data = {
                      {
                        image:pythonlogo,
                        number:"1B",
                        className:"transparent",
                        heading:" Object  Oriented  and  Functional  Programming using  Python",
                        para:"In the second module of the program, students will learn about basic programming concepts such as lists, dictionaries, classes, functions and loops, and practice writing clean and readable code with exercises for each topic. Students will also learn how to make programs interactive and how to test code safely before adding it to a project. It is a fast-paced, thorough introduction to programming with Python 3.6 that will have students writing programs, solving problems, and making things that work in no time."
                      }
                    }
                  />

                   <Blog 
                    left = {true}
                    data = {
                      {
                        image:chart,
                        number:"1C",
                        className:"transparent",
                        heading:" Introduction  to  Linear  Algebra  and  Statistics",
                        para:"In this module, students will learn the basic mathematical and statistical concepts that are needed to practice data science and understand deep learning. Students will also implement these concepts in Python and TensorFlow."
                      }
                    }
                  />
                  <Blog 
                    left = {false}
                    data = {
                      {
                        image:anaconda,
                        number:"2A",
                        className:"grey",
                        heading:" Advanced  Python  Libraries  with  Anaconda ",
                        para:"In this module, students will be introduced to Anaconda, the leading open data science platform powered by Python. The open source version of Anaconda is a high performance distribution of Python and R and includes over 100 of the most popular Python and R packages for data science, such as NumPy, Matplotlib, etc."
                      }
                    }
                  />
                   <Blog 
                    left = {true}
                    data = {
                      {
                        image:dataScience,
                        number:"2B",
                        className:"grey",
                        heading:"  Data  Science  Essentials",
                        para:"In this module, students will learn key concepts and techniques used to perform data science; including statistical analysis, data cleansing and transformation, and data visualization with Python."
                      }
                    }
                  />
                     <Blog 
                    left = {false}
                    data = {
                      {
                        image:keras,
                        number:"2C",
                        className:"grey",
                        heading:"The  Fundamentals  of  Deep  Learning  with  Keras with  TensorFlow  Backend",
                        para:"Before implementing deep-learning algorithms, students will first become familiar with the mathematical blocks of the neural networks theory. Students will get a chance to get their hands dirty writing some simple Keras code right away! Then they will move on to advanced deep learning concepts. This module will also cover some essential advantages of Keras to prove it’s the deep-learning library of choice."
                      }
                    }
                  />


                  <Blog 
                    left = {true}
                    data = {
                      {
                        image:linux,
                        number:"3A",
                        className:"grey1",
                        heading:"  Introduction  to  Linux  and  Bash",
                        para:"Linux containers are poised to take over the world. In this module, students will begin learning with an introduction of Linux and the command line interface. For many non-technical people, the command line (also referred to as CLI, Terminal, bash, or shell) is a place of mystery. However, knowledge of only a handful of basic commands is enough to start feeling comfortable. In this module, we will cover the basic commands to get you started."
                      }
                    }
                  />
                  <Blog 
                    left = {false}
                    data = {
                      {
                        image:docker,
                        number:"3B",
                        className:"grey1",
                        heading:" Docker  Deep  Dive",
                        para:"This module provides a soup-to-nuts learning experience for core Docker technologies, including the Docker Engine, Images, Containers, Registries, Networking, Storage, and more. All of the behind the scenes theory is explained, and all concepts are clearly demonstrated on the command line. No prior knowledge of Docker or Linux is required."
                      }
                    }
                  />
                   <Blog 
                    left = {true}
                    data = {
                      {
                        image:ms,
                        number:"3C",
                        className:"grey1",
                        heading:"   Python  Microservices  Development",
                        para:"In recent years, REST (REpresentational State Transfer) has emerged as the standard architectural design for web services and web APIs. In this module, students will learn how easy it is to create a RESTfulweb service using Python and Flask."
                      }
                    }
                  />
                  <Blog 
                    left = {false}
                    data = {
                      {
                        image:container,
                        number:"3D",
                        className:"grey1",
                        heading:"  Build  AI  Microservices  for  ContainerDeployments",
                        para:"In this module, students will learn to use containers to simplify AI solution deployments and implement continuous integration and deployment strategies."
                      }
                    }
                  />
                   <Blog 
                    left = {true}
                    data = {
                      {
                        image:ai,
                        number:"4",
                        className:"grey2",
                        heading:"Artificial  Intelligence  (AI)  in  Practice",
                        para:"This module is structured around a series of practical code examples, demonstrating on real world problems. PIAIC strongly believes in the value of teaching using concrete examples, anchoring theoretical ideas into actual results and tangible code patterns. These examples all rely on Keras, the Python deep learning library. Students will learn Deep Learning for computer vision, text and sequences, finance, and advanced neural network design. "
                      }
                    }
                  />
                  <div className="btn-Grp">

                        <button className="Rectangle-60 curr" type="submit" >Download Curriculum</button>   
                        <button className="Rectangle-60 apply" type="submit" >Apply</button>                  


                  </div>
                </div>


              </div>
            </div>
          </div>


        </div>


      </div >
    );
  }
}

export default AI;
