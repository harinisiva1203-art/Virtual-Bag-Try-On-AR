// @input SceneObject bag1
// @input SceneObject bag2

script.bag1.enabled = true;
script.bag2.enabled = false;

var showingBag1 = true;

var touchEvent = script.createEvent("TouchStartEvent");

touchEvent.bind(function () {

    showingBag1 = !showingBag1;

    script.bag1.enabled = showingBag1;
    script.bag2.enabled = !showingBag1;

    print("Switched Bag");

});