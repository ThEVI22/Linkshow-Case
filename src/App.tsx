import { useState, useEffect, Fragment } from 'react';
import { Profile } from './components/Profile';
import { SocialLinks } from './components/SocialLinks';
import { Certificates } from './components/Certificates';

function TypewriterText({ text, delay = 0, cursor = "_" }: { text: string, delay?: number, cursor?: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    let charIndex = 0;

    const startTyping = () => {
      interval = setInterval(() => {
        if (charIndex < text.length) {
          setDisplayedText(text.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, 40); // 40ms per character for brisk terminal feel
    };

    const initialDelay = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [text, delay]);

  return (
    <span>
      {displayedText.split('\n').map((line, i, arr) => (
        <Fragment key={i}>
          {line}
          {i === arr.length - 1 && <span className={`cursor-blink ${isComplete ? 'inactive' : ''}`}>{cursor}</span>}
          {i !== arr.length - 1 && <br />}
        </Fragment>
      ))}
    </span>
  );
}

function App() {
  const [isBooted, setIsBooted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBooted(true);
    }, 1200); // Simulate boot sequence
    return () => clearTimeout(timer);
  }, []);

  const user = {
    name: "Thevindu Dilmith Wickramarathne",
    subtitle: "Aspiring Security Professional",
    avatarUrl: "/placeholder-avatar.png" 
  };

  const certificates = [
    {
      id: "cert-1",
      title: "Certificate in Cyber Security & Ethical Hacking (C|CSEH)",
      subtitle: "CICRA Campus • Issued Jun 2023",
      imageUrl: "/cicra.png",
      iconUrl: "/cicra-logo.svg"
    },
    {
      id: "cert-2",
      title: "Foundation Certificate in Information Technology (FCIT)",
      subtitle: "Curtin University • Issued Jul 2023",
      imageUrl: "/Curtin.png",
      iconUrl: "/curtin-logo.jpg"
    },
    {
      id: "cert-3",
      title: "UOM Trainee - Python Programmer",
      subtitle: "University of Moratuwa • Issued May 2023",
      imageUrl: "/UOM.png",
      iconUrl: "/University_of_Moratuwa_logo.png"
    },
    {
      id: "cert-4",
      title: "Learning Python",
      subtitle: "LinkedIn • Issued Oct 3, 2024",
      linkUrl: "https://www.linkedin.com/learning/certificates/f93663ee82a7338a4e18f4f3016962cbb9bfaedc47d498998e6829d61e7b301e?trk=share_certificate",
      iconUrl: "/linkedin-logo.svg"
    },
    {
      id: "cert-5",
      title: "Cybersecurity Foundations",
      subtitle: "LinkedIn • Issued May 14, 2025",
      linkUrl: "https://www.linkedin.com/learning/certificates/ffe5aed44dfc02a79b259d94090d403efd0800a3deb700fefc9dfeda3f3f6e42",
      iconUrl: "/linkedin-logo.svg"
    },
    {
      id: "cert-6",
      title: "Python Essential Training",
      subtitle: "LinkedIn • Issued Oct 3, 2024",
      linkUrl: "https://www.linkedin.com/learning/certificates/cf3a87ae05df0aff34e8511769ec350d37af84e19a9591cccbc30ff62967841d?trk=share_certificate",
      iconUrl: "/linkedin-logo.svg"
    }
  ];

  if (!isBooted) {
    return (
      <div className="bg-pattern min-h-screen flex-row-center">
        <div className="terminal-loader">
          SYSTEM_BOOTING
          <span className="cursor-blink">█</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-pattern min-h-screen">
      <main className="main-container app-reveal">
        <div className="poster-hero">
          <h1 className="poster-title">
            <TypewriterText 
              text={"ZERO TRUST 🔒\nMAX SECURITY."} 
              delay={200} 
              cursor="█" 
            />
          </h1>
          <p className="poster-subtitle">
            <TypewriterText text={"MY DIGITAL COMMAND CENTER."} delay={1800} cursor="█" />
          </p>
        </div>
        
        <div className="cover-wrapper">
          <img src="/placeholder-cover.png" alt="Cover Graphic" className="cover-image" />
        </div>

        <Profile 
          name={user.name} 
          subtitle={user.subtitle} 
          avatarUrl={user.avatarUrl} 
        />
        <SocialLinks />
        <Certificates items={certificates} />
      </main>
    </div>
  );
}

export default App;
