//Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.

// prompt('Please write a message in the text box below, and I will tell you if you are shouting (typing in all caps), whispering (typing in all lowercase), or neither (talking normally).')

let speakingVoice = prompt('Please write a message in the text box below, and I will tell you if you are shouting (typing in all caps), whispering (typing in all lowercase), or neither (talking normally).')

if(speakingVoice === speakingVoice.toUpperCase()){
    document.write("Shhhhh... You're shouting.");
    console.log("Shhhhh... You're shouting.");
} else if(speakingVoice === speakingVoice.toLowerCase()){
    document.write("I can't hear you. You're whispering.");
    console.log("I can't hear you. You're whispering.");
} else{
    document.write("Thank you for speaking normally!")
}


//if x return...
// if voice === 'loud' return



// document.write('Shhh.. you are shouting' )