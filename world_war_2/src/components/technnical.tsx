import { useState, useRef, useEffect } from 'react'
import './Inventions.css'
import { useNavigate } from 'react-router-dom'

// ── Data ────────────────────────────────────────────────────────────────────

interface Invention {
  id: string
  number: string
  category: string
  title: string
  short: string
  full: string
  image: string
  year: string
}

const militaryEngineering: Invention[] = [
  {
    id: 'radar',
    number: '01',
    category: 'Military Engineering',
    title: 'Radar',
    short: 'Pioneering radio-based tracking systems used for early warning and aerial interception.',
    full: 'Radar (Radio Detection And Ranging) was one of the most decisive technologies of WWII. Britain\'s Chain Home network gave the RAF crucial minutes of warning during the Battle of Britain. By 1944, radar guided anti-aircraft guns, directed naval convoys, and was miniaturized to fit inside aircraft. Germany, the US, and Britain all raced to develop centimetric radar — the side that mastered it gained enormous tactical advantages.',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=600&q=80',
    year: '1940',
  },
  {
    id: 'nuclear',
    number: '02',
    category: 'Military Engineering',
    title: 'Nuclear Power',
    short: 'The mastery of atomic fission through the top-secret Manhattan Project.',
    full: 'The Manhattan Project, launched in 1942, was the most expensive and secretive scientific endeavor in history. Employing over 130,000 people across 30 sites, it produced the world\'s first nuclear weapons. The detonations over Hiroshima (August 6) and Nagasaki (August 9) 1945 killed an estimated 110,000–210,000 people and forced Japan\'s surrender, ending WWII. The project fundamentally reshaped geopolitics and gave birth to the nuclear age.',
    image: 'https://images.unsplash.com/photo-1624620178246-011ab2e9f0f3?w=600&q=80',
    year: '1942',
  },
  {
    id: 'jet',
    number: '03',
    category: 'Military Engineering',
    title: 'Jet Propulsion',
    short: 'The transition from piston-driven propellers to high-speed axial flow engines.',
    full: 'The jet engine was independently developed by Frank Whittle in Britain and Hans von Ohain in Germany. The Messerschmitt Me 262 became the world\'s first operational jet-powered fighter aircraft in 1944, capable of 900 km/h — far faster than any Allied piston fighter. Although it came too late to turn the war, jet propulsion permanently ended the era of propeller aircraft and directly led to modern aviation.',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=600&q=80',
    year: '1944',
  },
  {
    id: 'ballistics',
    number: '04',
    category: 'Military Engineering',
    title: 'Ballistics & Rocketry',
    short: 'V-2 rocket developments that laid the groundwork for modern space exploration.',
    full: 'The German V-2 rocket, designed by Wernher von Braun, was the world\'s first long-range guided ballistic missile. Standing 14 metres tall and reaching speeds of 5,760 km/h, it flew beyond the atmosphere and was impossible to intercept. Over 3,000 were fired at Allied cities. After the war, both the US and Soviet Union captured V-2 technology and engineers — directly launching the Space Race and giving us the Saturn V and Sputnik.',
    image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=600&q=80',
    year: '1944',
  },
]

const featuredInventions = [
  {
    id: 'penicillin',
    tag: 'Health & Science',
    title: 'Mass-Produced Penicillin',
    body: 'The industrialization of antibiotic production saved millions of lives, shifting field medicine from rudimentary treatment to effective life-saving intervention by the invasion of Normandy. By D-Day, the Allies had enough penicillin to treat every infected wound — a first in military history. Death rates from infected wounds dropped from 18% in WWI to under 1%.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
    imageLeft: false,
    year: '1943',
  },
  {
    id: 'computing',
    tag: 'Intelligence Systems',
    title: 'Birth of Modern Computing',
    body: "The creation of Colossus at Bletchley Park marked the transition to electronic digital computing, designed specifically to break complex Axis encryption systems. Alan Turing's theoretical work and the practical engineering of Tommy Flowers produced a machine that could process 5,000 characters per second. The intelligence it provided — codenamed ULTRA — is estimated to have shortened the war by two years.",
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    imageLeft: true,
    year: '1943',
  },
]

