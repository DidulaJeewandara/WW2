import './App.css'

const coalitions = [
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
				objective:
					"Strategic objective: Provide the industrial 'Arsenal of Democracy', liberation of Western Europe, and total victory in the Pacific theater.",
			},
			{
				country: 'United Kingdom',
				entry: 'Sept 1939',
				entryColor: '#4a9eff',
				leader: 'Winston Churchill',
				flag: 'https://flagcdn.com/w320/gb.png',
				objective:
					'Strategic objective: Immediate defense of the British Isles, protection of global trade routes, and total containment of Nazi expansion.',
			},
			{
				country: 'Soviet Union',
				entry: 'June 1941',
				entryColor: '#4a9eff',
				leader: 'Joseph Stalin',
				flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Soviet_Union.svg/320px-Flag_of_the_Soviet_Union.svg.png',
				objective:
					'Strategic objective: Defense of the motherland against Operation Barbarossa and a massive counter-offensive to capture Berlin.',
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
				objective:
					"Strategic objective: Establishment of 'Lebensraum' in Eastern Europe and total hegemony over the European continent through Blitzkrieg.",
			},
			{
				country: 'Imperial Japan',
				entry: 'Sept 1940',
				entryColor: '#c0392b',
				leader: 'Emperor Hirohito',
				flag: 'https://flagcdn.com/w320/jp.png',
				objective:
					"Strategic objective: Creation of the 'Greater East Asia Co-Prosperity Sphere' and naval dominance across the Pacific Ocean.",
			},
			{
				country: 'Italy',
				entry: 'June 1940',
				entryColor: '#c0392b',
				leader: 'Benito Mussolini',
				flag: 'https://flagcdn.com/w320/it.png',
				objective:
					"Strategic objective: Expansion of the Italian Empire in Africa and the Mediterranean, seeking to recreate a 'New Roman Empire'.",
			},
		],
	},
]

function CoalitionCard({
	country,
	entry,
	entryColor,
	leader,
	flag,
	objective,
}: {
	country: string
	entry: string
	entryColor: string
	leader: string
	flag: string
	objective: string
}) {
	return (
		<div className="coalition-card">
			<div className="coalition-flag-wrap">
				<img src={flag} alt={`${country} flag`} className="coalition-flag" />
			</div>
			<div className="coalition-card-body">
				<div className="coalition-card-header">
					<span className="coalition-country">{country}</span>
					<span
						className="coalition-entry"
						style={{ backgroundColor: entryColor }}
					>
						{entry}
					</span>
				</div>
				<p className="coalition-leader">Leader: {leader}</p>
				<p className="coalition-objective">{objective}</p>
				<button className="coalition-btn">Learn More Profile</button>
			</div>
		</div>
	)
}

function App() {
	return (
		<>
			<section className="first_page">
				<div className="Name">
					<h1 className="Topic">Echoes of the history</h1>
					<h2 className="Topic2">World War II</h2>
				</div>

				<div className="pages">
					<button
						className="timeline-btn"
						onClick={() => {
							document
								.getElementById('timeline-section')
								?.scrollIntoView({ behavior: 'smooth', block: 'start' })
						}}
					>
						Timeline
					</button>
					<button
						className="countries-btn"
						onClick={() => {
							document.getElementById('parties')?.scrollIntoView({
								behavior: 'smooth',
								block: 'start',
							})
						}}
					>
						Coalitions
					</button>
					<button className="theaters-btn" onClick={() => {}}>
						Theaters
					</button>
				</div>
			</section>

			{/* Timeline */}
			<section id="timeline-section" className="timeline_page">
				<div className="timeline_inner">
					<h2 className="tl-main-title">Chronicle of Conflict</h2>
					<div className="timeline">
						{[
							{
								year: '1939',
								title: 'The Invasion of Poland',
								text: 'Germany invades Poland on September 1st, triggering declarations of war by Britain and France.',
							},
							{
								year: '1941',
								title: 'Pearl Harbor & Barbarossa',
								text: 'Japan attacks Pearl Harbor; Germany launches Operation Barbarossa against the Soviet Union.',
							},
							{
								year: '1944',
								title: 'D-Day: Operation Overlord',
								text: 'Allied forces launch the largest amphibious assault in history on the beaches of Normandy.',
							},
							{
								year: '1945',
								title: 'The Dawn of Peace',
								text: 'Victory in Europe and the Pacific; the war ends and the global order is reshaped.',
							},
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

			{/* Coalitions / Parties */}
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
									<CoalitionCard key={f.country} {...f} />
								))}
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	)
}

export default App