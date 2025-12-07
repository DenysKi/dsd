import React, { useEffect, useRef, useState } from 'react';

// Generate 400 random Amazonian names
const generateNames = () => {
  const firstNames = [
    'Alex', 'Jordan', 'Taylor', 'Morgan', 'Casey', 'Riley', 'Quinn', 'Avery', 'Cameron', 'Drew',
    'Skyler', 'Reese', 'Finley', 'Sage', 'Phoenix', 'River', 'Blake', 'Charlie', 'Dakota', 'Emery',
    'James', 'Sarah', 'Michael', 'Emily', 'David', 'Jessica', 'Daniel', 'Ashley', 'Matthew', 'Amanda',
    'Christopher', 'Jennifer', 'Andrew', 'Elizabeth', 'Joshua', 'Stephanie', 'Ryan', 'Nicole', 'Brandon', 'Melissa',
    'Wei', 'Priya', 'Raj', 'Mei', 'Yuki', 'Hiroshi', 'Aisha', 'Omar', 'Fatima', 'Hassan',
    'Sanjay', 'Ananya', 'Vikram', 'Deepa', 'Arjun', 'Kavita', 'Ravi', 'Sunita', 'Amit', 'Neha',
    'Carlos', 'Maria', 'Luis', 'Ana', 'Pedro', 'Sofia', 'Diego', 'Isabella', 'Miguel', 'Valentina',
    'Marcus', 'Keisha', 'Jamal', 'Destiny', 'Terrence', 'Aaliyah', 'Darius', 'Imani', 'Xavier', 'Zara',
    'Liam', 'Emma', 'Noah', 'Olivia', 'Ethan', 'Ava', 'Mason', 'Sophia', 'Lucas', 'Mia',
    'Benjamin', 'Charlotte', 'Henry', 'Amelia', 'Sebastian', 'Harper', 'Jack', 'Evelyn', 'Aiden', 'Abigail',
    'Oliver', 'Ella', 'Leo', 'Scarlett', 'Theodore', 'Grace', 'Caleb', 'Chloe', 'Isaac', 'Victoria',
    'Natalie', 'Hannah', 'Rachel', 'Katherine', 'Samantha', 'Lauren', 'Megan', 'Allison', 'Rebecca', 'Christine',
    'Kevin', 'Jason', 'Justin', 'Brian', 'Eric', 'Steven', 'Patrick', 'Sean', 'Mark', 'Jeffrey',
    'Yusuf', 'Layla', 'Tariq', 'Nadia', 'Karim', 'Yasmin', 'Ibrahim', 'Salma', 'Ahmed', 'Hana',
    'Chen', 'Lin', 'Zhang', 'Wang', 'Liu', 'Yang', 'Huang', 'Zhao', 'Wu', 'Zhou',
    'Takeshi', 'Sakura', 'Kenji', 'Yumi', 'Akira', 'Emi', 'Ryu', 'Hana', 'Koji', 'Mika',
    'Giovanni', 'Francesca', 'Marco', 'Giulia', 'Alessandro', 'Chiara', 'Lorenzo', 'Elena', 'Andrea', 'Sara',
    'Hans', 'Greta', 'Friedrich', 'Ingrid', 'Klaus', 'Heidi', 'Wolfgang', 'Liesel', 'Stefan', 'Katrin',
    'Pierre', 'Marie', 'Jean', 'Claire', 'Philippe', 'Sophie', 'Laurent', 'Camille', 'Antoine', 'Juliette',
    'Olga', 'Dmitri', 'Natasha', 'Alexei', 'Irina', 'Sergei', 'Tatiana', 'Mikhail', 'Anna', 'Pavel'
  ];
  
  const lastNames = [
    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
    'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin',
    'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson',
    'Walker', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores',
    'Green', 'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell', 'Carter', 'Roberts',
    'Patel', 'Sharma', 'Kumar', 'Singh', 'Gupta', 'Reddy', 'Joshi', 'Mehta', 'Shah', 'Verma',
    'Chen', 'Wang', 'Li', 'Zhang', 'Liu', 'Yang', 'Huang', 'Wu', 'Zhou', 'Xu',
    'Kim', 'Park', 'Choi', 'Jung', 'Kang', 'Yoon', 'Han', 'Lim', 'Shin', 'Song',
    'Tanaka', 'Yamamoto', 'Watanabe', 'Suzuki', 'Takahashi', 'Ito', 'Nakamura', 'Kobayashi', 'Saito', 'Kato',
    'Mueller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Schulz', 'Hoffmann',
    'Rossi', 'Russo', 'Ferrari', 'Esposito', 'Bianchi', 'Romano', 'Colombo', 'Ricci', 'Marino', 'Greco',
    'Bernard', 'Dubois', 'Laurent', 'Leroy', 'Moreau', 'Simon', 'Michel', 'Garcia', 'David', 'Bertrand',
    'Santos', 'Oliveira', 'Souza', 'Costa', 'Ferreira', 'Pereira', 'Carvalho', 'Almeida', 'Gomes', 'Ribeiro',
    'Ivanov', 'Petrov', 'Sidorov', 'Smirnov', 'Kuznetsov', 'Popov', 'Volkov', 'Sokolov', 'Lebedev', 'Kozlov',
    'O\'Brien', 'Murphy', 'Kelly', 'Sullivan', 'Ryan', 'Walsh', 'O\'Connor', 'McCarthy', 'Byrne', 'Doyle',
    'MacDonald', 'Fraser', 'Campbell', 'Stewart', 'Reid', 'Murray', 'Morrison', 'Ross', 'Hamilton', 'Graham'
  ];

  const names = [];
  for (let i = 0; i < 400; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    names.push(`${firstName} ${lastName}`);
  }
  return names;
};

