function VisualTree(canvas) {
    this.canvas = canvas;
    this.binaryTree = new BinaryTree();
    this.R = 20;
    this.W = screen.width * 2;
    this.H = screen.height * 2;
    this.clearScreen();

}

VisualTree.prototype.getPosition = function (entry) {
    let generation = 0;
    let index = 0;
    while (entry.parent !== null) {
        let childNode = entry;
        entry = entry.parent;
        generation++;
        if (entry.right == childNode) {
            index += Math.pow(2, generation - 1);
        }
    }
    return {
        generation: generation,
        index: index
    };
};

VisualTree.prototype.drawNode = function (entry) {
    let flag = true;
    var position = this.getPosition(entry);
    let x = this.W * (position.index + 1) / (Math.pow(2, position.generation) + 1);
    let y = this.R + position.generation * 4 * this.R;
    let animationIndex = 0;
    let animationLength = 30;
    let obj = this;
    let delay = 50;
    setTimeout(function tick(obj) {

        let g = (255 * animationIndex) / (animationLength - 1);
        let r = 255 - g;
        obj.displayElement(x, y, entry.value, RGB2HTML(r, g, 0));
        animationIndex++;
        if (animationIndex < animationLength) {
            setTimeout(tick, delay, obj);
        }
    }, delay, obj);
};

VisualTree.prototype.insert = function (value) {
    let entry = this.binaryTree.insert(value);
    this.drawNode(entry);
};

VisualTree.prototype.toArray = function () {

    let result = [];
    let entry = this.binaryTree.root;
    let traverse = function (entry) {
        entry.left && traverse(entry.left);
        result.push(entry.value);
        entry.right && traverse(entry.right);
    };
    traverse(entry);
    return result;
};

VisualTree.prototype.toString = function () {

    let arrEntryValue = this.toArray();
    let outEntryString = '';

    arrEntryValue.forEach(function (element) {
        outEntryString += element + ", ";
    });
    outEntryString = outEntryString.slice(0, -2);
    return outEntryString;
};

VisualTree.prototype.clear = function () {
    this.binaryTree.root = null;
    this.clearScreen();
};

VisualTree.prototype.find = function (value) {
    let flag = true;
    if (flag) {
        let entry = this.binaryTree.find(value);
        if (entry === null) {
           // alert('Заданного значения нет в дереве!');
            return flag = false;

        }
        this.drawNode(entry);
    }
    return flag;
};

VisualTree.prototype.clearScreen = function () {
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, this.W, this.H);
};

VisualTree.prototype.displayElement = function (x, y, value, fillColor) {
    context.fillStyle = fillColor;
    context.beginPath();
    context.arc(x - this.R, y, this.R, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();
    context.fillStyle = "#000000";
    context.font = '15pt headerCustomFont';
    let str = value + '';
    let delta = (str.length - 1) * 5;
    context.fillText(str, x - this.R - 4 - delta, y + 7);

};

VisualTree.prototype.remove = function (value) {
    let entry = this.binaryTree.find(value);

    var position = this.getPosition(entry);
    let x = this.W * (position.index + 1) / (Math.pow(2, position.generation) + 1);
    let y = this.R + position.generation * 4 * this.R;
    let animationIndex = 0;
    let animationLength = 30;
    let obj = this;
    let delay = 50;
    setTimeout(function tick(obj) {
        let r = 255;
        let g = (255 * animationIndex) / (animationLength - 1);
        let b = g;
        obj.displayElement(x, y, entry.value, RGB2HTML(r, g, b));
        animationIndex++;
        if (animationIndex < animationLength) {
            setTimeout(tick, delay, obj);
        } else {
            redrawTree.call(obj);
        }
    }, delay, obj);

    function redrawTree() {
        this.clearScreen();
        let delRes = this.binaryTree.remove(value);
        if (this.binaryTree.root !== null) {
            redrawRec.call(this, this.binaryTree.root);
        }

        function redrawRec(entry) {
            var position = this.getPosition(entry);
            let x = this.W * (position.index + 1) / (Math.pow(2, position.generation) + 1);
            let y = this.R + position.generation * 4 * this.R;
            this.displayElement(x, y, entry.value, "#00FF00");
            if (entry.left !== null) {
                redrawRec.call(this, entry.left);
            }
            if (entry.right !== null) {
                redrawRec.call(this, entry.right);
            }
        }

        for (let i = 0; i < delRes.movedArr.length; i++) {
            this.drawNode(delRes.movedArr[i]);
        }

    }

};

function RGB2HTML(red, green, blue) {
    var rh = ("00" + Math.round(red).toString(16)).slice(-2);
    var gh = ("00" + Math.round(green).toString(16)).slice(-2);
    var bh = ("00" + Math.round(blue).toString(16)).slice(-2);

    return '#' + rh + gh + bh;
}
