import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Technical from './components/technnical.tsx'


interface Theater {
	label: string
	name: string
	image: string
	period: string
	overview: string
	keyBattles: string[]
	commanders: { allies: string[]; axis: string[] }
	outcome: string
}

interface FactionProfile {
  country: string
  entry: string
  entryColor: string
  leader: string
  flag: string
  objective: string
  // new detailed fields
  capital: string
  population: string
  military: string
  ideology: string
  casualties: string
  keyEvents: string[]
}

type Coalition = {
  name: string
  icon: string
  factions: FactionProfile[]
}

const coalitions: Coalition[] = [
    {
        name: 'The Allied Powers',
        icon: '👥',
        factions: [
            {
                country: 'United States',
                entry: 'Dec 1941',
                entryColor: '#4a9eff',
                leader: 'Franklin D. Roosevelt',
                flag: 'https://flagcdn.com/w320/us.png',
                objective: "Provide the industrial 'Arsenal of Democracy', liberation of Western Europe, and total victory in the Pacific theater.",
                capital: "Washington, D.C.",
                population: "132 million",
                military: "16 million",
                ideology: "Democracy",
                casualties: "418,500",
                keyEvents: [
                    "Pearl Harbor attack",
                    "Atomic bomb creation",
                    "D-Day landings"
                ]
            },
            {
                country: 'United Kingdom',
                entry: 'Sept 1939',
                entryColor: '#4a9eff',
                leader: 'Winston Churchill',
                flag: 'https://flagcdn.com/w320/gb.png',
                objective: "Immediate defense of the British Isles, protection of global trade routes, and containment of Nazi expansion.",
                capital: "London",
                population: "47 million",
                military: "5.9 million",
                ideology: "Constitutional Monarchy",
                casualties: "450,900",
                keyEvents: [
                    "Battle of Britain",
                    "Evacuation at Dunkirk",
                    "Operation Overlord"
                ]
            },
            {
                country: 'Soviet Union',
                entry: 'June 1941',
                entryColor: '#4a9eff',
                leader: 'Joseph Stalin',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Soviet_Union.svg/320px-Flag_of_the_Soviet_Union.svg.png',
                objective: "Defense against Operation Barbarossa and counter-offensive to capture Berlin.",
                capital: "Moscow",
                population: "195 million",
                military: "34.5 million",
                ideology: "Communism",
                casualties: "24,000,000",
                keyEvents: [
                    "Battle of Stalingrad",
                    "Siege of Leningrad",
                    "Battle of Kursk"
                ]
            },
            {
                country: 'France',
                entry: 'Sept 1939',
                entryColor: '#4a9eff',
                leader: 'Charles de Gaulle',
                flag: 'https://flagcdn.com/w320/fr.png',
                objective: "Defense against German invasion, Free French Forces' contribution to liberation.",
                capital: "Paris",
                population: "41 million",
                military: "5 million",
                ideology: "Republic",
                casualties: "567,600",
                keyEvents: [
                    "Fall of France",
                    "French Resistance",
                    "Liberation of Paris"
                ]
            },
        ],
    },
    {
        name: 'The Axis Powers',
        icon: '🔴',
        factions: [
            {
                country: 'Germany',
                entry: 'Sept 1939',
                entryColor: '#c0392b',
                leader: 'Adolf Hitler',
                flag: 'https://flagcdn.com/w320/de.png',
                objective: "Establishment of 'Lebensraum' and hegemony over Europe through Blitzkrieg.",
                capital: "Berlin",
                population: "70 million",
                military: "18 million",
                ideology: "Fascism",
                casualties: "7,400,000",
                keyEvents: [
                    "Invasion of Poland",
                    "Battle of the Bulge",
                    "Fall of Berlin"
                ]
            },
            {
                country: 'Imperial Japan',
                entry: 'Sept 1940',
                entryColor: '#c0392b',
                leader: 'Emperor Hirohito',
                flag: 'https://flagcdn.com/w320/jp.png',
                objective: "Creation of the 'Greater East Asia Co-Prosperity Sphere' and naval dominance.",
                capital: "Tokyo",
                population: "73 million",
                military: "6 million",
                ideology: "Imperial Monarchy",
                casualties: "2,500,000",
                keyEvents: [
                    "Attack on Pearl Harbor",
                    "Battle of Midway",
                    "Atomic bombings"
                ]
            },
            {
                country: 'Italy',
                entry: 'June 1940',
                entryColor: '#c0392b',
                leader: 'Benito Mussolini',
                flag: 'https://flagcdn.com/w320/it.png',
                objective: "Expansion in Africa and the Mediterranean, seeking a 'New Roman Empire'.",
                capital: "Rome",
                population: "44 million",
                military: "4.5 million",
                ideology: "Fascism",
                casualties: "457,000",
                keyEvents: [
                    "Invasion of Ethiopia",
                    "North African Campaign",
                    "Mussolini overthrown"
                ]
            },
            {
                country: 'Hungary',
                entry: 'Nov 1940',
                entryColor: '#c0392b',
                leader: 'Miklós Horthy',
                flag: 'https://flagcdn.com/w320/hu.png',
                objective: "Territorial expansion and support for Axis operations.",
                capital: "Budapest",
                population: "9 million",
                military: "1.5 million",
                ideology: "Regency",
                casualties: "580,000",
                keyEvents: [
                    "Invasion of Yugoslavia",
                    "Battle of Stalingrad",
                    "Horthy removed from power"
                ]
            },
        ],
	},
]


