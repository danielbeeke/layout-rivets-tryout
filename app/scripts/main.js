$( document ).ready(function() {
    window.rivetsData = {
        layout: {
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
        }
    };

    rivets.bind($('#layout-container'), rivetsData);

    // Paste the following in the console:

    /*
    rivetsData.layout = {
        sidebar: {
            collapsed: false
        },
        panel: {
            left: {
                expanded: true,
                collapsed: false
            },
            right: {
                expanded: false,
                collapsed: true
            }
        }
    };
    */
});