// ── Sub-components ───────────────────────────────────────────────────────────

function InventionModal({ invention, onClose }: { invention: Invention; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div className="inv-backdrop" onClick={onClose}>
      <div className="inv-modal" ref={ref} onClick={e => e.stopPropagation()}>
        <div className="inv-modal-hero" style={{ backgroundImage: `url(${invention.image})` }}>
          <div className="inv-modal-hero-overlay">
            <span className="inv-modal-tag">{invention.category} · {invention.year}</span>
            <h2 className="inv-modal-title">{invention.title}</h2>
          </div>
          <button className="inv-modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="inv-modal-body">
          <p className="inv-modal-text">{invention.full}</p>
        </div>
      </div>
    </div>
  )
}

function InventionCard({ invention, onClick }: { invention: Invention; onClick: () => void }) {
  return (
    <div className="inv-card" onClick={onClick}>
      <div className="inv-card-img-wrap">
        <img src={invention.image} alt={invention.title} className="inv-card-img" />
      </div>
      <div className="inv-card-info">
        <h3 className="inv-card-number-title">
          <span className="inv-card-number">{invention.number}.</span> {invention.title}
        </h3>
        <p className="inv-card-short">{invention.short}</p>
        <span className="inv-card-cta">Read more →</span>
      </div>
    </div>
  )
}

function FeaturedBlock({ item }: { item: typeof featuredInventions[0] }) {
  return (
    <div className={`feat-block ${item.imageLeft ? 'feat-block--reverse' : ''}`}>
      <div className="feat-img-wrap">
        <div className="feat-img-frame">
          <img src={item.image} alt={item.title} className="feat-img" />
        </div>
      </div>
      <div className="feat-text">
        <span className="feat-tag">{item.tag} · {item.year}</span>
        <h3 className="feat-title">{item.title}</h3>
        <p className="feat-body">{item.body}</p>
      </div>
    </div>
  )
}

// ── Main Component ───────────────────────────────────────────────────────────

export default function Technical() {
  const navigate = useNavigate()
  const [activeInvention, setActiveInvention] = useState<Invention | null>(null)

  return (
    <div className="inv-page">

      <header className="inv-header">


          <button className="inv-search-btn" aria-label="Search" onClick={() => navigate('/')}>Back to Home</button>

      </header>

      <main className="inv-main">

        {/* Hero */}
        <section className="inv-hero">
          <span className="inv-hero-eyebrow">Technical Records 1939 — 1945</span>
          <h1 className="inv-hero-title">
            World War II <br />
            <span className="inv-hero-italic">Technical Innovations</span>
          </h1>
          <p className="inv-hero-sub">
            A minimal survey of the scientific breakthroughs that redefined military capabilities
            and modern industrial technology.
          </p>
        </section>

        {/* Military Engineering Grid */}
        <section className="inv-section">
          <div className="inv-section-header">
            <h2 className="inv-section-title">Military Engineering</h2>
            <div className="inv-section-rule" />
          </div>
          <div className="inv-grid">
            {militaryEngineering.map(inv => (
              <InventionCard key={inv.id} invention={inv} onClick={() => setActiveInvention(inv)} />
            ))}
          </div>
        </section>

        {/* Featured blocks */}
        <section className="inv-featured">
          {featuredInventions.map((item, i) => (
            <div key={item.id}>
              {i > 0 && <hr className="inv-thin-hr" />}
              <FeaturedBlock item={item} />
            </div>
          ))}
        </section>

      </main>

      {/* Footer */}
  
      {/* Modal */}
      {activeInvention && (
        <InventionModal invention={activeInvention} onClose={() => setActiveInvention(null)} />
      )}
    </div>
  )
}