const theaters: Theater[] = [
	{
		label: 'WESTERN FRONT',
		name: 'European Theater',
		image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80',
		period: '1939 – 1945',
		overview:
			'The European Theater was the primary arena of World War II, stretching across Western and Central Europe. It began with Germany\'s Blitzkrieg invasions and culminated in the Allied liberation of occupied territories, the fall of Berlin, and the unconditional surrender of Nazi Germany on May 8, 1945 — V-E Day.',
		keyBattles: [
			'Battle of France (1940)',
			'Battle of Britain (1940)',
			'Operation Overlord / D-Day (1944)',
			'Battle of the Bulge (1944–45)',
			'Fall of Berlin (1945)',
		],
		commanders: {
			allies: ['Dwight D. Eisenhower', 'Bernard Montgomery', 'Charles de Gaulle'],
			axis: ['Erwin Rommel', 'Gerd von Rundstedt', 'Adolf Hitler'],
		},
		outcome:
			'Total Allied victory. Nazi Germany surrendered unconditionally on May 8, 1945. The war in Europe ended, leading to the division of Germany and the beginning of the Cold War era.',
	},
	{
		label: 'OCEANIC CONFLICT',
		name: 'Pacific Theater',
		image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&q=80',
		period: '1941 – 1945',
		overview:
			'The Pacific Theater spanned the vast Pacific Ocean and parts of Asia. Triggered by Japan\'s attack on Pearl Harbor in December 1941, it became a brutal island-hopping campaign as Allied forces pushed back against Imperial Japan\'s expansive empire across thousands of miles of ocean.',
		keyBattles: [
			'Attack on Pearl Harbor (1941)',
			'Battle of Midway (1942)',
			'Guadalcanal Campaign (1942–43)',
			'Battle of Leyte Gulf (1944)',
			'Battle of Okinawa (1945)',
		],
		commanders: {
			allies: ['Douglas MacArthur', 'Chester Nimitz', 'William Halsey'],
			axis: ['Isoroku Yamamoto', 'Hideki Tojo', 'Tomoyuki Yamashita'],
		},
		outcome:
			'Allied victory following the atomic bombings of Hiroshima and Nagasaki. Japan surrendered on September 2, 1945 — V-J Day — officially ending World War II.',
	},
	{
		label: 'DESERT WAR',
		name: 'African Theater',
		image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80',
		period: '1940 – 1943',
		overview:"The African Theater of World War II (1940–1943) was a critical, five-year strategic struggle primarily fought in North Africa for control of the Suez Canal, Mediterranean shipping lanes, and Middle Eastern oil. It consisted of major campaigns in the Western Desert (Egypt/Libya), the invasion of Ethiopia/East Africa, and the Allied landings in Morocco/Algeria (Operation Torch). The Allied victory, culminating in the surrender of 250,000 Axis troops in Tunisia, was a major turning point that allowed the subsequent invasion of Italy and opened the Mediterranean for Allied shipping.",
		keyBattles: [
			'Battle of El Alamein (1942)',
			'Operation Torch (1942)',
			'Battle of Kasserine Pass (1943)',
			'Fall of Tobruk (1942)',
			'Tunisia Campaign (1943)',
		],
		commanders: {
			allies: ['Bernard Montgomery', 'Harold Alexander', 'Dwight D. Eisenhower'],
			axis: ['Erwin Rommel (The Desert Fox)', 'Giovanni Messe'],
		},
		outcome:
			'Allied victory. The Axis forces in North Africa surrendered in May 1943, giving the Allies control of the Mediterranean and a launching point for the invasion of Italy.',
	},
	{
		label: 'TOTAL WAR',
		name: 'Eastern Front',
		image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=600&q=80',
		period: '1941 – 1945',
		overview:'The Eastern Front was the largest and deadliest theater of World War II, spanning from June 22, 1941, to May 9, 1945. Fought primarily between Nazi Germany and the Soviet Union, this "war of annihilation" involved massive scale, extreme brutality, and immense loss of life. It served as the decisive theater of the European war, leading to the collapse of the Third Reich and the rise of the Soviet Union.The battle of starlinguard can be considered as the turning point for the allied forces in the eastern front, as it marked the first major defeat of the German army and boosted the morale of the Soviet forces. The battle of Kursk was another significant battle that resulted in a decisive victory for the Soviet Union and marked the end of German offensive operations on the Eastern Front.	',
		keyBattles: [
			'Operation Barbarossa (1941)',
			'Siege of Leningrad (1941–44)',
			'Battle of Stalingrad (1942–43)',
			'Battle of Kursk (1943)',
			'Operation Bagration (1944)',
		],
		commanders: {
			allies: ['Georgy Zhukov', 'Konstantin Rokossovsky', 'Ivan Konev'],
			axis: ['Wilhelm von Leeb', 'Fedor von Bock', 'Erich von Manstein'],
		},
		outcome:
			'Soviet victory. The Red Army drove German forces back from the depths of Russia all the way to Berlin. The Eastern Front\'s conclusion directly led to Germany\'s total defeat.',
	},

	{label:'atlantic ocean fight',name:'Atlantic Theater',image:"https://images.unsplash.com/photo-1565192483566-5cbbe39a76d2?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",period:'1939 – 1945',overview:'The Atlantic Theater of World War II was a critical maritime battleground where the Allies and Axis powers fought for control of the Atlantic Ocean. It involved intense naval warfare, including the Battle of the Atlantic, where German U-boats targeted Allied shipping to disrupt supply lines. The Allies implemented convoy systems and advanced anti-submarine tactics to counter the U-boat threat, ultimately securing vital supply routes and contributing to the overall Allied victory in Europe.',keyBattles:['Battle of the Atlantic (1939–1945)','Operation Drumbeat (1942)','Convoy PQ 17 (1942)','Battle of Convoy HX 229 (1943)','Operation Neptune (1944)'],commanders:{allies:['Max Horton','Andrew Cunningham','Ernest King'],axis:['Karl Dönitz','Erich Raeder']},outcome:'Allied victory. The Allies successfully protected their shipping lanes, ensuring the flow of troops and supplies necessary for the European campaigns. The defeat of the German U-boat threat was a crucial factor in securing victory in Europe.'},

	
]

