define(
    ['ko'], function(ko) {
    var color = function(color) {
        this.name = color;
        this.color = color;
    };

    return function() {
        return {
            newColor: 'purple',
            colors: ko.observableArray([
                new color('blue'),
                new color('green'),
                new color('yellow'),
                new color('magenta')
            ]),
            addColor: function() {
                console.log('Adding a new color: ' + this.newColor);
                this.colors.push(new color(this.newColor));
            }
        }
    };
});