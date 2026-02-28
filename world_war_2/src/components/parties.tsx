import { useState } from 'react'import './App.css'const coalitions = [	{		name: 'The Allied Powers',		icon: '👥',		factions: [			{				country: 'United States', entry: 'Dec 1941', entryColor: '#4a9eff',				leader: 'Franklin D. Roosevelt', flag: 'https://flagcdn.com/w320/us.png',				objective: "Strategic objective: Provide the industrial 'Arsenal of Democracy', liberation of Western Europe, and total victory in the Pacific theater.",			},			{				country: 'United Kingdom', entry: 'Sept 1939', entryColor: '#4a9eff',				leader: 'Winston Churchill', flag: 'https://flagcdn.com/w320/gb.png',				objective: 'Strategic objective: Immediate defense of the British Isles, protection of global trade routes, and total containment of Nazi expansion.',			},			{				country: 'Soviet Union', entry: 'June 1941', entryColor: '#4a9eff',				leader: 'Joseph Stalin', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Soviet_Union.svg/320px-Flag_of_the_Soviet_Union.svg.png',				objective: 'Strategic objective: Defense of the motherland against Operation Barbarossa and a massive counter-offensive to capture Berlin.',			},			{				country: 'France', entry: 'Sept 1939', entryColor: '#4a9eff',				leader: 'Charles de Gaulle', flag: 'https://flagcdn.com/w320/fr.png',				objective: "Strategic objective: Initial defense against German invasion, followed by the Free French Forces' contribution to the liberation of France and victory in Europe.",			},		],	},	{		name: 'The Axis Powers',		icon: '🔴',		factions: [			{				country: 'Germany', entry: 'Sept 1939', entryColor: '#c0392b',				leader: 'Adolf Hitler', flag: 'https://flagcdn.com/w320/de.png',				objective: "Strategic objective: Establishment of 'Lebensraum' in Eastern Europe and total hegemony over the European continent through Blitzkrieg.",			},			{				country: 'Imperial Japan', entry: 'Sept 1940', entryColor: '#c0392b',				leader: 'Emperor Hirohito', flag: 'https://flagcdn.com/w320/jp.png',				objective: "Strategic objective: Creation of the 'Greater East Asia Co-Prosperity Sphere' and naval dominance across the Pacific Ocean.",			},			{				country: 'Italy', entry: 'June 1940', entryColor: '#c0392b',				leader: 'Benito Mussolini', flag: 'https://flagcdn.com/w320/it.png',				objective: "Strategic objective: Expansion of the Italian Empire in Africa and the Mediterranean, seeking to recreate a 'New Roman Empire'.",			},			{				country: 'Hungary', entry: 'Nov 1940', entryColor: '#c0392b',				leader: 'Miklós Horthy', flag: 'https://flagcdn.com/w320/hu.png',				objective: 'Strategic objective: Territorial expansion into neighboring regions and support for Axis operations.',			},		],	},]interface Theater {	label: string	name: string	image: string	period: string	overview: string	keyBattles: string[]	commanders: { allies: string[]; axis: string[] }	outcome: string}const theaters: Theater[] = [	{		label: 'WESTERN FRONT',		name: 'European Theater',		image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80',		period: '1939 – 1945',		overview:			'The European Theater was the primary arena of World War II, stretching across Western and Central Europe. It began with Germany\'s Blitzkrieg invasions and culminated in the Allied liberation of occupied territories, the fall of Berlin, and the unconditional surrender of Nazi Germany on May 8, 1945 — V-E Day.',		keyBattles: [			'Battle of France (1940)',			'Battle of Britain (1940)',			'Operation Overlord / D-Day (1944)',			'Battle of the Bulge (1944–45)',			'Fall of Berlin (1945)',		],		commanders: {			allies: ['Dwight D. Eisenhower', 'Bernard Montgomery', 'Charles de Gaulle'],			axis: ['Erwin Rommel', 'Gerd von Rundstedt', 'Adolf Hitler'],		},		outcome:			'Total Allied victory. Nazi Germany surrendered unconditionally on May 8, 1945. The war in Europe ended, leading to the division of Germany and the beginning of the Cold War era.',	},	{		label: 'OCEANIC CONFLICT',		name: 'Pacific Theater',		image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&q=80',		period: '1941 – 1945',		overview:			'The Pacific Theater spanned the vast Pacific Ocean and parts of Asia. Triggered by Japan\'s attack on Pearl Harbor in December 1941, it became a brutal island-hopping campaign as Allied forces pushed back against Imperial Japan\'s expansive empire across thousands of miles of ocean.',		keyBattles: [			'Attack on Pearl Harbor (1941)',			'Battle of Midway (1942)',			'Guadalcanal Campaign (1942–43)',			'Battle of Leyte Gulf (1944)',			'Battle of Okinawa (1945)',		],		commanders: {			allies: ['Douglas MacArthur', 'Chester Nimitz', 'William Halsey'],			axis: ['Isoroku Yamamoto', 'Hideki Tojo', 'Tomoyuki Yamashita'],		},		outcome:			'Allied victory following the atomic bombings of Hiroshima and Nagasaki. Japan surrendered on September 2, 1945 — V-J Day — officially ending World War II.',	},	{		label: 'DESERT WAR',		name: 'African Theater',		image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80',		period: '1940 – 1943',		overview:			'The North African Campaign was a series of battles fought across the deserts of Libya, Egypt, Tunisia, Algeria, and Morocco. Control of the Suez Canal and Mediterranean supply lines made Africa strategically vital. The theater was characterized by rapid mechanized warfare across vast desert terrain.',		keyBattles: [			'Battle of El Alamein (1942)',			'Operation Torch (1942)',			'Battle of Kasserine Pass (1943)',			'Fall of Tobruk (1942)',			'Tunisia Campaign (1943)',		],		commanders: {			allies: ['Bernard Montgomery', 'Harold Alexander', 'Dwight D. Eisenhower'],			axis: ['Erwin Rommel (The Desert Fox)', 'Giovanni Messe'],		},		outcome:			'Allied victory. The Axis forces in North Africa surrendered in May 1943, giving the Allies control of the Mediterranean and a launching point for the invasion of Italy.',	},	{		label: 'TOTAL WAR',		name: 'Eastern Front',		image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=600&q=80',		period: '1941 – 1945',		overview:			'The Eastern Front was the largest and deadliest theater of World War II, involving over 30 million military and civilian deaths. Germany\'s Operation Barbarossa launched a massive three-pronged invasion of the Soviet Union in June 1941. The titanic struggle that followed shaped the entire course of the war.',		keyBattles: [			'Operation Barbarossa (1941)',			'Siege of Leningrad (1941–44)',			'Battle of Stalingrad (1942–43)',			'Battle of Kursk (1943)',			'Operation Bagration (1944)',		],		commanders: {			allies: ['Georgy Zhukov', 'Konstantin Rokossovsky', 'Ivan Konev'],			axis: ['Wilhelm von Leeb', 'Fedor von Bock', 'Erich von Manstein'],		},		outcome:			'Soviet victory. The Red Army drove German forces back from the depths of Russia all the way to Berlin. The Eastern Front\'s conclusion directly led to Germany\'s total defeat.',	},]function CoalitionCard({ country, entry, entryColor, leader, flag, objective }: {	country: string; entry: string; entryColor: string; leader: string; flag: string; objective: string}) {	return (		<div className="coalition-card">			<div className="coalition-flag-wrap">				<img src={flag} alt={`${country} flag`} className="coalition-flag" />			</div>			<div className="coalition-card-body">				<div className="coalition-card-header">					<span className="coalition-country">{country}</span>					<span className="coalition-entry" style={{ backgroundColor: entryColor }}>{entry}</span>				</div>				<p className="coalition-leader">Leader: {leader}</p>				<p className="coalition-objective">{objective}</p>				<button className="coalition-btn">Learn More Profile</button>			</div>		</div>	)}function TheaterModal({ theater, onClose }: { theater: Theater; onClose: () => void }) {	return (		<div className="modal-backdrop" onClick={onClose}>			<div className="modal-box" onClick={(e) => e.stopPropagation()}>				{/* Header image */}				<div className="modal-hero" style={{ backgroundImage: `url(${theater.image})` }}>					<div className="modal-hero-overlay">						<span className="modal-label">{theater.label}</span>						<h2 className="modal-theater-name">{theater.name}</h2>						<span className="modal-period">{theater.period}</span>					</div>					<button className="modal-close" onClick={onClose}>✕</button>				</div>				{/* Body */}				<div className="modal-body">					<section className="modal-section">						<h4 className="modal-section-title">Overview</h4>						<p className="modal-text">{theater.overview}</p>					</section>					<section className="modal-section">						<h4 className="modal-section-title">Key Battles</h4>						<ul className="modal-battles">							{theater.keyBattles.map((b) => (								<li key={b} className="modal-battle-item">									<span className="modal-battle-dot" />									{b}								</li>							))}						</ul>					</section>					<section className="modal-section modal-commanders">						<div>							<h4 className="modal-section-title allied">Allied Commanders</h4>							{theater.commanders.allies.map((c) => (								<p key={c} className="modal-commander allied-name">{c}</p>							))}						</div>						<div>							<h4 className="modal-section-title axis">Axis Commanders</h4>							{theater.commanders.axis.map((c) => (								<p key={c} className="modal-commander axis-name">{c}</p>							))}						</div>					</section>					<section className="modal-section modal-outcome-section">						<h4 className="modal-section-title">Outcome</h4>						<p className="modal-outcome">{theater.outcome}</p>					</section>				</div>			</div>		</div>	)}function TheaterCard({ theater, onClick }: { theater: Theater; onClick: () => void }) {	return (		<div className="theater-card" onClick={onClick}>			<img src={theater.image} alt={theater.name} className="theater-card-img" />			<div className="theater-card-overlay">				<span className="theater-label">{theater.label}</span>				<h3 className="theater-name">{theater.name}</h3>			</div>		</div>	)}function App() {	const [activeTheater, setActiveTheater] = useState<Theater | null>(null)	return (		<>			<section className="first_page">				<div className="Name">					<h1 className="Topic">Echoes of the history</h1>					<h2 className="Topic2">World War II</h2>				</div>				<div className="pages">					<button className="timeline-btn" onClick={() => document.getElementById('timeline-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Timeline</button>					<button className="countries-btn" onClick={() => document.getElementById('parties')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Coalitions</button>					<button className="theaters-btn" onClick={() => document.getElementById('Theaters')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Theaters</button>				</div>			</section>			{/* Timeline */}			<section id="timeline-section" className="timeline_page">				<div className="timeline_inner">					<h2 className="tl-main-title">Chronicle of Conflict</h2>					<div className="timeline">						{[							{ year: '1939', title: 'The Invasion of Poland', text: 'Germany invades Poland on September 1st, triggering declarations of war by Britain and France.' },							{ year: '1941', title: 'Pearl Harbor & Barbarossa', text: 'Japan attacks Pearl Harbor; Germany launches Operation Barbarossa against the Soviet Union.' },							{ year: '1944', title: 'D-Day: Operation Overlord', text: 'Allied forces launch the largest amphibious assault in history on the beaches of Normandy.' },							{ year: '1945', title: 'The Dawn of Peace', text: 'Victory in Europe and the Pacific; the war ends and the global order is reshaped.' },						].map((item, idx) => {							const side = idx % 2 === 0 ? 'left' : 'right'							return (								<div key={item.year} className={`timeline-item ${side}`}>									{side === 'left' && <div className="content"><h3 className="year">{item.year}</h3><h4 className="title">{item.title}</h4><p className="desc">{item.text}</p></div>}									<div className="center"><div className="dot" /></div>									{side === 'right' && <div className="content"><h3 className="year">{item.year}</h3><h4 className="title">{item.title}</h4><p className="desc">{item.text}</p></div>}								</div>							)						})}					</div>				</div>			</section>			{/* Coalitions */}			<section id="parties" className="parties_page">				<div className="parties_inner">					<h2 className="parties-title">The Global Coalition</h2>					{coalitions.map((coalition) => (						<div key={coalition.name} className="coalition-group">							<div className="coalition-group-header">								<span className="coalition-group-icon">{coalition.icon}</span>								<h3 className="coalition-group-name">{coalition.name}</h3>							</div>							<div className="coalition-cards-row">								{coalition.factions.map((f) => <CoalitionCard key={f.country} {...f} />)}							</div>						</div>					))}				</div>			</section>			{/* Theaters */}			<section id="Theaters" className="theaters_page">				<div className="theaters_inner">					<h2 className="theaters-title">Key Theaters of War</h2>					<div className="theaters-cards-row">						{theaters.map((t) => (							<TheaterCard key={t.name} theater={t} onClick={() => setActiveTheater(t)} />						))}					</div>				</div>			</section>			{/* Modal */}			{activeTheater && (				<TheaterModal theater={activeTheater} onClose={() => setActiveTheater(null)} />			)}		</>	)}export default App

/* Theaters page */
.theaters_page {
  background: #0a1a0e;
  min-height: 100vh;
  padding: 80px 24px 120px;
  position: relative;
  overflow: hidden;
}

.theaters_inner {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  padding: 0 20px;
}

.theaters-title {
  font-family: 'Cinzel', 'Georgia', serif;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  color: #bfeecb;
  margin-bottom: 48px;
  letter-spacing: 0.04em;
  text-align: center;
}

/* Theater cards grid */
.theaters-cards-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin: 0 auto;
  width: 100%;
}

.theater-card {
  position: relative;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

.theater-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0, 255, 106, 0.2);
}

.theater-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.theater-card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.7));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;
  color: white;
}