function CoalitionCard({
  country,
  entry,
  entryColor,
  leader,
  flag,
  objective,
  onLearnMore
}: {
  country: string
  entry: string
  entryColor: string
  leader: string
  flag: string
  objective: string
  onLearnMore: () => void 
}) {
	return (
		<div className="coalition-card">
			<div className="coalition-flag-wrap">
				<img src={flag} alt={`${country} flag`} className="coalition-flag" />
			</div>
			<div className="coalition-card-body">
				<div className="coalition-card-header">
					<span className="coalition-country">{country}</span>
					<span className="coalition-entry" style={{ backgroundColor: entryColor }}>{entry}</span>
				</div>
				<p className="coalition-leader">Leader: {leader}</p>
				<p className="coalition-objective">{objective}</p>
				<button className="coalition-btn" onClick={onLearnMore}>Learn More Profile</button> {/* 👈 add onClick */}
			</div>
		</div>
	)
}

function TheaterModal({ theater, onClose }: { theater: Theater; onClose: () => void }) {
	return (
		<div className="modal-backdrop" onClick={onClose}>
			<div className="modal-box" onClick={(e) => e.stopPropagation()}>
				{/* Header image */}
				<div className="modal-hero" style={{ backgroundImage: `url(${theater.image})` }}>
					<div className="modal-hero-overlay">
						<span className="modal-label">{theater.label}</span>
						<h2 className="modal-theater-name">{theater.name}</h2>
						<span className="modal-period">{theater.period}</span>
					</div>
					<button className="modal-close" onClick={onClose}>✕</button>
				</div>

				{/* Body */}
				<div className="modal-body">
					<section className="modal-section">
						<h4 className="modal-section-title">Overview</h4>
						<p className="modal-text">{theater.overview}</p>
					</section>

					<section className="modal-section">
						<h4 className="modal-section-title">Key Battles</h4>
						<ul className="modal-battles">
							{theater.keyBattles.map((b) => (
								<li key={b} className="modal-battle-item">
									<span className="modal-battle-dot" />
									{b}
								</li>
							))}
						</ul>
					</section>

					<section className="modal-section modal-commanders">
						<div>
							<h4 className="modal-section-title allied">Allied Commanders</h4>
							{theater.commanders.allies.map((c) => (
								<p key={c} className="modal-commander allied-name">{c}</p>
							))}
						</div>
						<div>
							<h4 className="modal-section-title axis">Axis Commanders</h4>
							{theater.commanders.axis.map((c) => (
								<p key={c} className="modal-commander axis-name">{c}</p>
							))}
						</div>
					</section>

					<section className="modal-section modal-outcome-section">
						<h4 className="modal-section-title">Outcome</h4>
						<p className="modal-outcome">{theater.outcome}</p>
					</section>
				</div>
			</div>
		</div>
	)
}

