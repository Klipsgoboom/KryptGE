var spriteJson
var parsed
var spriteList
var spritesCount = 0

function startbtn() {
previewAllowed = true
preview(document.getElementById('codeInputST').value+ ' ' + document.getElementById('codeInputAST').value)
}

function updateSprites() {
    drawSquare();
}

var spriteJson = '{}';
var spritesCount = 0;

function squareSprite() {
    var x = parseInt(document.getElementById('Sx').value);
    var y = parseInt(document.getElementById('Sy').value);
    var width = parseInt(document.getElementById('Swidth').value);
    var height = parseInt(document.getElementById('Sheight').value);

    var spriteList = JSON.parse(spriteJson);
    
    var newSprite = {
        "x": x,
        "y": y,
        "width": width,
        "height": height
    };

    var spriteName = "sprite" + (spritesCount + 1); // Generate sprite name like "sprite1", "sprite2", etc.
    spriteList[spriteName] = newSprite;
    
    spriteJson = JSON.stringify(spriteList);
    spritesCount++;
}
