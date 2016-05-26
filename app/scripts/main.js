// Our namespace.
window.octopus = {};

// I like the bind prefix more than rv.
// Rivets is very configurable.
rivets.configure({
    prefix: 'bind'
});

// For this component we use the namespace layout.
octopus.layout = {
    toggleSidebar: function () {
        rivetsData.layout.sidebar.collapsed = !rivetsData.layout.sidebar.collapsed;
    },
    setPanelLeftBig: function () {
        octopus.layout.setPanelBig('left');
    },
    setPanelRightBig: function () {
        octopus.layout.setPanelBig('right');
    },
    setPanelsBothMiddle: function () {
        rivetsData.layout.panel.left = {
            expanded: false,
            collapsed: false
        };

        rivetsData.layout.panel.right = {
            expanded: false,
            collapsed: false
        };
    },
    saveState: function () {
        localStorage.setItem('layoutState', JSON.stringify(rivetsData.layout));
    },
    restoreState: function () {
        var oldState = JSON.parse(localStorage.getItem('layoutState'));
        if (oldState) {
            rivetsData.layout = oldState;
        }
    },
    bothPanelsAreMedium: function (a, b) {
        return a == b && a == false;
    },
    setPanelBig: function (panelName) {
        var oppositePanelName = panelName == 'left' ? 'right' : 'left';

        rivetsData.layout.panel[panelName] = {
            expanded: true,
            collapsed: false
        };

        rivetsData.layout.panel[oppositePanelName] = {
            expanded: false,
            collapsed: true
        };
    }
};

// The object with the state of the layout.
window.rivetsData = {
    layout: {
        sidebar: {
            collapsed: false
        },
        panel: {
            left: {
                name: 'left',
                expanded: true,
                collapsed: false
            },
            right: {
                name: 'right',
                expanded: false,
                collapsed: true
            }
        }
    },

    // Reference the functions from our namespace so rivets can use them.
    functions: octopus.layout
};

// Restore the intial state.
octopus.layout.restoreState();

// Bind the rivetsData to the template.
rivets.bind($('#layout-container'), rivetsData);

// A small trick to block transitions on page load.
// Because we use a renderer we are a little late when rendering and
// because of that transitions kick in on initial page load.
setTimeout(function () {
    $('body').addClass('transitions-enabled');
}, 100);