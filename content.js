//@ts-check
background_color_dark(["ytp-left-controls", "ytp-right-controls"]);

setInterval(() => {
    background_color_dark(["ytp-left-controls", "ytp-right-controls"]);
}, 30 * 1000);

function background_color_dark(clsnames)
{
    let dv = document.defaultView;
    if(dv) {
        for(let clsname of clsnames) {
            let divs = document.getElementsByClassName(clsname);
            if(divs) {
                for(let div_ of divs) {
                    for(let btn of div_.children) {
                        btn.style.backgroundColor = "rgb(0 0 0 / .5)";
                    }
                }
            }
        }
    }
}