const allNames = generateNames();

// Distribute names across 16 principles (25 names each)
const distributeNames = () => {
  const distributed = [];
  for (let i = 0; i < 16; i++) {
    distributed.push(allNames.slice(i * 25, (i + 1) * 25));
  }
  return distributed;
};

const namesByPrinciple = distributeNames();

// Leadership Principles Data
const leadershipPrinciples = [
  {
    number: '01',
    title: 'Customer Obsession',
    principle: 'Leaders start with the customer and work backwards. They work vigorously to earn and keep customer trust.',
    reflection: 'Every decision, every feature, every late night — it all came back to one question: "What does the customer need?" This principle rewired how I think about value creation. The customer isn\'t an afterthought; they\'re the beginning of every thought.',
    color: '#FF9900',
  },
  {
    number: '02',
    title: 'Ownership',
    principle: 'Leaders are owners. They think long term and don\'t sacrifice long-term value for short-term results.',
    reflection: 'I learned that ownership isn\'t about titles — it\'s about caring so deeply that you can\'t walk past a problem without trying to solve it. "That\'s not my job" became "How can I help?" and it changed everything.',
    color: '#FF8C00',
  },
  {
    number: '03',
    title: 'Invent and Simplify',
    principle: 'Leaders expect and require innovation and invention from their teams and always find ways to simplify.',
    reflection: 'The magic wasn\'t in adding more — it was in relentlessly removing friction. I discovered that true innovation often looks like simplification. The best solutions feel obvious in hindsight.',
    color: '#FF7F00',
  },
  {
    number: '04',
    title: 'Are Right, A Lot',
    principle: 'Leaders are right a lot. They have strong judgment and good instincts. They seek diverse perspectives.',
    reflection: 'Being right isn\'t about ego — it\'s about being curious enough to gather perspectives, humble enough to change your mind, and confident enough to make the call when it matters.',
    color: '#FF7200',
  },
  {
    number: '05',
    title: 'Learn and Be Curious',
    principle: 'Leaders are never done learning and always seek to improve themselves.',
    reflection: 'Eight years, and I never stopped learning. Every team, every project, every failure was a classroom. The moment you think you know enough is the moment you start falling behind.',
    color: '#FF6500',
  },
  {
    number: '06',
    title: 'Hire and Develop the Best',
    principle: 'Leaders raise the performance bar with every hire and promotion. They recognize exceptional talent.',
    reflection: 'The greatest privilege was watching people grow. Hiring someone brilliant is thrilling, but helping someone discover their own brilliance? That\'s legacy.',
    color: '#FF5800',
  },
  {
    number: '07',
    title: 'Insist on the Highest Standards',
    principle: 'Leaders have relentlessly high standards — many people may think these standards are unreasonably high.',
    reflection: 'Good enough never was. I learned that high standards aren\'t about perfectionism — they\'re about respect. Respect for customers, for teammates, for the work itself.',
    color: '#FF4B00',
  },
  {
    number: '08',
    title: 'Think Big',
    principle: 'Thinking small is a self-fulfilling prophecy. Leaders create and communicate a bold direction that inspires results.',
    reflection: 'Amazon taught me to dream at a different scale. "What if we could?" became more powerful than "Why would we?" Bold visions attract bold people.',
    color: '#FF3E00',
  },
  {
    number: '09',
    title: 'Bias for Action',
    principle: 'Speed matters in business. Many decisions and actions are reversible and do not need extensive study.',
    reflection: 'Analysis paralysis is the enemy of progress. I learned to distinguish between one-way and two-way doors — and to sprint through the reversible ones.',
    color: '#FF3100',
  },
  {
    number: '10',
    title: 'Frugality',
    principle: 'Accomplish more with less. Constraints breed resourcefulness, self-sufficiency, and invention.',
    reflection: 'Constraints aren\'t limitations — they\'re creativity catalysts. Some of our best solutions came not despite limited resources, but because of them.',
    color: '#FF2400',
  },
  {
    number: '11',
    title: 'Earn Trust',
    principle: 'Leaders listen attentively, speak candidly, and treat others respectfully.',
    reflection: 'Trust is earned in drops and lost in buckets. I learned that vulnerability, honesty, and following through aren\'t weaknesses — they\'re the foundation of everything.',
    color: '#E82300',
  },
  {
    number: '12',
    title: 'Dive Deep',
    principle: 'Leaders operate at all levels, stay connected to the details, and audit frequently.',
    reflection: 'The details matter. Every metric tells a story, every anomaly hides an opportunity. I learned to love the weeds because that\'s where the truth lives.',
    color: '#D12200',
  },
  {
    number: '13',
    title: 'Have Backbone; Disagree and Commit',
    principle: 'Leaders are obligated to respectfully challenge decisions when they disagree, then commit wholly once a decision is made.',
    reflection: 'Disagreement isn\'t disloyalty — silence is. I learned that the best teams fight hard for their ideas, then fight even harder for the team\'s decision.',
    color: '#BA2100',
  },
  {
    number: '14',
    title: 'Deliver Results',
    principle: 'Leaders focus on the key inputs for their business and deliver them with the right quality and in a timely fashion.',
    reflection: 'At the end of the day, results matter. Not effort, not intentions — results. This principle taught me to measure what matters and deliver what counts.',
    color: '#A32000',
  },
  {
    number: '15',
    title: 'Strive to be Earth\'s Best Employer',
    principle: 'Leaders work every day to create a safer, more productive, higher performing, more diverse, and more just work environment.',
    reflection: 'Success means nothing if it\'s built on broken people. I learned that taking care of your team isn\'t separate from the mission — it IS the mission.',
    color: '#8C1F00',
  },
  {
    number: '16',
    title: 'Success and Scale Bring Broad Responsibility',
    principle: 'We must be humble and thoughtful about even the secondary effects of our actions.',
    reflection: 'With great scale comes great responsibility. Amazon showed me that business can be a force for good — and that we have an obligation to make it so.',
    color: '#751E00',
  },
];