function ProfileModal({ profile, onClose }: { profile: FactionProfile; onClose: () => void }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box profile-modal-box" onClick={(e) => e.stopPropagation()}>
        
        {/* Hero */}
        <div className="profile-modal-hero">
          <img src={profile.flag} alt={profile.country} className="profile-modal-flag" />
          <div className="profile-modal-hero-info">
            <span className="profile-modal-entry" style={{ backgroundColor: profile.entryColor }}>
              Entered: {profile.entry}
            </span>
            <h2 className="profile-modal-country">{profile.country}</h2>
            <p className="profile-modal-leader">🎖 {profile.leader}</p>
            <p className="profile-modal-ideology">{profile.ideology}</p>
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        {/* Body */}
        <div className="modal-body">

          {/* Stats row */}
          <div className="profile-stats-row">
            <div className="profile-stat">
              <span className="profile-stat-label">Capital</span>
              <span className="profile-stat-value">{profile.capital}</span>
            </div>
            <div className="profile-stat">
              <span className="profile-stat-label">Population</span>
              <span className="profile-stat-value">{profile.population}</span>
            </div>
            <div className="profile-stat">
              <span className="profile-stat-label">Military Size</span>
              <span className="profile-stat-value">{profile.military}</span>
            </div>
            <div className="profile-stat">
              <span className="profile-stat-label">Casualties</span>
              <span className="profile-stat-value">{profile.casualties}</span>
            </div>
          </div>

          {/* Objective */}
          <section className="modal-section">
            <h4 className="modal-section-title">Strategic Objective</h4>
            <p className="modal-text">{profile.objective}</p>
          </section>

          {/* Key Events */}
          <section className="modal-section">
            <h4 className="modal-section-title">Key Events</h4>
            <ul className="modal-battles">
              {profile.keyEvents.map((e) => (
                <li key={e} className="modal-battle-item">
                  <span className="modal-battle-dot" />
                  {e}
                </li>
              ))}
            </ul>
          </section>

        </div>
      </div>
    </div>
  )
}

function TheaterCard({ theater, onClick }: { theater: Theater; onClick: () => void }) {
	return (
		<div className="theater-card" onClick={onClick}>
			<img src={theater.image} alt={theater.name} className="theater-card-img" />
			<div className="theater-card-overlay">
				<span className="theater-label">{theater.label}</span>
				<h3 className="theater-name">{theater.name}</h3>
			</div>
		</div>
	)
}