.theater-label {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: #00ff6a;
  text-transform: uppercase;
}

.theater-name {
  font-size: 1.4rem;
  font-weight: 700;
  margin: 8px 0 0 0;
  font-family: 'Cinzel', 'Georgia', serif;
}

/* Modal styles */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
}

.modal-box {
  background: #1a1a1a;
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.modal-hero {
  height: 300px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.modal-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.8));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 32px;
  color: white;
}

.modal-label {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: #00ff6a;
  text-transform: uppercase;
}

.modal-theater-name {
  font-size: 2rem;
  font-weight: 700;
  margin: 8px 0 0 0;
  font-family: 'Cinzel', 'Georgia', serif;
}

.modal-period {
  font-size: 0.9rem;
  color: #ccc;
  margin-top: 4px;
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.modal-close:hover {
  background: rgba(0, 0, 0, 0.9);
}

.modal-body {
  padding: 32px;
  color: #bfeecb;
}

.modal-section {
  margin-bottom: 32px;
}

.modal-section-title {
  font-family: 'Cinzel', 'Georgia', serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #00ff6a;
  margin: 0 0 16px 0;
  letter-spacing: 0.05em;
}

.modal-text {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #bfeecb;
}

.modal-battles {
  list-style: none;
  padding: 0;
  margin: 0;
}

.modal-battle-item {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 0.95rem;
  color: #bfeecb;
}

.modal-battle-dot {
  width: 8px;
  height: 8px;
  background: #00ff6a;
  border-radius: 50%;
  flex-shrink: 0;
}

.modal-commanders {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

.modal-commander {
  margin: 8px 0;
  font-size: 0.9rem;
  color: #bfeecb;
}

.modal-outcome-section {
  border-top: 1px solid rgba(0, 255, 106, 0.2);
  padding-top: 24px;
}

.modal-outcome {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #bfeecb;
  font-style: italic;
}