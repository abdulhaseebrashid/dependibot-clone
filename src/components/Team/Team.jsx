import "./Team.css"

// Import all the PNG images using your preferred pattern (same as Expertise)
import appleIcon from "../../assets/images/icons/tech-icons/apple.png"
import androidIcon from "../../assets/images/icons/tech-icons/android.png"
import flutterIcon from "../../assets/images/icons/tech-icons/flutter.png"
import angularIcon from "../../assets/images/icons/tech-icons/angular.png"
import reactIcon from "../../assets/images/icons/tech-icons/react.png"
import vueIcon from "../../assets/images/icons/tech-icons/vue.png"
import html5Icon from "../../assets/images/icons/tech-icons/html5.png"
import phpIcon from "../../assets/images/icons/tech-icons/php.png"
import laravelIcon from "../../assets/images/icons/tech-icons/laravel.png"
import pythonIcon from "../../assets/images/icons/tech-icons/python.png"
import aspnetIcon from "../../assets/images/icons/tech-icons/aspnet.png"
import csharpIcon from "../../assets/images/icons/tech-icons/csharp.png"
import framework1Icon from "../../assets/images/icons/tech-icons/framework1.png"
import mysqlIcon from "../../assets/images/icons/tech-icons/mysql.png"
import tech1Icon from "../../assets/images/icons/tech-icons/tech1.png"
import postgresqlIcon from "../../assets/images/icons/tech-icons/postgresql.png"
import databaseIcon from "../../assets/images/icons/tech-icons/database.png"
import djangoIcon from "../../assets/images/icons/tech-icons/django.png"
import tech2Icon from "../../assets/images/icons/tech-icons/tech2.png"
import firebaseIcon from "../../assets/images/icons/tech-icons/firebase.png"
import awsIcon from "../../assets/images/icons/tech-icons/aws.png"
import wordpressIcon from "../../assets/images/icons/tech-icons/wordpress.png"
import jqueryIcon from "../../assets/images/icons/tech-icons/jquery.png"
import zendIcon from "../../assets/images/icons/tech-icons/zend.png"

const Team = () => {
  // Fallback icon component for missing images (same as Expertise)
  const FallbackIcon = ({ name }) => (
    <div className="fallback-icon">
      <span className="fallback-icon-text">
        {name
          .split(" ")
          .map((word) => word[0])
          .join("")
          .slice(0, 2)}
      </span>
    </div>
  )

  const technologies = [
    // Row 1
    [
      { name: "Apple", src: appleIcon },
      { name: "Android", src: androidIcon },
      { name: "Flutter", src: flutterIcon },
      { name: "Angular", src: angularIcon },
      { name: "React", src: reactIcon },
      { name: "Vue.js", src: vueIcon },
      { name: "HTML5", src: html5Icon },
      { name: "PHP", src: phpIcon },
    ],
    // Row 2
    [
      { name: "Laravel", src: laravelIcon },
      { name: "Python", src: pythonIcon },
      { name: "ASP.NET", src: aspnetIcon },
      { name: "C#", src: csharpIcon },
      { name: "Framework", src: framework1Icon },
      { name: "MySQL", src: mysqlIcon },
      { name: "Technology", src: tech1Icon },
      { name: "PostgreSQL", src: postgresqlIcon },
    ],
    // Row 3
    [
      { name: "Database", src: databaseIcon },
      { name: "Django", src: djangoIcon },
      { name: "Technology2", src: tech2Icon },
      { name: "Firebase", src: firebaseIcon },
      { name: "AWS", src: awsIcon },
      { name: "WordPress", src: wordpressIcon },
      { name: "jQuery", src: jqueryIcon },
      { name: "Zend Framework", src: zendIcon },
    ],
  ]

  return (
    <section className="team" id="team">
      <div className="team__main-section">
        <div className="container">
          <div className="team__content">
            {/* Header */}
            <div className="team__header">
              <h2 className="team__title">Technologies We Work With</h2>
            </div>

            {/* Technologies Grid */}
            <div className="technologies-grid">
              {technologies.map((row, rowIndex) => (
                <div key={rowIndex} className="tech-row">
                  {row.map((tech, techIndex) => (
                    <div key={techIndex} className="tech-item">
                      <div className="tech-icon">
                        <img
                          src={tech.src || "/placeholder.svg"}
                          alt={tech.name}
                          className="tech-icon-image"
                          onError={(e) => {
                            // Hide broken image and show fallback (same as Expertise)
                            e.target.style.display = "none"
                            const fallback = e.target.nextElementSibling
                            if (fallback) fallback.style.display = "flex"
                          }}
                        />
                        <FallbackIcon name={tech.name} />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="team__cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-info">
              <p className="cta-text">Let's Discuss How to Make your Business Better.</p>
              <div className="cta-call">
                <h3 className="cta-title">Call Us Now</h3>
                <p className="cta-phone">+1 (501) 777-5761</p>
                <p className="cta-or">— OR —</p>
                <button className="cta-button">Get In Touch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
