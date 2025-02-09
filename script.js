const bgAnimation = document.getElementById("bgAnimation");


const numOfColoredBOX = 1500;

for (let i = 0; i < numOfColoredBOX; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add("colorBox");
    bgAnimation.append(colorBox);
}