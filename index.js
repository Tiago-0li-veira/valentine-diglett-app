

// only starting the program once the DOM is loaded
window.addEventListener("DOMContentLoaded",() => {

    // getting button dimensions
    let btnHeight = document.querySelector(".noBtn").offsetHeight;
    let btnWidth = document.querySelector(".noBtn").offsetWidth;
    
    // getting max button positions
    let maxHeight = document.querySelector(".container2").offsetHeight - btnHeight;
    let maxWidth = document.querySelector(".container2").offsetWidth - btnWidth;

    // update the variables above on window resizing
    window.addEventListener("resize",() => {

        // updating button dimensions
        btnHeight = document.querySelector(".noBtn").offsetHeight;
        btnWidth = document.querySelector(".noBtn").offsetWidth;

        // updating max button positions
        maxHeight = document.querySelector(".container2").offsetHeight - btnHeight;
        maxWidth = document.querySelector(".container2").offsetWidth - btnWidth;

    });
    

    // randomizing the position of the button
    const getPositions = () => {
        let top = Math.floor(Math.random() * (maxHeight + 1)) + "px";
        let left = Math.floor(Math.random() * (maxWidth + 1)) + "px";
        if (top < 2 * btnHeight && left < 0.5 * maxWidth) return getPositions();
        return [top,left];
    };

    // DOM elements
    const noBtn = document.querySelector(".noBtn");
    const yesBtn = document.querySelector(".yesBtn");
    const anger = document.querySelector(".anger");
    const diglett = document.querySelector(".diglett");
    const proposal = document.querySelector(".proposal");
    const digGif = document.querySelector(".digGif");

    // funny variables
    let count = 0;
    let msgArr = [
        "I think they'd really enjoy it if you said yes tho . . .",
        "Are you really really sure?",
        "but how bad could it be?",
        "I know they stink but give it a try T-T",
        "Don't you want to think about it just a bit more?",
        "Just to remind you, they can make a mean ass carbonara",
        "It ain't even that deep fr",
        "You're a bad egg if you click 'no' btw",
        "Just give it a try ;)",
        "Maybe they're your soulmate, who knows?"
    ]

    const handleNoClick = () => {

        // just making sure
        console.log("you clicked me!");

        //setting the position of the button
        noBtn.style.right = "0px";
        let positions = getPositions();
        noBtn.style.top = positions[0];
        noBtn.style.left = positions[1];
        
        
        // setting anger
        if(count <= 15){
            count++;
            if(count < 15){
                let i = Math.floor(Math.random() * msgArr.length);
                proposal.innerHTML = msgArr[i];
            }
            if(count < 9){
                anger.style.height = count + "dvh";
            }
            if(count == 15) {
                diglett.src = "images/sadDiglett.png";
                anger.style.height = 0;
                proposal.innerHTML = "PLEASE PLEASE PLEASE PLEASE PLEASE"
            }
        }
    }

    noBtn.addEventListener("click", handleNoClick);

    yesBtn.addEventListener("click",() => {
        anger.style.display = "none";
        proposal.innerHTML = "Yippee! See ya pookie! ^_____^";
        diglett.src = "images/diglett-love.png";
        digGif.style.height = "auto";
        digGif.play();

        // hide the 'Yes' button
        yesBtn.style.display = "none";

        // hide and deactivate the 'No' button
        noBtn.removeEventListener("click", handleNoClick);
        noBtn.style.display = "none";


    })

    

});