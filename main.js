$.getScript('node_modules/uikit/dist/js/uikit.min.js');
$.getScript('node_modules/uikit/dist/js/uikit-icons.min.js');


Vue.component('todo-item', {
    template: '<li>This is a todo</li>'
});

Vue.component('todo-item1', {
    props: ['todo'],
    template: '<button class="uk-button uk-button-default">{{ todo.text }}</button>'
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        seen: true,
        a: 69,
        dom: '<span style="color: red">PAYAM HOROOFCHIN</span>',
        todos: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ],
        firstName: 'Foo',
        lastName: 'Bar',
        options1: [
            "value1",
            "value2",
            "value3"
        ],
        options2: [{
            text: "name1",
            value: "value1"
        }, {
            text: "name2",
            value: "value2"
        }, {
            text: "name3",
            value: "value3"
        }],
        options3: [{
            label: "group1",
            options: [{
                text: "name1",
                value: "value1"
            }, {
                text: "name2",
                value: "value2"
            }, {
                text: "name3",
                value: "value3"
            }]
        }, {
            label: "group2",
            options: [{
                text: "name4",
                value: "value4"
            }, {
                text: "name5",
                value: "value5"
            }, {
                text: "name6",
                value: "value6"
            }]
        }],
        result1: "",
        result2: "",
        result3: ""
    },
    computed: {
        fullName: {
            // getter
            get: function () {
                return this.firstName + ' ' + this.lastName
            },
            // setter
            set: function (newValue, place) {
                if (place === 'name') {
                    this.firstName = newValue;
                } else if (place === 'family') {
                    this.lastName = newValue;
                } else {
                    this.firstName = newValue;
                }
            }
        },
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('');
        }
    },
    created: function () {
        // `this` points to the vm instance
        console.log('a is: ' + this.a)
    }
});


$(document).ready(function () {
    $("nav#menu").mmenu({
        "extensions": [
            "pagedim-black",
            "theme-dark"
        ]
    });

    var $icon = $("#my-icon");
    var API = $("nav#menu").data( "mmenu" );

    $icon.on( "click", function() {
        API.open();
    });

    API.bind( "open:finish", function() {
        setTimeout(function() {
            $icon.addClass( "is-active" );
        }, 100);
    });
    API.bind( "close:finish", function() {
        setTimeout(function() {
            $icon.removeClass( "is-active" );
        }, 100);
    });
});

