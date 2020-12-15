function circlize(e, options){
    let defaults = {
        radius: 100,
        percentage: 50,
        usePercentage: true,
        useAnimations: true,
        useGradient: true,
        background: "rgba(20,20,20,0.5)",
        foreground: "#1a1a1a",
        stroke: 20,
        duration: 1000,
        min: 100,
        max: 100,
        gradientColors: ["#f0f0f0", "red", "#f0f0f0"]
    };
    let o = Object.assign({}, defaults, options);
    let perc, box, x, y, html, context, cnv, ctn, speed, counter=1, fore, gradient;
    box = (Math.PI*(o.radius));
    x = box/2;
    y = box/2;
    speed = 1000/60;
    perc = o.usePercentage ? o.percentage : o.min;
    html = "<canvas class=\"circle\" width="+box+" height="+box+"></canvas>" + 
            "<canvas class=\"circle\" width="+box+" height="+box+"></canvas>" +
            "<div class=\"percentage\">"+ perc +"</div>";
    e.innerHTML = html;
    e.classList.add("canvasized");
    cnv = e.childNodes;
    context = cnv[0].getContext("2d");
    context.translate(0, box);
    context.rotate(-Math.PI / 2);
    gradient = context.createLinearGradient(0,0,o.radius*Math.PI,0);
    gradient.addColorStop(0, o.gradientColors[0]);
    gradient.addColorStop(0.5, o.gradientColors[1]);
    gradient.addColorStop(1, o.gradientColors[2]);
    fore = o.useGradient ? gradient : o.foreground;
    if(o.useAnimations){
        let timerId = setInterval(function() {
            counter++;
            if(o.usePercentage){
                cnv[2].innerHTML = counter + "%";
                context.beginPath();
                context.arc(x, y, o.radius, (2-(counter/100)*2)*Math.PI, 2*Math.PI);
                context.fillStyle = "transparent";
                context.fill();
                context.strokeStyle = fore;
                context.lineWidth = o.stroke;
                context.stroke();
            }else{
                cnv[2].innerHTML = (counter * 10)/10 + "/" + (o.max * 10)/10;
                context.beginPath();
                context.arc(x, y, o.radius, (2-(counter/o.max)*2)*Math.PI, 2*Math.PI);
                context.fillStyle = "transparent";
                context.fill();
                context.strokeStyle = fore;
                context.lineWidth = o.stroke;
                context.stroke();
            }
            if (counter === perc){
                clearInterval(timerId);
            }
        },speed);
    }else{
        if(o.usePercentage){
            cnv[2].innerHTML = o.percentage + "%";
            context.beginPath();
            context.arc(x, y, o.radius, (2-(o.percentage/100)*2)*Math.PI, 2*Math.PI);
            context.fillStyle = "transparent";
            context.fill();
            context.strokeStyle = fore;
            context.lineWidth = o.stroke;
            context.stroke();
        }else{
            cnv[2].innerHTML = (o.min * 10)/10 + "/" + (o.max * 10)/10;
            context.beginPath();
            context.arc(x, y, o.radius, (2-(o.min/o.max)*2)*Math.PI, 2*Math.PI);
            context.fillStyle = "transparent";
            context.fill();
            context.strokeStyle = fore;
            context.lineWidth = o.stroke;
            context.stroke();
        }
    }
    ctn = cnv[1].getContext("2d");
	ctn.beginPath();
	ctn.arc(x, y, o.radius, 0*Math.PI, 2*Math.PI);
	ctn.fillStyle = "transparent";
	ctn.fill();
	ctn.strokeStyle = o.background;
	ctn.lineWidth = o.stroke;
	ctn.stroke();
}