const FarewellPage = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={styles.container}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          overflow-x: hidden;
          background: #0a0a0a;
        }
        
        .fade-section {
          opacity: 0;
          transform: translateY(80px);
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .fade-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .stagger-1 { transition-delay: 0.15s; }
        .stagger-2 { transition-delay: 0.3s; }
        .stagger-3 { transition-delay: 0.45s; }
        .stagger-4 { transition-delay: 0.6s; }
        
        .name-tag {
          display: inline-block;
          padding: 6px 14px;
          margin: 4px;
          background: rgba(255, 153, 0, 0.1);
          border: 1px solid rgba(255, 153, 0, 0.2);
          border-radius: 20px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.8);
          transition: all 0.3s ease;
        }
        
        .name-tag:hover {
          background: rgba(255, 153, 0, 0.25);
          border-color: rgba(255, 153, 0, 0.5);
          transform: scale(1.05);
        }
        
        .scroll-indicator {
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
          40% { transform: translateY(-12px) translateX(-50%); }
          60% { transform: translateY(-6px) translateX(-50%); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        .principle-number {
          background: linear-gradient(135deg, #FF9900 0%, #FF6600 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .amazon-gradient {
          background: linear-gradient(135deg, #FF9900 0%, #FF6600 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={{
          ...styles.heroBackground,
          transform: `translateY(${scrollY * 0.3}px)`,
        }}>
          <div style={styles.gradientOrb1} />
          <div style={styles.gradientOrb2} />
          <div style={styles.gridOverlay} />
        </div>
        
        <div style={styles.heroContent}>
          <FadeInSection>
            <p style={styles.heroSubtitle}>After 8 incredible years</p>
          </FadeInSection>
          <FadeInSection delay={1}>
            <h1 style={styles.heroTitle}>
              <span className="amazon-gradient">Thank You,</span>
              <br />
              <span style={styles.heroAmazon}>Amazonians</span>
            </h1>
          </FadeInSection>
          <FadeInSection delay={2}>
            <p style={styles.heroTagline}>
              A journey shaped by 16 principles, countless mentors,<br />
              and the belief that it's always Day One
            </p>
          </FadeInSection>
        </div>
        
        <div className="scroll-indicator" style={styles.scrollIndicator}>
          <span style={styles.scrollText}>Scroll to explore</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF9900" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </section>

      {/* Jeff Bezos Tribute Section */}
      <section style={styles.founderSection}>
        <div style={styles.founderContent}>
          <FadeInSection>
            <div style={styles.founderImageWrapper}>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/03/Jeff_Bezos_visits_LAAFB_SMC_%283908618%29_%28cropped%29.jpeg" 
                alt="Jeff Bezos"
                style={styles.founderImage}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg, #FF9900 0%, #FF6600 100%);border-radius:50%;font-size:80px;color:white;">JB</div>';
                }}
              />
              <div style={styles.founderImageGlow} />
            </div>
          </FadeInSection>
          
          <div style={styles.founderText}>
            <FadeInSection delay={1}>
              <h2 style={styles.founderTitle}>To Jeff Bezos</h2>
            </FadeInSection>
            <FadeInSection delay={2}>
              <p style={styles.founderMessage}>
                Thank you for building more than a company — you built a platform for 
                <span style={styles.highlight}> thousands of lives to be transformed</span>.
              </p>
            </FadeInSection>
            <FadeInSection delay={3}>
              <p style={styles.founderMessage}>
                Your vision didn't just revolutionize e-commerce and cloud computing — 
                it gave countless people like me the opportunity to grow, to lead, to matter.
                You showed us that customer obsession and long-term thinking could reshape industries.
              </p>
            </FadeInSection>
            <FadeInSection delay={4}>
              <p style={styles.founderMessage}>
                From a garage to changing how the world shops, computes, and dreams — 
                <span style={styles.highlight}> thank you for letting us be part of the journey</span>.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Principles Intro */}
      <section style={styles.principlesIntro}>
        <FadeInSection>
          <h2 style={styles.principlesIntroTitle}>
            16 Principles.<br />
            <span style={{color: '#FF9900'}}>Infinite Lessons.</span>
          </h2>
        </FadeInSection>
        <FadeInSection delay={1}>
          <p style={styles.principlesIntroText}>
            Each principle taught by remarkable people.<br />
            Here are the lessons — and the teachers.
          </p>
        </FadeInSection>
      </section>

      {/* Leadership Principles */}
      {leadershipPrinciples.map((principle, index) => (
        <PrincipleSection 
          key={index}
          principle={principle}
          names={namesByPrinciple[index]}
          isEven={index % 2 === 0}
        />
      ))}

      {/* Final Gratitude Section */}
      <section style={styles.finalSection}>
        <div style={styles.finalGlow} />
        <FadeInSection>
          <p style={styles.finalNumber}>400+</p>
          <p style={styles.finalLabel}>Amazonians Who Shaped My Journey</p>
        </FadeInSection>
        <FadeInSection delay={1}>
          <h2 style={styles.finalTitle}>
            Thank you for teaching me<br />
            what it truly means to be<br />
            <span className="amazon-gradient">Day One</span>
          </h2>
        </FadeInSection>
      </section>

      {/* Footer */}
      <section style={styles.footerSection}>
        <FadeInSection>
          <p style={styles.footerQuote}>
            "It's still Day One."
          </p>
          <p style={styles.footerAttribution}>— Jeff Bezos</p>
        </FadeInSection>
        <FadeInSection delay={1}>
          <p style={styles.footerSignature}>With eternal gratitude,</p>
          <p style={styles.footerName}>— Your Name</p>
        </FadeInSection>
        <FadeInSection delay={2}>
          <div style={styles.amazonLogo}>
            <svg viewBox="0 0 100 30" fill="#FF9900" style={{width: '120px', opacity: 0.6}}>
              <path d="M62.4 21.8c-5.8 4.3-14.3 6.6-21.6 6.6-10.2 0-19.4-3.8-26.4-10.1-.5-.5-.1-1.1.6-.8 7.5 4.4 16.8 7 26.4 7 6.5 0 13.6-1.3 20.1-4.1 1-.4 1.8.6.9 1.4z"/>
              <path d="M64.9 19c-.7-.9-4.8-.4-6.6-.2-.6.1-.7-.4-.1-.8 3.2-2.3 8.5-1.6 9.1-.9.6.8-.2 6.2-3.2 8.8-.5.4-.9.2-.7-.3.7-1.7 2.2-5.7 1.5-6.6z"/>
            </svg>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
};

