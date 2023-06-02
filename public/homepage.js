var contents = {
    name: 'Rosendo Galang',
    course: 'Bachelor of Science in Industrial Engineering',
    school: 'Polytechnic University of The Philippines'
};

function Home() {
    return (
        <div>
            <div class="home section" id="scrollspyHeading1">
                <div class="social">
                    <a href="https://github.com/sendowyehert01"><i class="bi bi-github"></i></a>
                    <a href="https://www.instagram.com/odnes_/"><i class="bi bi-instagram"></i></a>
                    <a href="https://facebook.com/MangSendong"><i class="bi bi-facebook"></i></a>
                </div>
                <div class="home-img">
                    <img src="./images/sendo.png" alt="" />
                </div>
                <div class="home-text">
                    <span>Hello, I'm</span>
                    <h1>Rosendo Galang</h1>
                    <div className="slider">
                        <span className="visible">Industrial Engineer</span>
                        <span>Web Developer</span>
                        <span>Freelance</span>
                    </div>
                    <p> After several months of working as an engineer, I have realized that my true passion lies in programming.
                        As such, I am eager to transition from engineering and devote myself to learn and grow through programming.
                        I can utilize my experience in technology to enhance learning opportunities. With this, I possess the requisite patience, empathy, and enthusiasm to thrive as a developer.</p>
                    <a href="./images/Galang_Resume_2023_updated.pdf" class="btncv">Download CV</a>
                </div>
            </div>
        </div>
    )
}

function About() {
    return (
        <div class="about section" id="scrollspyHeading2">
                <div class="heading">
                    <h2>About Me</h2>
                    <span>Introduction</span>
                </div>

                <div class="about-container">
                    <div class="about-img">
                        <img src="./images/sendo.png" alt="" />
                    </div>
                    <div class="about-text">
                        <p>I am a graduate of Bachelor of Science in Industrial Engineering at Polytechnic University of the Philippines Batch 2020.
                            My hobbies are playing online games and some outdoor games like basketball, tennis etc.. Eventhough my past experiences are
                            not related to programming, I pushed myself to study about Web Development.
                        </p>
                        <div class="information">
                            <div class="info-box">
                                <i class='bx bi bi-person'></i>
                                <span>Rosendo E. Galang</span>
                            </div>
                            <div class="info-box">
                            <i class="bx bi bi-phone"></i>
                                <span>+63956-122-4280</span>
                            </div>
                            <div class="info-box">
                                <i class='bx bi bi-envelope'></i>
                                <span>senduo.galang0149@gmail.com</span>
                            </div>
                        </div>
                        <a href="./images/Galang_Resume_2023_updated.pdf" class="btncv2">Download CV</a>
                    </div>
                </div>
            </div>
    )
}

function Skills() {
    return (
        <div class="skills section" id="scrollspyHeading3">
                <div class="heading">
                    <h2>Skills</h2>
                    <span>My Skills</span>
                </div>

                <div class="skills-container">
                    <div class="bars">

                        <div class="bars-box">
                            <h3>HTML</h3>
                            <span>90%</span>
                            <div class="light-bar"></div>
                            <div class="percent-bar html-bar"></div>
                        </div>

                        <div class="bars-box">
                            <h3>CSS</h3>
                            <span>85%</span>
                            <div class="light-bar"></div>
                            <div class="percent-bar css-bar"></div>
                        </div>

                        <div class="bars-box">
                            <h3>JavaScript</h3>
                            <span>75%</span>
                            <div class="light-bar"></div>
                            <div class="percent-bar js-bar"></div>
                        </div>

                        <div class="bars-box">
                            <h3>React</h3>
                            <span>70%</span>
                            <div class="light-bar"></div>
                            <div class="percent-bar react-bar"></div>
                        </div>

                        <div class="bars-box">
                            <h3>NodeJS</h3>
                            <span>70%</span>
                            <div class="light-bar"></div>
                            <div class="percent-bar node-bar"></div>
                        </div>

                        <div class="bars-box">
                            <h3>Express</h3>
                            <span>70%</span>
                            <div class="light-bar"></div>
                            <div class="percent-bar express-bar"></div>
                        </div>

                        <div class="bars-box">
                            <h3>MongoDB</h3>
                            <span>70%</span>
                            <div class="light-bar"></div>
                            <div class="percent-bar mongodb-bar"></div>
                        </div>
                    </div>
                    <div class="skills-img">
                        <img src="./images/sendo.png" alt="Skill" />
                    </div>
                </div>
            </div>
    )
}

function Services() {
    return (
            <div class="services section" id="services">
                    <div class="heading">
                        <h2>Services</h2>
                        <span>Our Services</span>
                    </div>
                    <div class="services-content">

                        <div class="services-box">
                            <i class='bx bx-code-alt'></i>
                            <h3>Web Development</h3>
                            <a href="#">Learn More</a>
                        </div>

                        <div class="services-box">
                            <i class='bx bx-server'></i>
                            <h3>Backend Development</h3>
                            <a href="#">Learn More</a>
                        </div>
                        <div class="services-box">
                            <i class='bx bx-brush'></i>
                            <h3>UI/UX Design</h3>
                            <a href="#">Learn More</a>
                        </div>

                        <div class="services-box">
                            <i class='bx bxl-android'></i>
                            <h3>App Development</h3>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                </div>
    )
}

function Contact() {
    return (
        <div class="contact section" id="contact">
                <div class="heading">
                    <h2>Contact</h2>
                    <span>Connect Me</span>
                </div>
                <div class="contact-form">
                    <form action="">
                        <input type="text" placeholder="Your Name"/>
                        <input type="email" name="" id="" placeholder="Your Email"/>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Write Message Here..."></textarea>
                        <input type="button" value="Send" class="contact-button"/>
                    </form>
                </div>
        </div>
    )
}

function Footer() {
    return (
        <div>
        <div class="footer">
            <h2>Follow Me</h2>
            <div class="footer-social">
                <a href="https://facebook.com/MangSendong"><i class="bx bi bi-facebook"></i></a>
                <a href="https://twitter.com/xd0ugh?t=vc1ULb0oRx7LXrOgrDDDWA&s=09"><i class='bx bi bi-twitter'></i></a>
                <a href="https://www.instagram.com/odnes_/"><i class='bx bi bi-instagram'></i></a>
                <a href="https://github.com/sendowyehert01"><i class="bi bi-github"></i></a>
            </div>
        </div>
        <div class="copyright">
           <p> &#169; R.G | All Right Reserved.</p>
        </div>
        </div>
    )
}

ReactDOM.render(
    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
            <Home />
            <About />
            <Skills />
            {/* <Services /> */}
            <Contact />
            <Footer />
    </div>,
    document.getElementById('root')
);

// FUNCTIONS -------------------------------------

        // -------------------FUNCTIONS-------------------
        // Get all the slides
        var slides = document.querySelectorAll('.slider span');
        // Initialize the slide index
        var slideIndex = 0;
        // Show the first slide
        slides[slideIndex].classList.add('visible');
        // Start the slide show
        setInterval(function () {
        // Hide the current slide
        slides[slideIndex].classList.remove('visible');
        slides[slideIndex].classList.add('hidden');
        // Calculate the index of the next slide
        slideIndex = (slideIndex + 1) % slides.length;
        // Show the next slide
         slides[slideIndex].classList.remove('hidden');
        slides[slideIndex].classList.add('visible');
        }, 2000); // Change the slide every 3 seconds