import styles from "./page.module.css"

export default function Resume() {
    return (
        <section className={styles.resume}>
            <h1>Seth Baldridge</h1>
            <hr />
            <div className={styles.contactInfo}>
                <p>Salt Lake City, UT</p>
                <p>801-231-2778</p>
                <p>sethbaldridge87@gmail.com</p>
            </div>
            <h2>Career Summary</h2>
            <p>Senior Full-Stack Developer offering 9+ years of front-end focused experience. Boosts business growth by engineering high-performance, SEO-optimized web applications. Combines pixel-perfect design with scalable architecture to maximize site traffic, enhance user engagement, and accelerate customer conversions.</p>
            <h2>Experience</h2>
            <h3>Senior Frontend Developer</h3>
            <h4>Ivanti</h4>
            <h4>South Jordan, UT</h4>
            <h4>August 2019 - January 2026</h4>
            <ul>
                <li>Tested and debugged multiple applications for various devices, browsers and operating systems for a global customer base (including non-English speakers).</li>
                <li>Built an interactive, alphabetized library for product documentation files for mobile and desktop.</li>
                <li>Collaborated with the developer team using Agile/Scrum methodologies.</li>
                <li>Decreased reliance on 3rd-party JS libraries with reusable custom JavaScript functions.</li>
                <li>Increased versatility of existing HTML structure/templates through creative use of CSS classes and pattern recognition.</li>
                <li>In Vue.js, developed a robust icon library app linked to an API.</li>
                <li>Optimized performance of pages with video iframes via lazy-loading and the Youtube and Vimeo APIs.</li>
                <li>Delivered pixel-perfect webpages based on Figma designs and improvised several mobile UX/UI layouts.</li>
                <li>Oversaw several site-wide rebrandings delivered under tight time constrictions.</li>
                <li>Leveraged AI tools like Github CoPilot to get insightful code reviews that ensured best practices and rapid delivery, while also pinpointing and correcting faulty code.</li>
            </ul>
            <br />
            <h3>Web Developer </h3>
            <h4>Hydro Engineering, Inc </h4>
            <h4>South Salt Lake, UT </h4>
            <h4>January 2017 - August 2019 </h4>
            <ul>
                <li>Added contact forms and customer data applications using jQuery, PHP, MySQL.</li>
                <li>Utilized Python to automatically generate customer reports.</li>
                <li>Smoothed out mobile and desktop stylings by integrating Bootstrap.</li>
                <li>Improved SEO ratings through strategic metadata and increased accessibility standards.</li>
                <li>Debugged broken applications across multiple browsers and operating systems.</li>
                <li>Developed and launched a product comparison feature using browser storage and JavaScript.</li>
            </ul>
            <br />
            <h3>Web Development Intern </h3>
            <h4>Firetoss</h4>
            <h4>Salt Lake City, UT </h4>
            <h4>May 2016 - June 2016 </h4>
            <ul>
                <li>Performed simple CSS and HTML code edits in Wordpress environment.</li>
                <li>Assisted with image organization and optimization.</li>
                <li>Arranged page layouts with Adobe Illustrator.</li>
            </ul>
            <br />
            <h2>Technical Skills</h2>
            <ul>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Vue.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>ADA compliance</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SCSS</li>
                <li>jQuery</li>
                <li>PHP</li>
                <li>SQL</li>
                <li>Adobe Creative Suite</li>
                <li>Git</li>
                <li>Github Copilot</li>
                <li>Bootstrap</li>
                <li>Python</li>
                <li>AJAX</li>
                <li>APIs</li>
                <li>MongoDB</li>
                <li>SEO</li>
                <li>A/B Testing</li>
                <li>Mutiny</li>
                <li>Google Tag Manager</li>
            </ul>
            <br />
            <h2>Education</h2>
            <h3>Certificate, Web Development </h3>
            <h4>October 2018 - April 2019 </h4>
            <h4>University of Utah</h4>
            <br />
            <h3>Certificate, Web Programming  </h3>
            <h4>April 2016 - October 2016 </h4>
            <h4>Salt Lake Community College </h4>
            <br />
            <h3>Master of Arts, Art History </h3>
            <h4>September 2013 - August 2015 </h4>
            <h4>University of Utah </h4>
            <br />
            <h3>Bachelor of Arts, Humanities</h3>
            <h4>January 2009 - December 2012 </h4>
            <h4>Brigham Young University </h4>
        </section>
    )
}