// Fade In Section Component
const FadeInSection = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });
    
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-section stagger-${delay} ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

// Principle Section Component
const PrincipleSection = ({ principle, names, isEven }) => {
  return (
    <section style={{
      ...styles.principleSection,
      background: isEven ? '#0a0a0a' : '#0f0f0f',
    }}>
      <div style={styles.principleContainer}>
        <div style={styles.principleHeader}>
          <FadeInSection>
            <span className="principle-number" style={styles.principleNumber}>
              {principle.number}
            </span>
          </FadeInSection>
          <FadeInSection delay={1}>
            <h2 style={styles.principleTitle}>{principle.title}</h2>
          </FadeInSection>
          <FadeInSection delay={2}>
            <p style={styles.principleText}>{principle.principle}</p>
          </FadeInSection>
        </div>
        
        <div style={styles.principleReflection}>
          <FadeInSection delay={2}>
            <div style={styles.reflectionCard}>
              <p style={styles.reflectionLabel}>My Reflection</p>
              <p style={styles.reflectionText}>{principle.reflection}</p>
            </div>
          </FadeInSection>
        </div>
        
        <div style={styles.namesSection}>
          <FadeInSection delay={3}>
            <p style={styles.namesLabel}>Who Taught Me This</p>
          </FadeInSection>
          <FadeInSection delay={4}>
            <div style={styles.namesCloud}>
              {names.map((name, i) => (
                <span key={i} className="name-tag">{name}</span>
              ))}
            </div>
          </FadeInSection>
        </div>
      </div>
      
      <div style={{
        ...styles.principleAccent,
        background: `linear-gradient(180deg, ${principle.color}15 0%, transparent 100%)`,
      }} />
    </section>
  );
};

