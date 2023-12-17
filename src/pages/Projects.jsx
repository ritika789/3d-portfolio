import React from 'react'
import { projects,socialLinks } from '../constants'
import { arrow } from '../assets/icons'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA';
const Projects = () => {
  return (
    <section className="max-container">
      <h1 className='head-text'>
        My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>

          My project portfolio isn't just a showcase; it's a testament to transforming ideas into powerful, tangible realities. Witness the fusion of innovation and expertise, where every pixel and line of code tells a story of impactful solutions. Welcome to a world where vision meets execution.
        </p>
      </div>
      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>
                {project.description}
              </p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}


      </div>
      <hr className='border-slate-200'/>
      <CTA/>
      <div className='mt-10 flex gap-4'>
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-blue-500 transition duration-300'
          >
            <img
              src={social.iconUrl}
              alt={social.name}
              className='w-6 h-6'
            />
          </a>
        ))}
      </div>

    </section>
  )
}

export default Projects