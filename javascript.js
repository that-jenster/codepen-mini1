let i = 0;
let text = "Quote of the Day: We have to walk in a way that we only print peace and serenity on the Earth. Walk as if you are kissing the Earth with your feet. - Thich Nhat Hanh";
let speed = 40;

const typeWriter = () => {
    if (i < text.length) {
        document.getElementById("textWrite").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}