// Project page JavaScript - Updated without authentication
document.addEventListener('DOMContentLoaded', function() {
    console.log('Project page loaded');

    // Get the project parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project') || 'flux'; // Default to flux if no project specified
    
    // Project data with mixed content sections and overview added
    const projectData = {
        flux: {
            title: "FLUX Website",
            heroImage: "img/1.png",
            role: "Website Officer",
            timeline: "Work in progress",
            team: "FLUX officer",
            overview: "Work in progress",
            contentSections: [], // Add content sections if needed
            prev: {name: "Google Nest", link: "project.html?project=nest"},
            next: {name: "Telfair Museum", link: "project.html?project=telfair"}
        },
        
        telfair: {
            title: "Telfair Museum",
            heroImage: "img/2.png",
            role: "Team Lead",
            timeline: "10 weeks",
            team: "Elena, Hyunsoo Eun, Tyson Doering, Zoe Wang",
            overview: "A redesign of the digital experience for a Telfair Museum, balancing respect for heritage with modern interaction patterns to improve accessibility and engagement.",
            contentSections: [
                {
                    type: 'text',
                    content: "Understanding the Problem"
                },
                {
                    type: 'gallery',
                    images: [
                        {image: "img/telfair/4.png", caption: "Current Sitemap"},
                    ]
                },
                {
                    type: 'gallery',
                    images: [
                        {image: "img/telfair/5.png", caption: "Changing Header"},
                    ]
                },
                {
                    type: 'gallery',
                    images: [
                        {image: "img/telfair/6.png", caption: "Changing Body"},
                    ]
                },
                {
                    type: 'gallery',
                    images: [
                        {image: "img/telfair/7.png", caption: "Changing Footer"},
                    ]
                },
                {
                    type: 'text',
                    content: "Solving the Sitemap"
                },
                {
                    type: 'gallery',
                    images: [
                        {image: "img/telfair/8.png", caption: "Refined Sitemap"},
                    ]
                },
                {
                    type: 'text',
                    content: "Low-fidelity"
                },
                {
                    type: 'gallery',
                    images: [
                        {image: "img/telfair/10.png", caption: "Low-fi_Homepage"},
                    ]
                },
                {
                    type: 'gallery',
                    images: [
                        {image: "img/telfair/11.png", caption: "Low-fi_Shoppage"},
                    ]
                },
                {
                    type: 'gallery',
                    images: [
                        {image: "img/telfair/9.png", caption: "Low-fi_Productpage"},
                    ]
                },
                {
                    type: 'text',
                    content: "User-testing"
                },
                {
                    type: 'gallery',
                    images: [
                        {image: "img/telfair/12.png", caption: "User-testing_script"},
                    ]
                },
                {
                    type: 'gallery',
                    images: [
                        {image: "img/telfair/13.png", caption: "Key_Insights"},
                    ]
                },
                {
                    type: 'text',
                    content: "Branding"
                },
                {
                    type: 'gallery',
                    images: [
                        {image: "img/telfair/14.png", caption: "Branding_color&typography"},
                    ]
                },
                {
                    type: 'gallery',
                    images: [
                        {image: "img/telfair/15.png", caption: "Accessibility_testing"},
                    ]
                },
                {
                    type: 'text',
                    content: "Hi-Fidelity Final Design"
                },
                {
                    type: 'gallery',
                    images: [
                        {image: "img/telfair/16.png", caption: "Hi-fi_Homepage"},
                    ]
                },
                {
                    type: 'gallery',
                    images: [
                        {image: "img/telfair/17.png", caption: "Hi-fi_Shoppage"},
                    ]
                },
                {
                    type: 'gallery',
                    images: [
                        {image: "img/telfair/18.png", caption: "Hi-fi_Productpage"},
                    ]
                },
                {
                    type: 'text',
                    content: "Future Vision"
                },
                {
                    type: 'text',
                    content: "The Telfair Museum's digital platform will evolve into an inclusive cultural gateway—seamlessly blending historical depth with intuitive, contemporary design. It will serve as a dynamic hub for community engagement, learning, and artistic exploration for both local and global audiences."
                },
                {
                    type: 'gallery',
                    images: [
                        {image: "img/telfair/19.png", caption: "Executive_summary"},
                    ]
                }
            ],
            prev: {name: "FLUX Website", link: "project.html?project=flux"},
            next: {name: "Name Me", link: "project.html?project=nameme"}
        },
        
        nameme: {
            title: "Name Me",
            heroImage: "img/3.png",
            role: "UX Designer, Interaction Designer",
            timeline: "3 days",
            team: "June Lee - UX/UI Designer, Alohaensen Oncai - Graphic Designer",
            overview: "Name Me is an AI-powered naming application designed to bridge cultural and linguistic gaps, fostering global communication and connectivity. It helps users find meaningful names that resonate across different backgrounds, making communication more inclusive and accessible. Our goal was to craft an experience that felt like a personal guide rather than just another AI tool—something that celebrates identity, rather than reducing it to an algorithmic suggestion.",
            contentSections: [
                {
                    type: 'text',
                    content: "Understanding the Problem"
                },
                {
                    type: 'text',
                    content: "Names carry history, culture, and identity, yet they often get lost in translation. Through user research and personal conversations, we found that many people struggle with choosing names that are culturally respectful, phonetically clear, and meaningful across different languages. Imagine the excitement of naming a startup or a newborn, only to realize later that the name has an unintended meaning elsewhere. We wanted to create a tool that feels like a trusted friend—one that understands nuances and helps navigate this journey with ease."
                },
                {
                    type: 'text',
                    content: "SEAM App overview"
                },
                {
                    type: 'text',
                    content: "SEAM is a social network that empowers users to create and share open-source miniapps, fostering a community of online creatives who showcase their work, curate inspiration, and collaborate with peers. In the SEAM Mini App Design Challenge, participants are invited to design innovative miniapps that enhance the sharing experience within the SEAM community."
                },
                {
                    type: 'text',
                    content: "Ideation & Branding"
                },
                {
                    type: 'text',
                    content: "How do you visualize something as abstract as identity and meaning? Our branding journey was full of sketches, mood boards, and debates over typography and colors. We wanted Name Me to feel like an intersection of the personal and the universal—something that feels as friendly as a conversation yet as powerful as a linguistic database."
                },
                {
                    type: 'gallery',
                    images: [
                        {image: "img/nameme/nmideation1.png", caption: "Brand_Logo"},
                        {image: "img/nameme/nmideation2.png", caption: "Rough_Sketches"}
                    ]
                },
                {
                    type: 'text',
                    content: "Low-Fidelity"
                },
                {
                    type: 'text',
                    content: "The low-fi phase was all about speed and structure. We stripped everything down to its bare essentials—what are the absolute must-haves? Users needed to be able to search, customize, and explore meanings without friction. Our early testers gave us invaluable insights, like the need for an intuitive search function and real-time name analysis."
                },
                {
                    type: 'gallery',
                    images: [
                        {image: "img/nameme/nmlowfi.png", caption: "Low-fi_Design"}
                    ]
                },
                {
                    type: 'text',
                    content: "Mid-Fidelity"
                },
                {
                    type: 'text',
                    content: "Now, things started to take shape. We layered in colors, refined the interactions, and built a seamless flow. Users told us they wanted a guided experience—so we introduced smart recommendations and contextual explanations. This wasn't just about listing names; it was about telling stories behind them."
                },
                {
                    type: 'gallery',
                    images: [
                        {image: "img/nameme/nmmidfi.png", caption: "Mid-fi_Design"}
                    ]
                },
                {
                    type: 'text',
                    content: "Hi-Fidelity"
                },
                {
                    type: 'text',
                    content: "The final design was where everything clicked. We refined micro-interactions to make browsing feel smooth and natural. Our usability tests showed that people loved the ability to explore names through a blend of cultural references, phonetics, and personal preferences. We even had users tell us they discovered names they had never considered before—exactly the kind of discovery moment we were hoping to create."
                },
                {
                    type: 'gallery',
                    images: [
                        {image: "img/nameme/nmhififlow.png", caption: "Hi-fi_Flow"}
                    ]
                },
                {
                    type: 'text',
                    content: "Hi-Fidelity Concept"
                },
                {
                    type: 'text',
                    content: "The final design was where everything clicked. We refined micro-interactions to make browsing feel smooth and natural. Our usability tests showed that people loved the ability to explore names through a blend of cultural references, phonetics, and personal preferences. We even had users tell us they discovered names they had never considered before—exactly the kind of discovery moment we were hoping to create."
                },
                {
                    type: 'gallery',
                    images: [
                        {image: "img/nameme/nmhificoncept.png", caption: "Hi-fi_Flow"}
                    ]
                },
                {
                    type: 'text',
                    content: "Hi-Fidelity Concept"
                },
                {
                    type: 'text',
                    content: "Name Me isn't just an app; it's a statement about inclusivity in communication. In a world where global conversations are more common than ever, we believe tools like this can help create connections that go beyond language barriers. Whether you're naming a project, a business, or even yourself, Name Me is here to guide you through the process with meaning and respect."
                },
                {
                    type: 'gallery',
                    images: [
                        {image: "img/nameme/nmmainfin.jpg", caption: "Final_Design"}
                    ]
                }
            ],
            prev: {name: "Telfair Museum", link: "project.html?project=telfair"},
            next: {name: "Google Nest", link: "project.html?project=nest"}
        },
        
        nest: {
            title: "Google Nest",
            heroImage: "img/4.png",
            role: "UX Designer",
            timeline: "10 weeks",
            team: "Alana Banister, Brian Glennon, Chris DeMassa, Daniel Koucheravy, Hyunsoo Eun",
            overview: "This redesign of Google Nest reimagines how smart home technology can enhance shared workspaces. By integrating AI-driven sensors and personalized preferences, the new Google Nest system fosters a cooperative and comfortable environment for future employees. The goal was to create a solution that seamlessly balances individual comfort with group dynamics, ensuring an efficient and adaptable workspace.",
            contentSections: [
                {
                    type: 'text',
                    content: "Understanding the Challenge"
                },
                {
                    type: 'text',
                    content: "The modern workplace is evolving, and employees seek an environment that adapts to their personal needs while maintaining harmony with colleagues. Our redesign of Google Nest introduces AI-driven climate control and smart collaboration features, creating an intuitive system that fosters productivity and well-being."
                },
                {
                    type: 'text',
                    content: "Ideation & Branding"
                },
                {
                    type: 'text',
                    content: "We focused on balancing personalization with teamwork. Employees can adjust climate and lighting based on their preferences while AI ensures overall comfort across shared spaces. The branding emphasizes a seamless, user-friendly experience that aligns with Google's design ethos."
                },
                {
                    type: 'gallery',
                    images: [
                        {image: "img/nest/branding1.png", caption: "Branding_Typography"},
                        {image: "img/nest/branding2.png", caption: "Branding_Color"}
                    ]
                },
                {
                    type: 'text',
                    content: "Wireframing & Low-Fidelity Prototyping"
                },
                {
                    type: 'gallery',
                    images: [
                        {image: "img/nest/lowfi1.png", caption: "Low-fi_App"},
                        {image: "img/nest/lowfi2.png", caption: "Low-fi_Device"}
                    ]
                },
                {
                    type: 'text',
                    content: "Final Design - Device Component"
                },
                {
                    type: 'text',
                    content: "The high-fidelity design introduces an adaptive display that adjusts brightness and contrast based on ambient light. With smooth animations, haptic feedback, and real-time climate indicators, the interface creates an effortless experience for users looking to fine-tune their surroundings."
                },
                {
                    type: 'gallery',
                    images: [
                        {image: "img/nest/fin1.png", caption: "Branding_Typography"},
                        {image: "img/nest/fin2.png", caption: "Branding_Color"}
                    ]
                },
                {
                    type: 'text',
                    content: "Final Design - High-Fidelity"
                },
                {
                    type: 'text',
                    content: "The redesigned Google Nest app extends control beyond the physical device, enabling employees to adjust their workspace settings remotely. With AI-driven recommendations and real-time data visualization, users can optimize their environment with just a few taps. The app was designed with a focus on ease of use, ensuring that even non-tech-savvy users can seamlessly personalize their workspace."
                },
                {
                    type: 'gallery',
                    images: [
                        {image: "img/nest/hifi1.png", caption: "Final_Design_App", span: "full"}
                    ]
                },
                {
                    type: 'gallery',
                    images: [
                        {image: "img/nest/devicefin.png", caption: "Final_Design_Device", span: "full"}
                    ]
                },
                {
                    type: 'video',
                    url: "./img/nest/nestvid.mp4",
                    caption: "Prototype_Process",
                    aspectRatio: "4/3" 
                },
                {
                    type: 'text',
                    content: "Final Vision"
                },
                {
                    type: 'text',
                    content: "Our Google Nest redesign transforms the office into an adaptive ecosystem where every employee has a voice in shaping their environment. Picture an office where employees no longer have to argue over the thermostat—Nest's AI-driven system learns from preferences and finds an optimal balance for everyone. By combining individual preference with collective cooperation, the system ensures comfort, efficiency, and sustainability in the workplace of the future."
                },
                {
                    type: 'gallery',
                    images: [
                        {image: "img/nest/hifilook.png", caption: "LookBook", span: "full"}
                    ]
                }
            ],
            prev: {name: "Name Me", link: "project.html?project=nameme"},
            next: {name: "FLUX Website", link: "project.html?project=flux"}
        }
    };
    
    // Load project data
    const project = projectData[projectId];
    if (project) {
        loadProjectData(project);
    } else {
        console.error('Project not found:', projectId);
        // Handle missing project gracefully - redirect to home
        window.location.href = 'index.html';
    }
    
    // Add fade-in animation to content
    const content = document.querySelector('.content');
    if (content) {
        content.classList.add('fade-in');
    }
    
    // Handle back button hover state and click
    const backButton = document.querySelector('.back-link');
    if (backButton) {
        backButton.addEventListener('mouseenter', function() {
            this.style.opacity = '0.7';
        });
        
        backButton.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
        });
        
        // Optionally add transition effect when going back
        backButton.addEventListener('click', function(e) {
            // Allow default behavior but add transition effect
            document.body.classList.add('page-transition');
        });
    }
    
    // Simple navigation links - no authentication needed
    const navLinks = document.querySelectorAll('.project-navigation a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add transition effect
            document.body.classList.add('page-transition');
        });
    });
    
    // Function to load project data into the page
    function loadProjectData(project) {
        // Update page title
        document.title = `${project.title} - Minwook Shin`;
        
        // Update project title
        document.getElementById('project-title').textContent = project.title;
        
        // Update hero image
        const heroImage = document.getElementById('project-hero-image');
        heroImage.src = project.heroImage;
        heroImage.alt = `${project.title} Preview`;
        
        // Update project details
        document.getElementById('project-role').textContent = project.role;
        document.getElementById('project-timeline').textContent = project.timeline;
        document.getElementById('project-team').textContent = project.team;
        
        // Update project overview
        document.getElementById('project-overview').textContent = project.overview;
        
        // Get the content container where we'll add all sections
        const contentContainer = document.querySelector('.project-content');
        contentContainer.innerHTML = '';
        
        // Add all content sections in order
        if (project.contentSections) {
            project.contentSections.forEach((section, sectionIndex) => {
                if (section.type === 'text') {
                    // Create text section
                    const textSection = document.createElement('div');
                    textSection.className = 'project-text-section';
                    
                    const paragraph = document.createElement('p');
                    paragraph.textContent = section.content;
                    paragraph.className = 'project-paragraph';
                    
                    textSection.appendChild(paragraph);
                    contentContainer.appendChild(textSection);
                }
                else if (section.type === 'gallery') {
                    // Create gallery section
                    const gallerySection = document.createElement('div');
                    gallerySection.className = 'project-gallery';
                    
                    // Add all images in this gallery
                    section.images.forEach((item, imageIndex) => {
                        const figure = document.createElement('figure');
                        figure.className = 'gallery-item';
                        
                        // Add span classes if specified
                        if (item.span === 2) {
                            figure.classList.add('span-2');
                        } else if (item.span === 'full') {
                            figure.classList.add('full-width');
                        }
                        
                        const img = document.createElement('img');
                        img.className = 'gallery-image';
                        img.src = item.image;
                        img.alt = `${project.title} Detail - ${item.caption}`;
                        
                        const figcaption = document.createElement('figcaption');
                        figcaption.textContent = item.caption;
                        
                        figure.appendChild(img);
                        figure.appendChild(figcaption);
                        gallerySection.appendChild(figure);
                    });
                    
                    contentContainer.appendChild(gallerySection);
                }
                else if (section.type === 'video') {
                    // Create video section
                    const videoSection = document.createElement('div');
                    videoSection.className = 'project-video-section';
                    
                    // Create video container with responsive aspect ratio
                    const videoContainer = document.createElement('div');
                    videoContainer.className = 'video-container';
                    
                    // Set aspect ratio if specified
                    if (section.aspectRatio) {
                        videoContainer.style.aspectRatio = section.aspectRatio;
                    }
                    
                    // Create iframe for the video
                    const iframe = document.createElement('iframe');
                    iframe.src = section.url;
                    iframe.title = section.caption || 'Project video';
                    iframe.allowFullscreen = true;
                    iframe.frameBorder = "0";
                    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                    
                    // Add caption if available
                    videoContainer.appendChild(iframe);
                    videoSection.appendChild(videoContainer);
                    
                    if (section.caption) {
                        const caption = document.createElement('p');
                        caption.className = 'video-caption';
                        caption.textContent = section.caption;
                        videoSection.appendChild(caption);
                    }
                    
                    contentContainer.appendChild(videoSection);
                }
            });
        }
        
        // Update navigation links
        const prevLink = document.getElementById('prev-project-link');
        const nextLink = document.getElementById('next-project-link');
        
        prevLink.href = project.prev.link;
        document.getElementById('prev-project-name').textContent = `Previous: ${project.prev.name}`;
        
        nextLink.href = project.next.link;
        document.getElementById('next-project-name').textContent = `Next: ${project.next.name}`;
    }
});
