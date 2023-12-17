import React from 'react'
import { skills, service, socialLinks } from '../constants';
import CTA from '../components/CTA';
const About = () => {
  return (
    <section className="max-container">
      <h1 className='head-text'>
        Hey, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Ritika</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          A versatile full-stack web developer based in India. Crafting seamless digital experiences through innovative coding and design solutions.
          Now, enhance your online presence, boost user engagement, and drive results.
        </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}

        </div>
      </div>
      <h1 className='head-text'>
        <span className='blue-gradient_text font-semibold drop-shadow'>Services </span>I Offer
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Crafting solutions tailored to your needs – explore a range of tailored services designed to elevate your online presence and engage your audience effectively.
          


          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-6'>
            {service.map((service) => (
              <div key={service.id} className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300'>

                <div className='p-4'>
                  <h3 className='text-xl font-semibold text-gray-800'>{service.name}</h3>

                </div>
              </div>
            ))}
          </div>

        </p>
      </div>










      <hr className='border-slate-200' />

      <CTA></CTA>
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

export default About