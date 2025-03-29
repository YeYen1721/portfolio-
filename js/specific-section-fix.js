document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    if (typeof Portfolio === 'undefined' || !Portfolio.carousel) {
      console.error("Portfolio object not available");
      return;
    }

    console.log("Installing selective section fix...");
    
    const originalExpandCard = Portfolio.carousel.expandCard;
    
    Portfolio.carousel.expandCard = function(card, project) {
      if (project.title === "Name Me" || project.id === 1) {
        console.log("Applying selective section fix...");
        
        const validSections = {};
        if (project.sections && Array.isArray(project.sections)) {
          project.sections.forEach(section => {
            if (section.title) {
              validSections[section.title] = true;
            }
          });
        }
        
        console.log("Valid sections from data:", Object.keys(validSections));
        
        originalExpandCard.call(this, card, project);
        
        setTimeout(function() {
          const expandedCard = document.querySelector('.expanded-card');
          if (!expandedCard) return;
          
          const sections = expandedCard.querySelectorAll('.project-section');
          sections.forEach(section => {
            const titleEl = section.querySelector('.section-title');
            if (titleEl) {
              const title = titleEl.textContent;
              if (!validSections[title]) {
                console.log(`Removing invalid section: ${title}`);
                section.parentNode.removeChild(section);
              }
            }
          });
          
          const visibleSections = {};
          expandedCard.querySelectorAll('.section-title').forEach(titleEl => {
            visibleSections[titleEl.textContent] = true;
          });
          
          Object.keys(validSections).forEach(title => {
            if (!visibleSections[title]) {
              console.log(`Section missing from card: ${title}`);
              const sectionData = project.sections.find(s => s.title === title);
              if (sectionData) {
                addSectionToCard(expandedCard.querySelector('.expanded-card-content'), sectionData);
              }
            }
          });
        }, 500);
      } else {
        originalExpandCard.call(this, card, project);
      }
    };
    
    function addSectionToCard(container, sectionData) {
      if (!container || !sectionData) return;
      
      console.log(`Adding section: ${sectionData.title}`);
      
      const sectionDiv = document.createElement('div');
      sectionDiv.className = 'project-section';
      
      let html = `
        <h2 class="section-title">${sectionData.title}</h2>
        <div class="section-content">${sectionData.content || ' '}</div>
      `;
      
      if (sectionData.image && sectionData.image.src) {
        html += `
          <div class="section-image ${sectionData.image.size || 'full'}" style="margin:30px 0;overflow:hidden;border-radius:16px;border:1px solid rgba(151,174,118,0.1);">
            <img src="${sectionData.image.src}" alt="${sectionData.image.alt || sectionData.title}" style="width:100%;height:auto;object-fit:contain;display:block;">
          </div>
        `;
      }
      
      if (sectionData.gallery && Array.isArray(sectionData.gallery) && sectionData.gallery.length > 0) {
        html += `<div class="image-grid">`;
        sectionData.gallery.forEach(image => {
          html += `
            <img src="${image.src}" alt="${image.alt || 'Gallery image'}" style="width:100%;height:auto;object-fit:contain;border-radius:12px;border:1px solid rgba(151,174,118,0.1);">
          `;
        });
        html += `</div>`;
      }
      
      sectionDiv.innerHTML = html;
      container.appendChild(sectionDiv);
    }
    
    console.log("Selective section fix installed");
  }, 500);
});