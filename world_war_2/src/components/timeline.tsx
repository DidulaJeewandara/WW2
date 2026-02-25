import React from 'react'

type Item = { year: string; title: string; text: string }

const ITEMS: Item[] = [
  { year: '1939', title: 'The Invasion of Poland', text: 'Germany invades Poland on September 1st, triggering the declaration of war by Britain and France.' },
  { year: '1941', title: 'Pearl Harbor & Barbarossa', text: 'The conflict becomes truly global as Japan attacks Pearl Harbor and Germany launches its invasion of the Soviet Union.' },
  { year: '1944', title: 'D-Day: Operation Overlord', text: 'Allied forces launch the greatest amphibious assault in history on the beaches of Normandy.' },
  { year: '1945', title: 'The Dawn of Peace', text: 'Victory in Europe and Japan. The war concludes, leaving behind a fundamentally changed global landscape.' },
]

export default function Timeline() {
  return (
    <section id="timeline-section" className="timeline_page">
      <div className="timeline_inner">
        <h2 style={{ color: '#bfeecb', marginBottom: '1rem' }}>Timeline</h2>
        <div className="timeline">
          {ITEMS.map((it, idx) => {
            const side = idx % 2 === 0 ? 'left' : 'right'
            return (
              <div key={it.year} className={`timeline-item ${side}`}>
                {side === 'left' && (
                  <div className="content">
                    <h3 className="year">{it.year}</h3>ear}</h3>
                    <h4 className="title">{it.title}</h4>
                    <p className="desc">{it.text}</p>
                  </div>iv>
                )}}

                <div className="center">          <div className="center">
                  <div className="dot" />                  <div className="dot" />
                </div>              </div>

                {side === 'right' && (                {side === 'right' && (
                  <div className="content">                  <div className="content">
                    <h3 className="year">{it.year}</h3>                    <h3 className="year">{it.year}</h3>
                    <h4 className="title">{it.title}</h4>                    <h4 className="title">{it.title}</h4>
                    <p className="desc">{it.text}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}





}  )    </section>      </div>        </div>          })}            )              </div>                )}                  </div>                    <p className="desc">{it.text}</p>                    <p className="desc">{it.text}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}




