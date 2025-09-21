import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Atom,
  BrainCircuit,
  Compass,
  Layers,
  Lightbulb,
  LineChart,
  Microscope,
  Network,
  Rocket,
  Sparkles,
  Target,
  Workflow,
} from 'lucide-react'
import './App.css'

const heroModes = [
  {
    id: 'efficiency',
    label: 'Efficiency Launch',
    description:
      'Streamline your entire funnel with automation pods, live dashboards, and AI copilots built for momentum.',
    metrics: [
      { label: 'Launch acceleration', value: '3.5x faster' },
      { label: 'Ops reclaimed per week', value: '42 hrs' },
      { label: 'Automation coverage', value: '87%' },
    ],
  },
  {
    id: 'identity',
    label: 'Identity Nebula',
    description:
      'Craft a living brand system with modular storytelling, persona constellations, and adaptive visual language.',
    metrics: [
      { label: 'Persona clarity', value: '+260%' },
      { label: 'Brand recall', value: '92% lift' },
      { label: 'Creative iterations', value: 'Realtime' },
    ],
  },
  {
    id: 'education',
    label: 'Education Orbit',
    description:
      'Ignite teams with cinematic playbooks, live labs, and debrief rooms that turn insights into rituals.',
    metrics: [
      { label: 'Team upskill', value: '6x faster' },
      { label: 'Knowledge retention', value: '89%' },
      { label: 'Playbooks launched', value: '24' },
    ],
  },
]

const learningModules = [
  {
    title: 'Signal Analysis Lab',
    description:
      'Deconstruct live campaigns with annotated motion graphics and voice-guided insights from Norina.',
    icon: <Microscope size={28} />, 
  },
  {
    title: 'Creative DNA Sequencer',
    description:
      'Remix archetypes, palettes, and typography with Razvan and Bogdan in a collaborative moodboard deck.',
    icon: <Layers size={28} />,
  },
  {
    title: 'Ops Velocity Trials',
    description:
      'Simulate manual vs. automated workflows to quantify efficiencies before launch.',
    icon: <Workflow size={28} />,
  },
]

const missions = [
  {
    title: 'Immersive Brand Launch',
    sector: 'Tech SaaS',
    impact: '+180% qualified pipeline',
    color: 'var(--plasma-orange)',
    summary:
      'A mission-control microsite fused 3D product visualizations with adaptive nurture journeys, driving investor momentum.',
  },
  {
    title: 'Cinematic Product Reveal',
    sector: 'Consumer Robotics',
    impact: '3.2M cross-platform impressions',
    color: 'var(--plasma-cyan)',
    summary:
      'VFX-driven storytelling orchestrated by Iulia turned launch week into an interactive, shoppable film.',
  },
  {
    title: 'Growth Intelligence Engine',
    sector: 'E-commerce Collective',
    impact: '62% ROAS uplift',
    color: 'var(--plasma-violet)',
    summary:
      'Built a living dashboard that merged paid media, social listening, and AI prompts for rapid experimentation.',
  },
  {
    title: 'Civic Engagement Lab',
    sector: 'Non-profit',
    impact: '45K volunteer activations',
    color: 'var(--plasma-lime)',
    summary:
      'Created gamified education sequences that turned complex policy into accessible, shareable challenges.',
  },
]

const testimonials = [
  {
    name: 'Elena Marin',
    role: 'CMO, Orbitronics',
    quote:
      '“The Velocity Hub didn’t just automate our reporting—it rewired how our teams collaborate. Execution feels like choreography now.”',
    metric: '+140% sprint throughput',
  },
  {
    name: 'Daniel Cho',
    role: 'Founder, Luma Labs',
    quote:
      '“Every touchpoint felt handcrafted for our identity. The persona constellations helped us reimagine our brand voice overnight.”',
    metric: '92% brand recall',
  },
  {
    name: 'Aisha Rahim',
    role: 'Head of Growth, Maven Guild',
    quote:
      '“Their education orbit turned our marketing org into an experimentation studio. We’ve embedded three playbooks already.”',
    metric: '6x enablement speed',
  },
]

const team = [
  {
    name: 'Teodor',
    title: 'Project Mission Control',
    focus: 'AI strategy, orchestration systems, future-ready roadmaps',
    icon: <Rocket size={24} />, 
  },
  {
    name: 'Eduard',
    title: 'Full-Stack Synthesist',
    focus: 'Experience engineering, automation layers, data UX',
    icon: <Network size={24} />, 
  },
  {
    name: 'Razvan',
    title: 'Creative Director',
    focus: 'Narrative design, art direction, immersive storytelling',
    icon: <Compass size={24} />, 
  },
  {
    name: 'Bogdan',
    title: 'Graphic Architect',
    focus: 'Visual systems, motion branding, design ops',
    icon: <Sparkles size={24} />, 
  },
  {
    name: 'Norina',
    title: 'Signal Strategist',
    focus: 'Social intelligence, lifecycle campaigns, voice design',
    icon: <Target size={24} />, 
  },
  {
    name: 'Iulia',
    title: 'VFX Visionary',
    focus: 'Cinematic moments, XR, experiential overlays',
    icon: <Atom size={24} />, 
  },
]