// Styles
const styles = {
  container: {
    fontFamily: '"DM Sans", -apple-system, BlinkMacSystemFont, sans-serif',
    color: '#ffffff',
    background: '#0a0a0a',
    overflowX: 'hidden',
  },
  
  // Hero
  heroSection: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: '0 24px',
  },
  heroBackground: {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
  },
  gradientOrb1: {
    position: 'absolute',
    width: '800px',
    height: '800px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,153,0,0.15) 0%, transparent 60%)',
    top: '-20%',
    right: '-20%',
    filter: 'blur(60px)',
  },
  gradientOrb2: {
    position: 'absolute',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,102,0,0.1) 0%, transparent 60%)',
    bottom: '-10%',
    left: '-10%',
    filter: 'blur(40px)',
  },
  gridOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `linear-gradient(rgba(255,153,0,0.03) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,153,0,0.03) 1px, transparent 1px)`,
    backgroundSize: '50px 50px',
  },
  heroContent: {
    textAlign: 'center',
    zIndex: 1,
    maxWidth: '1000px',
  },
  heroSubtitle: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#FF9900',
    letterSpacing: '3px',
    marginBottom: '24px',
    textTransform: 'uppercase',
  },
  heroTitle: {
    fontFamily: '"Playfair Display", Georgia, serif',
    fontSize: 'clamp(48px, 12vw, 140px)',
    fontWeight: '400',
    lineHeight: '1.0',
    marginBottom: '40px',
  },
  heroAmazon: {
    color: '#ffffff',
  },
  heroTagline: {
    fontSize: 'clamp(16px, 2.5vw, 22px)',
    color: 'rgba(255,255,255,0.6)',
    fontWeight: '400',
    lineHeight: '1.6',
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: '40px',
    left: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    color: 'rgba(255,255,255,0.5)',
  },
  scrollText: {
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },

  // Founder Section
  founderSection: {
    padding: '160px 24px',
    background: 'linear-gradient(180deg, #0a0a0a 0%, #111 50%, #0a0a0a 100%)',
    position: 'relative',
  },
  founderContent: {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '60px',
  },
  founderImageWrapper: {
    position: 'relative',
    width: '280px',
    height: '280px',
  },
  founderImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
    border: '3px solid rgba(255,153,0,0.3)',
    filter: 'grayscale(20%)',
  },
  founderImageGlow: {
    position: 'absolute',
    inset: '-20px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,153,0,0.2) 0%, transparent 70%)',
    zIndex: -1,
  },
  founderText: {
    textAlign: 'center',
    maxWidth: '800px',
  },
  founderTitle: {
    fontFamily: '"Playfair Display", Georgia, serif',
    fontSize: 'clamp(32px, 5vw, 48px)',
    fontWeight: '400',
    marginBottom: '32px',
    color: '#FF9900',
  },
  founderMessage: {
    fontSize: '20px',
    lineHeight: '1.8',
    color: 'rgba(255,255,255,0.8)',
    marginBottom: '24px',
  },
  highlight: {
    color: '#FF9900',
    fontWeight: '500',
  },

  // Principles Intro
  principlesIntro: {
    padding: '160px 24px',
    textAlign: 'center',
    background: '#0a0a0a',
  },
  principlesIntroTitle: {
    fontFamily: '"Playfair Display", Georgia, serif',
    fontSize: 'clamp(36px, 7vw, 72px)',
    fontWeight: '400',
    marginBottom: '32px',
    color: '#ffffff',
    lineHeight: '1.2',
  },
  principlesIntroText: {
    fontSize: '20px',
    color: 'rgba(255,255,255,0.5)',
    lineHeight: '1.6',
  },

  // Principle Section
  principleSection: {
    padding: '120px 24px',
    position: 'relative',
    overflow: 'hidden',
  },
  principleContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  principleHeader: {
    marginBottom: '60px',
  },
  principleNumber: {
    fontFamily: '"Playfair Display", Georgia, serif',
    fontSize: '80px',
    fontWeight: '400',
    display: 'block',
    marginBottom: '16px',
  },
  principleTitle: {
    fontFamily: '"Playfair Display", Georgia, serif',
    fontSize: 'clamp(32px, 5vw, 56px)',
    fontWeight: '400',
    marginBottom: '24px',
    color: '#ffffff',
  },
  principleText: {
    fontSize: '18px',
    color: 'rgba(255,255,255,0.5)',
    lineHeight: '1.6',
    maxWidth: '700px',
    fontStyle: 'italic',
  },
  principleReflection: {
    marginBottom: '60px',
  },
  reflectionCard: {
    background: 'rgba(255,153,0,0.05)',
    border: '1px solid rgba(255,153,0,0.15)',
    borderRadius: '16px',
    padding: '40px',
  },
  reflectionLabel: {
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: '#FF9900',
    marginBottom: '16px',
  },
  reflectionText: {
    fontSize: '20px',
    lineHeight: '1.7',
    color: 'rgba(255,255,255,0.9)',
  },
  namesSection: {
    marginTop: '40px',
  },
  namesLabel: {
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: 'rgba(255,255,255,0.4)',
    marginBottom: '20px',
  },
  namesCloud: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  principleAccent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '200px',
    pointerEvents: 'none',
  },

  // Final Section
  finalSection: {
    padding: '200px 24px',
    textAlign: 'center',
    position: 'relative',
    background: '#0a0a0a',
  },
  finalGlow: {
    position: 'absolute',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,153,0,0.15) 0%, transparent 60%)',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    filter: 'blur(80px)',
  },
  finalNumber: {
    fontFamily: '"Playfair Display", Georgia, serif',
    fontSize: 'clamp(80px, 15vw, 180px)',
    fontWeight: '400',
    color: '#FF9900',
    lineHeight: '1',
    position: 'relative',
    zIndex: 1,
  },
  finalLabel: {
    fontSize: '18px',
    color: 'rgba(255,255,255,0.5)',
    marginBottom: '60px',
    position: 'relative',
    zIndex: 1,
  },
  finalTitle: {
    fontFamily: '"Playfair Display", Georgia, serif',
    fontSize: 'clamp(28px, 5vw, 48px)',
    fontWeight: '400',
    color: '#ffffff',
    lineHeight: '1.4',
    position: 'relative',
    zIndex: 1,
  },

  // Footer
  footerSection: {
    padding: '120px 24px 80px',
    textAlign: 'center',
    background: '#050505',
  },
  footerQuote: {
    fontFamily: '"Playfair Display", Georgia, serif',
    fontSize: '32px',
    fontStyle: 'italic',
    color: 'rgba(255,255,255,0.8)',
    marginBottom: '8px',
  },
  footerAttribution: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.4)',
    marginBottom: '60px',
  },
  footerSignature: {
    fontSize: '16px',
    color: 'rgba(255,255,255,0.5)',
    marginBottom: '8px',
  },
  footerName: {
    fontFamily: '"Playfair Display", Georgia, serif',
    fontSize: '28px',
    color: '#ffffff',
    marginBottom: '60px',
  },
  amazonLogo: {
    display: 'flex',
    justifyContent: 'center',
  },
};

export default FarewellPage;
