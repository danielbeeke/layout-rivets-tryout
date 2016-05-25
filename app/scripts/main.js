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

    functions: {
        toggleSidebar: function () {
            rivetsData.layout.sidebar.collapsed = !rivetsData.layout.sidebar.collapsed;
        },
        setPanelLeftFullscreen: function () {
            setPanelFullscreen('left');
        },
        setPanelRightFullscreen: function () {
            setPanelFullscreen('right');
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
        }
    }
};

rivetsData.functions.restoreState();

function setPanelFullscreen(panelName) {
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

rivets.bind($('#layout-container'), rivetsData);

setTimeout(function () {
    $('body').addClass('transitions-enabled');
}, 300);