function MainAppContent() {
	const [activeTheater, setActiveTheater] = useState<Theater | null>(null)
	const[activeProfile,setActiveProfile]=useState<FactionProfile|null>(null)
	const navigate = useNavigate()

	return (
		<>
			<section className="first_page">
				<div className="Name">
					<h1 className="Topic">Echoes of the history</h1>
					<h2 className="Topic2">World War II</h2>
				</div>
				<div className="pages">
					<button className="timeline-btn" onClick={() => document.getElementById('timeline-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Timeline</button>
					<button className="countries-btn" onClick={() => document.getElementById('parties')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Coalitions</button>
					<button className="theaters-btn" onClick={() => document.getElementById('Theaters')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Theaters</button>
	                <button className="technical-btn" onClick={()=>navigate("./technnical")}>Inventions</button>			
				</div>
			</section>

			{/* Timeline */}
			<section id="timeline-section" className="timeline_page">
				<div className="timeline_inner">
					<h2 className="tl-main-title">Chronicle of Conflict</h2>
					<div className="timeline">
						{[
							{ year: '1939', title: 'The Invasion of Poland', text: 'Germany invades Poland on September 1st, triggering declarations of war by Britain and France.' },
							{ year: '1940', title: 'The Fall of France', text: 'Germany invades France, leading to the fall of Paris and the establishment of the Vichy regime.' },
							{ year: '1941', title: 'Pearl Harbor & Barbarossa', text: 'Japan attacks Pearl Harbor; Germany launches Operation Barbarossa against the Soviet Union.' },
							{ year: '1944', title: 'D-Day: Operation Overlord', text: 'Allied forces launch the largest amphibious assault in history on the beaches of Normandy.' },
							{ year: '1945', title: 'The Dawn of Peace', text: 'Victory in Europe and the Pacific; the war ends and the global order is reshaped.' },
							{year:"1947",title:'Droping the atomic bomb',text:'The United States drops atomic bombs on Hiroshima and Nagasaki, leading to Japan\'s surrender and the end of World War II.'},

						].map((item, idx) => {
							const side = idx % 2 === 0 ? 'left' : 'right'
							return (
								<div key={item.year} className={`timeline-item ${side}`}>
									{side === 'left' && <div className="content"><h3 className="year">{item.year}</h3><h4 className="title">{item.title}</h4><p className="desc">{item.text}</p></div>}
									<div className="center"><div className="dot" /></div>
									{side === 'right' && <div className="content"><h3 className="year">{item.year}</h3><h4 className="title">{item.title}</h4><p className="desc">{item.text}</p></div>}
								</div>
							)
						})}
					</div>
				</div>
			</section>

			{/* Coalitions */}
			<section id="parties" className="parties_page">
				<div className="parties_inner">
					<h2 className="parties-title">The Global Coalition</h2>
					{coalitions.map((coalition) => (
						<div key={coalition.name} className="coalition-group">
							<div className="coalition-group-header">
								<span className="coalition-group-icon">{coalition.icon}</span>
								<h3 className="coalition-group-name">{coalition.name}</h3>
							</div>
							<div className="coalition-cards-row">
								{coalition.factions.map((f) => (
									<CoalitionCard
									  key={f.country}
									  {...f}
									  onLearnMore={() => setActiveProfile(f)}  // 👈 add this
									/>
								))}
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Theaters */}
			<section id="Theaters" className="theaters_page">
				<div className="theaters_inner">
					<h2 className="theaters-title">Key Theaters of War</h2>
					<div className="theaters-cards-row">
						{theaters.map((t) => (
							<TheaterCard key={t.name} theater={t} onClick={() => setActiveTheater(t)} />
						))}
					</div>
				</div>
			</section>

			{/* Modal */}
			{activeTheater && (
				<TheaterModal theater={activeTheater} onClose={() => setActiveTheater(null)} />
			)}

			{/* Profile Modal */}
			{activeProfile && (                                    // 👈 add this block
  <ProfileModal profile={activeProfile} onClose={() => setActiveProfile(null)} />
)}
		</>
	)
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainAppContent />} />
        <Route path="/technnical" element={<Technical />} />
      </Routes>
    </Router>
  )
}
export default App
