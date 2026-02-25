import { useState } from 'react'


import './App.css'



function App() {

  return (

    <>
      <section className="first_page">
        <div className="Name">
          <h1 className='Topic'>Scar of Modern History</h1>
          <h2 className='Topic2'>World War II</h2>
        </div>

        <div className="pages" >
          <button 
            className='timeline-btn' 
            onClick={() => {
              const timelineSection = document.getElementById('timeline-section');
              if (timelineSection) {
                timelineSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            Timeline
          </button>
          <button className='countries' onClick={() => {}}>Countries</button>
          <button className="theaters" onClick={() => {}}>Theaters</button>
        </div>
      </section>

      {/* timeline target section */}
      <section id="timeline-section" className="timeline_page">
        <div className="timeline_inner">
          <h2>Timeline</h2>

          <div className="timeline">
            {[
              { year: '1939', title: 'The Invasion of Poland', text: 'Germany invades Poland on September 1st, triggering declarations of war by Britain and France.' },
              { year: '1941', title: 'Pearl Harbor & Barbarossa', text: 'Japan attacks Pearl Harbor; Germany launches Operation Barbarossa against the Soviet Union.' },
              { year: '1944', title: 'D-Day: Operation Overlord', text: 'Allied forces launch the largest amphibious assault in history on the beaches of Normandy.' },
              { year: '1945', title: 'The Dawn of Peace', text: 'Victory in Europe and the Pacific; the war ends and the global order is reshaped.' },
            ].map((item, idx) => {
              const side = idx % 2 === 0 ? 'left' : 'right'
              return (
                <div key={item.year} className={`timeline-item ${side}`}>
                  {side === 'left' && (
                    <div className="content">
                      <h3 className="year">{item.year}</h3>
                      <h4 className="title">{item.title}</h4>
                      <p className="desc">{item.text}</p>
                    </div>
                  )}

                  <div className="center">
                    <div className="dot" />
                  </div>

                  {side === 'right' && (
                    <div className="content">
                      <h3 className="year">{item.year}</h3>
                      <h4 className="title">{item.title}</h4>
                      <p className="desc">{item.text}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default App