const sandboxObjectives = [
  'Launch a new product line',
  'Revamp brand identity',
  'Scale paid media efficiency',
  'Activate community & loyalty',
]

const sandboxChannels = [
  'Immersive microsite',
  'Cinematic reveal film',
  'Lifecycle automation',
  'Influencer constellation',
  'Experimental social lab',
]

function SectionTitle({ title, eyebrow, description }: { title: string; eyebrow: string; description: string }) {
  return (
    <div className="section-header">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

function App() {
  const [mode, setMode] = useState(heroModes[0])
  const [objective, setObjective] = useState(sandboxObjectives[0])
  const [channel, setChannel] = useState(sandboxChannels[0])

  const sandboxPlan = useMemo(
    () =>
      [
        `Kick-off war-room with ${mode.label} diagnostics to surface hidden acceleration opportunities.`,
        `Deploy ${channel.toLowerCase()} as the hero channel, wired with adaptive creative from the Identity Nebula.`,
        `Launch education orbit sprints so your team can sustain the ${objective.toLowerCase()} mission post-engagement.`,
      ],
    [mode.label, channel, objective],
  )

  return (
    <div className={`app-shell mode-${mode.id}`}>
      <motion.header
        className="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Agency-as-Universe</span>
            <h1>
              Orchestrate launches that feel cinematic, intelligent, and impossibly efficient.
            </h1>
            <p>
              Choose a mission mode to see how our six-specialist crew fuses AI, design, and storytelling into experiences that
              bend expectation.
            </p>
            <div className="hero-modes">
              {heroModes.map((entry) => (
                <button
                  key={entry.id}
                  className={`mode-button ${mode.id === entry.id ? 'active' : ''}`}
                  onClick={() => setMode(entry)}
                >
                  <span>{entry.label}</span>
                  <ArrowUpRight size={18} />
                </button>
              ))}
            </div>
          </div>
          <motion.div
            key={mode.id}
            className="hero-panel"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="panel-label">{mode.label}</span>
            <p>{mode.description}</p>
            <div className="panel-metrics">
              {mode.metrics.map((metric) => (
                <div key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.header>

      <main>
        <motion.section
          className="portals"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            eyebrow="Portal Rooms"
            title="Pick a satellite and dive into the service dimension it unlocks"
            description="Each environment is choreographed by specialists—from persona constellations to automation hubs—to reveal how we compress time to value."
          />
          <div className="portal-grid">
            <motion.article whileHover={{ y: -12 }} className="portal-card">
              <div className="icon-circle">
                <BrainCircuit size={28} />
              </div>
              <h3>Identity Constellations</h3>
              <p>
                Drag-and-drop archetypes across a holographic stage. Watch AI messaging pillars update instantly as we sculpt the
                soul of your brand.
              </p>
              <footer>
                <span>Curated by Razvan &amp; Bogdan</span>
                <ArrowUpRight size={18} />
              </footer>
            </motion.article>
            <motion.article whileHover={{ y: -12 }} className="portal-card">
              <div className="icon-circle">
                <Lightbulb size={28} />
              </div>
              <h3>Learning Lab</h3>
              <p>
                Explore scrollytelling corridors with cinematic teardowns, Norina’s narrated frameworks, and unlockable toolkits
                for your team.
              </p>
              <footer>
                <span>Guided by Norina</span>
                <ArrowUpRight size={18} />
              </footer>
            </motion.article>
            <motion.article whileHover={{ y: -12 }} className="portal-card">
              <div className="icon-circle">
                <LineChart size={28} />
              </div>
              <h3>Velocity Hub</h3>
              <p>
                Toggle manual vs. automated timelines. Watch efficiency scores spike as AI copilots spin up campaign ops.
              </p>
              <footer>
                <span>Engineered by Teodor &amp; Eduard</span>
                <ArrowUpRight size={18} />
              </footer>
            </motion.article>
          </div>
        </motion.section>

        <motion.section
          className="learning"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            eyebrow="Learning Lab"
            title="Education corridors that turn insights into rituals"
            description="Spin up modular sessions your team can remix—each lab pairs cinematic storytelling with actionable frameworks and takeaways."
          />
          <div className="learning-modules">
            {learningModules.map((module) => (
              <motion.div key={module.title} className="module-card" whileHover={{ scale: 1.03 }}>
                <div className="module-icon">{module.icon}</div>
                <div>
                  <h3>{module.title}</h3>
                  <p>{module.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="efficiency"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            eyebrow="Velocity Hub"
            title="See efficiency materialize in real time"
            description="Flip between manual and automated modes to watch the Delta interface animate throughput, collaboration, and reporting." 
          />
          <div className="efficiency-toggle">
            <button className="manual">Manual Orbit</button>
            <button className="automated">Automated Symphony</button>
          </div>
          <div className="efficiency-panels">
            <motion.div
              className="efficiency-card"
              whileHover={{ rotateX: 8, rotateY: -8 }}
              transition={{ type: 'spring', stiffness: 120, damping: 12 }}
            >
              <span className="badge">Manual</span>
              <h3>Fragmented timelines</h3>
              <ul>
                <li>Weekly alignment meetings</li>
                <li>Spreadsheet-based reporting</li>
                <li>Creative locked behind approvals</li>
              </ul>
              <p className="time">Launch ETA: 9 weeks</p>
            </motion.div>
            <motion.div
              className="efficiency-card highlight"
              whileHover={{ rotateX: -6, rotateY: 10 }}
              transition={{ type: 'spring', stiffness: 120, damping: 12 }}
            >
              <span className="badge">Automated</span>
              <h3>Synced mission control</h3>
              <ul>
                <li>AI generated daily standups</li>
                <li>Real-time dashboards &amp; anomaly alerts</li>
                <li>Creative variants shipped every sprint</li>
              </ul>
              <p className="time">Launch ETA: 3 weeks</p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="portfolio"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            eyebrow="Campaign Nebula"
            title="Traverse case studies as interactive mission logs"
            description="Zoom into each planet to decode objectives, creative maneuvers, and the orbit of results we engineered."
          />
          <div className="mission-grid">
            {missions.map((mission) => (
              <motion.article
                key={mission.title}
                className="mission-card"
                style={{ borderColor: mission.color }}
                whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(0,0,0,0.35)' }}
              >
                <header>
                  <span className="mission-sector">{mission.sector}</span>
                  <h3>{mission.title}</h3>
                </header>
                <p>{mission.summary}</p>
                <footer style={{ color: mission.color }}>{mission.impact}</footer>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="testimonials"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            eyebrow="Signal Boost Array"
            title="Testimonials orbiting our mission control"
            description="Hover a satellite to hear the signal from brands we’ve launched. Each story pairs emotional proof with measurable lift."
          />
          <div className="testimonial-orbit">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className={`testimonial-satellite satellite-${index}`}
                whileHover={{ scale: 1.1 }}
              >
                <div className="quote">{testimonial.quote}</div>
                <div className="person">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
                <span className="metric">{testimonial.metric}</span>
              </motion.div>
            ))}
            <div className="orbit-core">
              <Sparkles size={32} />
              <p>Trusted by visionary teams</p>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="sandbox"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            eyebrow="Collaborative Pitch Sandbox"
            title="Assemble a mission brief in under a minute"
            description="Pick an objective and channel to preview the roadmap we’ll craft together. An AI concierge keeps momentum while the team readies prototypes."
          />
          <div className="sandbox-grid">
            <div className="sandbox-controls">
              <label>
                Objective
                <select value={objective} onChange={(event) => setObjective(event.target.value)}>
                  {sandboxObjectives.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <label>
                Hero Channel
                <select value={channel} onChange={(event) => setChannel(event.target.value)}>
                  {sandboxChannels.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
            </div>
            <motion.div className="sandbox-plan" key={`${objective}-${channel}-${mode.id}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="plan-eyebrow">AI Concierge Preview</span>
              <h3>Mission gameplan</h3>
              <ol>
                {sandboxPlan.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
              <button className="cta">
                Schedule a live war-room <ArrowUpRight size={18} />
              </button>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="team"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            eyebrow="Crew Quarters"
            title="Meet the specialists synchronizing every launch"
            description="A six-person formation covering strategy, creative direction, design, automation, marketing intelligence, and cinematic craft."
          />
          <div className="team-grid">
            {team.map((member) => (
              <motion.article key={member.name} className="team-card" whileHover={{ y: -8 }}>
                <div className="team-icon">{member.icon}</div>
                <div className="team-meta">
                  <h3>{member.name}</h3>
                  <span>{member.title}</span>
                </div>
                <p>{member.focus}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>
      </main>

      <footer className="footer">
        <div>
          <span className="eyebrow">Next Mission</span>
          <h2>Ready to step inside the command deck?</h2>
          <p>Drop your challenge and we’ll spin up a tailored simulation within 48 hours.</p>
        </div>
        <button className="cta">
          Initiate mission request <ArrowUpRight size={18} />
        </button>
      </footer>
    </div>
  )
}

export default App
