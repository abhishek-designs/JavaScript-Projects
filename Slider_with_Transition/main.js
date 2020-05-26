const slider = document.querySelector('.slider').children;

// controls
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

// indicator container
const indicator = document.querySelector('.indicator');

// index number
let index = 0;

// initial slide when page loads
slider[index].classList.add('active');

// creating the indicator
function createIndicator()
{
    for(let i=0; i<slider.length; i++)
    {
        const circle = document.createElement('div');
        circle.id = i;
        circle.setAttribute("onclick","indicateSlide(this)");
        if(i == 0)
        {
            circle.classList.add('current');
        }
        indicator.appendChild(circle);
    }
}

// Adding functionality to indicators
function indicateSlide(element)
{
    changeSlide(element.id);
    updateSlide(element.id);
    
}

// state of indicators changes when page changes
function updateSlide(index)
{
    for(let i=0; i<indicator.children.length; i++)
    {
        indicator.children[i].classList.remove('current');
    }
    indicator.children[index].classList.add('current');
}


// calling the createIndicator() function
createIndicator();

// Adding functionality to next btn
nextBtn.addEventListener('click',nextSlide);

function nextSlide(){
    // setting the index number
    if(index < slider.length-1)
    {
        index++;
    }
    else
    {
        index = 0;
    }

    changeSlide(index);
    updateSlide(index);
}

// Adding functionality to prev btn
prevBtn.addEventListener('click',prevSlide);

function prevSlide(){
    // Setting index number
    if(index == 0)
    {
        index = slider.length-1;
    }
    else
    {
        index--;
    }

    changeSlide(index);
    updateSlide(index);

}

// Changing the slides
function changeSlide(index)
{
    for(let i=0; i<slider.length; i++)
    {
        slider[i].classList.remove('active');
    }
    slider[index].classList.add('active');
}

// Automatic changing of slide
function autoPlay()
{
    nextSlide();
}

let timer = setInterval(autoPlay,4000);
