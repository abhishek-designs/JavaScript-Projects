// Creating the TypeWriter constructor
const TypeWriter = function(txtElement, words, waitTime)
{
    this.txtElement = txtElement; // span element in which words are written
    this.words = words; // words fetched form the data-words attribute in HTML
    this.waitTime = parseInt(waitTime,10); // initial pause time at which the effect being stopped
    this.txt = ''; // every single letter of the word written or deleted
    this.wordIndex = 0; // the index number of the word in the array
    this.type(); // the type function which calls when the TypeWriter initializes
    this.isDeleting = false; // it checks wether the words are deleting or not initially it is false
}

TypeWriter.prototype.type = function()
{
    // Getting the current index of the word
    const current = this.wordIndex % this.words.length;
    
    // Fetching the whole word at the current index
    const fullTxt = this.words[current];
    
    // Now executing the operation according to the deletion state
    if(this.isDeleting) //if the words are deleting
    {
        // remove a character
        // Now fetching the single letters of the word into the txt variable
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    }
    else // if the words are not deleting
    {
        // add a character
        // Now fetching the single letters of the word into the txt variable
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Now adjusting the speed of typing according to writing/deletion
    let typeSpeed = 200;
    const cursor = document.querySelector('.txt');

    if(this.isDeleting) // if the words are deleting 
    {
        typeSpeed/= 2; // the speed increases when deleting
    }
    if(!this.isDeleting && this.txt === fullTxt) // if the words are not deleting and also the words get fully typed
    {
        // In this condition there is a pause when the words get fully typed before the deletion
        typeSpeed = this.waitTime;
        this.isDeleting = true;
        
    }
    else if(this.isDeleting && this.txt === '') // if the words get fully deleted
    {
        this.isDeleting = false; // now the word is not deleting

        // In this condition we have to switch to the next word
        this.wordIndex++; // next word index
        typeSpeed = 200; //default speed of typing

    }
    
    // Inserting the text in the span of window
    this.txtElement.innerHTML = '<span class="txt">'+this.txt+'</span>';

    // the below function will make the TypeWriter effect repeteadly
    setTimeout(() => {this.type();},typeSpeed);
}

// below function get executed when the webpage gets loaded
document.addEventListener('DOMContentLoaded',init);

function init()
{
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const waitTime = txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement, words, waitTime);
}