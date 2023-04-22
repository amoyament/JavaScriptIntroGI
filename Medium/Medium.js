//Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.

//First I need to create and define the prompt. 
let speakingVoice = prompt('Please write a message in the text box below, and I will tell you if you are shouting (typing in all caps), whispering (typing in all lowercase), or neither (talking normally).')

//Now I need to create an if esle statement to return an answer to the user
if(speakingVoice === speakingVoice.toUpperCase()){ // using === .toUpperCase will determine if the user is typing all uppercase
    document.write("Shhhhh... You're shouting."); //Will display on html page
    console.log("Shhhhh... You're shouting.");//Will display in console
} else if(speakingVoice === speakingVoice.toLowerCase()){ //// using === .toLowerCase will determine if the user is typing all lowercase
    document.write("I can't hear you. You're whispering.");
    console.log("I can't hear you. You're whispering.");
} else{
    document.write("Thank you for speaking normally!")
    console.log("Thank you for speaking normally!")
}

