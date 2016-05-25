$( document ).ready(function() {
    window.rivetsData = {
        sidebar: {
            collapsed: true
        },
        panel: {
            left: {
                expanded: false,
                collapsed: true
            },
            right: {
                expanded: true,
                collapsed: false
            }
        }
    };

    rivets.bind($('#layout-container'), window.rivetsData);

    setTimeout(function () {
        // It will only work if you change something inside the object, swapping the whole object breaks Rivets.
        window.rivetsData.panel = {
            sidebar: {
                collapsed: false
            },
            left: {
                expanded: true,
                collapsed: false
            },
            right: {
                expanded: false,
                collapsed: true
            }
        }
    }, 2000)

});

