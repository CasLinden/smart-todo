function pencilDraw (strokeClass, path, target, width) {
    let newStroke = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    newStroke.setAttributeNS(null, 'class', strokeClass);
    newStroke.setAttributeNS(null, 'd', path);
    newStroke.setAttributeNS(null, 'fill', 'none');
    newStroke.setAttributeNS(null, 'fill-rule', 'evenodd');
    newStroke.setAttributeNS(null, 'opacity', '.7');
    newStroke.setAttributeNS(null, 'stroke', '#000000');
    newStroke.setAttributeNS(null, 'stroke-linecap', 'round');
    newStroke.setAttributeNS(null, 'stroke-linejoin', 'round');
    newStroke.setAttributeNS(null, 'stroke-width', width);
    target.appendChild(newStroke);
}

function addSvg (target) {
let newSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
let templateSvg = `xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="23px" stroke-miterlimit="10" style="fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;" version="1.1" width="24px" xml:space="preserve"`
    templateSvg.split(" ").forEach(element => {
    let attrVal = element.split("=");
    let attr = attrVal[0];
    let val = attrVal[1].slice(1, -1);
    newSvg.setAttribute('data-key', `${target.getAttribute('data-key')}`)
    newSvg.setAttribute(attr, val);
    newSvg.setAttribute('viewBox', '0 0 24 24');
    });
target.appendChild(newSvg);
};

function drawCheck (target) {
    let g = document.createElementNS("http://www.w3.org/2000/svg", 'g');
    pencilDraw('checkStroke', "M 1.29617 13.8888 C 1.41761 13.9495 2.17185 15.3989 2.28006 15.5883 C 3.01946 16.8822 3.6967 18.4823 4.00933 19.9413 C 4.06533 20.2026 4.44421 21.9687 4.63544 21.9687 C 4.79206 21.9687 5.26008 21.0317 5.351 20.8953 C 5.9805 19.9511 6.78104 19.0651 7.52749 18.212 C 10.8136 14.4564 14.1421 10.7744 17.5751 7.15066 C 18.648 6.01816 19.6928 4.85404 20.7951 3.75176 C 20.8714 3.67546 21.5747 2.95117 21.6299 3.00638 C 21.6702 3.0466 21.6363 3.32374 21.6598 3.39398", g, 4.1452);
    addSvg(target);
    let targetSvg = target.querySelector('svg');
    targetSvg.appendChild(g)
};

export {pencilDraw, addSvg, drawCheck}
