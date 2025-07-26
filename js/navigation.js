document.addEventListener('DOMContentLoaded', (event) => {

    // ***************************************************************** //
    // Main section display control from navbar
    // ***************************************************************** //

    // Navigation buttons
    const homeButton = document.getElementById('homeButton');
    const servicesButton = document.getElementById('servicesButton');
    const whoWeAreButton = document.getElementById('whoWeAreButton');
    const faqsButton = document.getElementById('faqsButton');
    const cvButton = document.getElementById('cvButton');

    // Sections related to navigation buttons
    const homeContainer = document.getElementById('homeContainer');
    const servicesContainer = document.getElementById('servicesContainer');
    const whoWeAreContainer = document.getElementById('whoWeAreContainer');
    const faqsContainer = document.getElementById('faqsContainer');
    const cvContainer = document.getElementById('cvContainer');
    const allSectionNodes = [homeContainer, servicesContainer, whoWeAreContainer, faqsContainer, cvContainer];

    // Scrollable area between header and footer
    // ??? is this obsolete since it's only col2 which is now scrollable?
    const centerSection = document.getElementById('centerSection');

    homeButton.addEventListener('click', ()=>{
        console.log('homeButton clicked.');
        displaySection(homeContainer);
    });

    
    servicesButton.addEventListener('click', ()=>{
        console.log('servicesButton clicked.');
        displaySection(servicesContainer);
    });

    whoWeAreButton.addEventListener('click', ()=>{
        console.log('whoWeAreButton clicked.');
        displaySection(whoWeAreContainer);
    });

    faqsButton.addEventListener('click', ()=>{
        console.log('faqsButton clicked.');
        displaySection(faqsContainer);
    });

    cvButton.addEventListener('click', ()=>{
        console.log('cvButton clicked.');
        displaySection(cvContainer);
    })

    function displaySection(sectionNode){
        // remove all sections from display then display sectionNode
        console.log('displaying ', sectionNode);
        allSectionNodes.forEach(removeActive);
        sectionNode.classList.add("active");
        // Make sure page is scrolled to top
        centerSection.scrollIntoView();
    }

    function removeActive(node){
        node.classList.remove("active");
    }

    // ********************************************************************************** //
    // statBox animation display; the target number is held in the html tag's data-target //
    // ********************************************************************************** //

    const statNodes = document.querySelectorAll('.statBox span');

    function countUp(node, number) {
        let counter = 0;
        const interval = setInterval(() => {
            node.innerHTML = counter;
            counter++;
            if (counter > number) {
                clearInterval(interval);
            }
        }, 10); // You can tweak the speed here
    }

    statNodes.forEach(entry => {
        if (entry.isIntersecting) {
            const node = entry.target;
            countUp(node, targetNumber);
            observer.unobserve(node); // Optional: stop observing after it animates
        }
    });

    const observer = new IntersectionObserver((statNodes, observer) => {
        statNodes.forEach(entry => {
            if (entry.isIntersecting){
                const node = entry.target;
                const target = parseInt(node.dataset.target, 10);
                countUp(node, target);
                observer.unobserve(node);
            }
        });
    }, {
        threshold: 0.5 // 50% of element must be visible
    });

    statNodes.forEach(node => {
        observer.observe(node);
    });

    // ****************************************************** //
    // WhoWeAre Page 
    // ****************************************************** //

    function getRandomInteger(min, max) {
        min = Math.ceil(min); // Ensures min is an integer
        max = Math.floor(max); // Ensures max is an integer
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    
    // ***************************************************************** //
    // FAQ Page: to show or hide an FAQ in response to user 'click'
    // ***************************************************************** //

    // Dropdown buttons
    const dropdown1 = document.getElementById('dropdown1');
    const dropdown2 = document.getElementById('dropdown2');
    const dropdown3 = document.getElementById('dropdown3');
    const dropdown4 = document.getElementById('dropdown4');
    const dropdown5 = document.getElementById('dropdown5');


    // Dropdown content related to dropdown buttons
    const dropdown1Content = document.getElementById('dropdown1Content');
    const dropdown2Content = document.getElementById('dropdown2Content');
    const dropdown3Content = document.getElementById('dropdown3Content');
    const dropdown4Content = document.getElementById('dropdown4Content');
    const dropdown5Content = document.getElementById('dropdown5Content');

    dropdown1.addEventListener('click', () => {
        console.log("dropdown1 eventListener triggered." );
        toggleDropdown(dropdown1Content);
    }) // end of dropdown1 eventListener
    dropdown2.addEventListener('click', () => {
        console.log("dropdown2 eventListener triggered." );
        toggleDropdown(dropdown2Content);
    }) // end of dropdown1 eventListener
    dropdown3.addEventListener('click', () => {
        console.log("dropdown3 eventListener triggered." );
        toggleDropdown(dropdown3Content);
    }) // end of dropdown1 eventListener
    dropdown4.addEventListener('click', () => {
        console.log("dropdown4 eventListener triggered." );
        toggleDropdown(dropdown4Content);
    }) // end of dropdown1 eventListener
    dropdown5.addEventListener('click', () => {
        console.log("dropdown5 eventListener triggered." );
        toggleDropdown(dropdown5Content);
    }) // end of dropdown1 eventListener
    dropdown5.addEventListener('transitionend', () => {
        if (dropdown5.classList.contains('active')) {
            dropdown5.style.maxHeight = 'none'; // allow content to grow if it changes
        }
    });

    function toggleDropdown(node) {
        if (node.classList.contains('active')) {
            // Collapse
            node.style.maxHeight = node.scrollHeight + 'px'; // Set to current height to enable transition
            node.offsetHeight; // force reflow
            node.style.maxHeight = '0';
            node.style.opacity = '0';
            node.classList.remove('active');
        } else {
            // Expand
            node.style.maxHeight = node.scrollHeight + 'px';
            node.style.opacity = '1';
            node.classList.add('active');
        }
    }

    // *********************************************** //
    // **************** Services page **************** //
    // *********************************************** //

    const servicesDropdown1 = document.getElementById('servicesDropdown1');
    const servicesDropdown2 = document.getElementById('servicesDropdown2');
    const servicesDropdown3 = document.getElementById('servicesDropdown3');
    const servicesDropdown4 = document.getElementById('servicesDropdown4');
    const servicesDropdown5 = document.getElementById('servicesDropdown5');
    const servicesDropdown6 = document.getElementById('servicesDropdown6');
    const servicesDropdown7 = document.getElementById('servicesDropdown7');
    const servicesDropdown8 = document.getElementById('servicesDropdown8');
    const servicesDropdown9 = document.getElementById('servicesDropdown9');

    const servicesDropdown1Content = document.getElementById('servicesDropdown1Content');
    const servicesDropdown2Content = document.getElementById('servicesDropdown2Content');
    const servicesDropdown3Content = document.getElementById('servicesDropdown3Content');
    const servicesDropdown4Content = document.getElementById('servicesDropdown4Content');
    const servicesDropdown5Content = document.getElementById('servicesDropdown5Content');
    const servicesDropdown6Content = document.getElementById('servicesDropdown6Content');
    const servicesDropdown7Content = document.getElementById('servicesDropdown7Content');
    const servicesDropdown8Content = document.getElementById('servicesDropdown8Content');
    const servicesDropdown9Content = document.getElementById('servicesDropdown9Content');

    servicesDropdown1.addEventListener('click', () => {
        console.log("servicesDropdown1 eventListener triggered." );
        toggleDropdown(servicesDropdown1Content);
    }); // end of servicesDropdown1 eventListener
    servicesDropdown2.addEventListener('click', () => {
        console.log("servicesDropdown2 eventListener triggered." );
        toggleDropdown(servicesDropdown2Content);
    }) // end of servicesDropdown2 eventListener
    servicesDropdown3.addEventListener('click', () => {
        console.log("servicesDropdown3 eventListener triggered." );
        toggleDropdown(servicesDropdown3Content);
    }) // end of servicesDropdown3 eventListener
    servicesDropdown4.addEventListener('click', () => {
        console.log("servicesDropdown4 eventListener triggered." );
        toggleDropdown(servicesDropdown4Content);
    }) // end of servicesDropdown4 eventListener
    servicesDropdown5.addEventListener('click', () => {
        console.log("servicesDropdown5 eventListener triggered." );
        toggleDropdown(servicesDropdown5Content);
    }) // end of servicesDropdown5 eventListener
    servicesDropdown6.addEventListener('click', () => {
        console.log("servicesDropdown6 eventListener triggered." );
        toggleDropdown(servicesDropdown6Content);
    }) // end of servicesDropdown6 eventListener
    servicesDropdown7.addEventListener('click', () => {
        console.log("servicesDropdown7 eventListener triggered." );
        toggleDropdown(servicesDropdown7Content);
    }) // end of servicesDropdown7 eventListener
    servicesDropdown8.addEventListener('click', () => {
        console.log("servicesDropdown8 eventListener triggered." );
        toggleDropdown(servicesDropdown8Content);
    }) // end of servicesDropdown8 eventListener
    servicesDropdown9.addEventListener('click', () => {
        console.log("servicesDropdown9 eventListener triggered." );
        toggleDropdown(servicesDropdown9Content);
    }) // end of servicesDropdown9 eventListener

    const swap1 = document.querySelector('.swap1');
    const swap2 = document.querySelector('.swap2');
    let showingFirst = true;
  
    function toggleSwap() {
      if (showingFirst) {
        swap1.classList.remove('show');
        swap2.classList.add('show');
      } else {
        swap2.classList.remove('show');
        swap1.classList.add('show');
      }
      showingFirst = !showingFirst;
    }
  
    // Initialize first visible element
    swap1.classList.add('show');
  
    // Start alternating every 4 seconds
    setInterval(toggleSwap, 4000);

    // On first view, make sure page is scrolled to top
    window.scrollTo(0, 0);

}) // end of DOMContentLoaded