document.addEventListener('DOMContentLoaded', (event) => {
    // ================== //
    // Constants
    // ================== //
    const homeButton = document.getElementById('homeButton');
    const servicesButton = document.getElementById('servicesButton');
    const faqsButton = document.getElementById('faqsButton');

    const homeSection = document.getElementById("homeSection");
    const servicesSection = document.getElementById('servicesSection');
    const faqsSection = document.getElementById('faqsSection');
    const allSectionNodes = [homeSection, servicesSection, faqsSection];
    // ================== //
    // EventListeners
    // ================== //
    homeButton.addEventListener('click', () => {
        console.log("homeButton eventListener triggered." );
        displaySection(homeSection);
    }) // end of homeButton eventListener

    servicesButton.addEventListener('click', () => {
        console.log("servicesButton eventListener triggered." );
        displaySection(servicesSection);

    }) // end of homeButton eventListener

    faqsButton.addEventListener('click', () => {
        console.log("faqsButton eventListener triggered." );
        displaySection(faqsSection);
    }) // end of homeButton eventListener

    // ================== //
    // Functions
    // ================== //

    function displaySection(sectionNode){
        // remove all sections from display then display sectionNode
        console.log('displaying ', sectionNode);
        allSectionNodes.forEach(removeActive);
        sectionNode.classList.add("active");
    }

    function removeActive(node){
        node.classList.remove("active");
    }

    // ================== //
    // Startup script
    // ================== //

    displaySection(homeSection);
    
});